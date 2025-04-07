"use client";
import React from "react";
import { useSelector } from "react-redux";
import { BsEye } from "react-icons/bs";
// import { User } from "@/types/user";
import type { RootState } from "@/store";

const formatDate = (date: string | number | Date): string => {
  const formattedDate = new Date(date);
  return `${formattedDate.getDate()}-${formattedDate.getMonth() + 1}-${formattedDate.getFullYear()}`;
};

const TableRows: React.FC = () => {
  const { data: users, filterTerm, currentPage, rowsPerPage, sort } = useSelector(
    (state: RootState) => state.users
  );

  let filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  if (sort.column) {
    filteredUsers = [...filteredUsers].sort((a, b) => {
      if (sort.column === "name") {
        return sort.direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sort.column === "creationAt") {
        return sort.direction === "asc"
          ? new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime()
          : new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime();
      }
      return 0;
    });
  }

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + rowsPerPage);

  return (
    <tbody className="block md:table-row-group">
      {currentUsers.map((user, i) => (
        <tr
          key={user.id}
          className="block md:table-row mb-4 md:mb-0 bg-white md:bg-transparent rounded-lg shadow-md md:shadow-none p-4 md:p-0"
        >
          <td className="block md:table-cell md:w-12 px-4 py-2 md:border-none">
            <span className="md:hidden font-bold">No.: </span>
            {startIndex + i + 1}
          </td>
          <td className="block md:table-cell md:w-16 px-4 py-2 md:border-none">
            <span className="md:hidden font-bold">Avatar: </span>
            <div className="w-10 h-10 relative inline-block">
              <img
                src={
                  user.avatar?.startsWith("http")
                    ? user.avatar
                    : "/images/default-avatar.png"
                }
                alt={user.name}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </td>
          <td className="block md:table-cell md:w-48 px-4 py-2 md:border-none truncate">
            <span className="md:hidden font-bold">Name: </span>
            {user.name}
          </td>
          <td className="block md:table-cell md:w-24 px-4 py-2 md:border-none truncate">
            <span className="md:hidden font-bold">Role: </span>
            {user.role}
          </td>
          <td className="block md:table-cell md:w-32 px-4 py-2 md:border-none truncate">
            <span className="md:hidden font-bold">Created At: </span>
            {formatDate(user.creationAt)}
          </td>
          <td className="block md:table-cell md:w-32 px-4 py-2 md:border-none">
            <button className="flex items-center gap-1 bg-[#F84525] text-white px-2 py-1 rounded whitespace-nowrap">
              <BsEye />
              view
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;