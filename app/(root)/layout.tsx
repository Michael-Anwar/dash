"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "@/store/slices/authSlice";
import { selectSidebarVisible, toggleSidebar } from "@/store/slices/uiSlice";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const sidebarVisible = useSelector(selectSidebarVisible);
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex min-h-screen text-black bg-[#f8f4f3]">
      <div
        className={`fixed inset-y-0 left-0 z-[3] w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:${sidebarVisible ? "block" : "hidden"}`}
      >
        <Sidebar />
      </div>

      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[2] md:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      <div className="flex-1 relative max-h-screen overflow-y-scroll">
        <Header />
        <main className="p-6 z-[1] relative">{children}</main>
        <div className="w-[450px] aspect-square rounded-full fixed bottom-0 -left-0 blur-2xl opacity-10 bg-[#F84525] z-[4] " />
      </div>
    </div>
  );
}
