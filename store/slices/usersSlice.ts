import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


import { User } from "@/types/user";


interface UsersState {
  data: User[];
  filterTerm: string;
  currentPage: number;
  rowsPerPage: number;
  sort: { column: "name" | "creationAt" | null; direction: "asc" | "desc" };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}


export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/users", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    filterTerm: "",
    currentPage: 1,
    rowsPerPage: 10,
    sort: { column: null, direction: "asc" },
    status: "idle",
    error: null,
  } as UsersState,
  reducers: {
    setFilterTerm(state, action: PayloadAction<string>) {
      state.filterTerm = action.payload;
      state.currentPage = 1; 
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSort(
      state,
      action: PayloadAction<{ column: "name" | "creationAt" | null; direction: "asc" | "desc" }>
    ) {
      state.sort = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setFilterTerm, setCurrentPage, setSort } = usersSlice.actions;
export default usersSlice.reducer;