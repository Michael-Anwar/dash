"use client";
import React from "react";
import Filter from "./Filter";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import Pagination from "./Pagination";

const UsersTable: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Filter />
      <div className="min-h-[calc(10*4rem)] md:overflow-x-auto">
        <table className="min-w-full table-fixed block md:table">
          <TableHeader />
          <TableRows />
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default UsersTable;