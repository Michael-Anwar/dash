"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/slices/usersSlice";
import UsersTable from "@/components/dashboard/UsersTable";
import type { RootState, AppDispatch } from "@/store"; 

export default function Page() {
  const dispatch = useDispatch<AppDispatch>(); 
  const {status, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-500">Error Loading Users</h2>
        <p>{error || "Could not fetch users. Please try again later."}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <UsersTable />
    </div>
  );
}