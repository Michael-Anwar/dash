import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  sidebarVisible: boolean;
}

const initialState: UiState = {
  sidebarVisible: true, 
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible;
    },
    setSidebarVisible(state, action: PayloadAction<boolean>) {
      state.sidebarVisible = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarVisible } = uiSlice.actions;
export const selectSidebarVisible = (state: { ui: UiState }) => state.ui.sidebarVisible;

export default uiSlice.reducer;