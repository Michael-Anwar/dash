"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "@/store/slices/usersSlice";
import type { RootState, AppDispatch } from "@/store";

const TableHeader: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sort = useSelector((state: RootState) => state.users.sort);

  const handleSort = (column: "name" | "creationAt") => {
    const direction =
      sort.column === column && sort.direction === "asc" ? "desc" : "asc";
    dispatch(setSort({ column, direction }));
  };

  return (
    <thead className="hidden md:table-header-group">
      <tr className="bg-gray-100">
        <th className="w-12 px-4 py-2 text-left">No.</th>
        <th className="w-16 px-4 py-2 text-left">Avatar</th>
        <th
          className="w-48 px-4 py-2 text-left cursor-pointer truncate"
          onClick={() => handleSort("name")}
        >
          Name {sort.column === "name" && (sort.direction === "asc" ? "↑" : "↓")}
        </th>
        <th className="w-24 px-4 py-2 text-left">Role</th>
        <th
          className="w-32 px-4 py-2 text-left cursor-pointer truncate"
          onClick={() => handleSort("creationAt")}
        >
          Created At {sort.column === "creationAt" && (sort.direction === "asc" ? "↑" : "↓")}
        </th>
        <th className="w-32 px-4 py-2 text-left">View Profile</th>
      </tr>
    </thead>
  );
};

export default TableHeader;