"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/store/slices/usersSlice";
import type { RootState, AppDispatch } from "@/store";

const Pagination: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: users, filterTerm, currentPage, rowsPerPage } = useSelector(
    (state: RootState) => state.users
  );

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage ? "bg-[#F84525] text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;