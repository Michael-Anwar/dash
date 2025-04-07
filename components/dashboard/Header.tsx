"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "@/store/slices/authSlice";
import { toggleSidebar } from "@/store/slices/uiSlice";
import Image from "next/image";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className="p-4 flex justify-between items-center sticky top-0 bg-white shadow-md z-30">
      <div className="flex items-center gap-3">
        <div
          className="bg-[#F84525] w-fit aspect-square rounded-full p-2 cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        >
          <BiMenuAltLeft size={40} className="text-white" />
        </div>
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome, <span className="text-[#F84525]">{user?.name || "User"}</span>!
        </h1>
      </div>
      <div className="flex gap-5">
        <div className="w-[45px] aspect-square rounded-full relative">
          <Image
            src={user?.profilePic || "/images/default-avatar.png"}
            alt={`${user?.name || "User"} profile pic`}
            fill
            className="rounded-full"
          />
          <div className="w-[10px] aspect-square rounded-full absolute bg-green-500 bottom-0 right-0" />
        </div>
        <div className="flex flex-col">
          <span>{user?.name || "User"}</span>
          <span className="text-gray-700">{user?.email || "No email"}</span>
        </div>
      </div>
    </header>
  );
}