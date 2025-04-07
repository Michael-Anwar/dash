"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterTerm } from "@/store/slices/usersSlice";
import type { RootState, AppDispatch } from "@/store";

const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filterTerm = useSelector((state: RootState) => state.users.filterTerm);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterTerm(e.target.value));
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by name..."
        value={filterTerm}
        onChange={handleFilterChange}
        className="border px-3 py-1 rounded w-[300px]"
      />
    </div>
  );
};

export default Filter;