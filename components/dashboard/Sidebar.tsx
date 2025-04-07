"use client";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/authSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <aside className="flex flex-col justify-between w-64 text-black px-5 py-[2rem] border-r-4 border-white bg-[#f8f4f3] h-full z-[1]">
      <div>
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link href="/" className="block py-2 hover:text-[#F84525]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/users" className="block py-2 hover:text-[#F84525]">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={() => dispatch(logout())}
        className="cursor-pointer flex items-center gap-1 w-full justify-center text-xl font-bold bg-[#F84525] text-white py-3 rounded-xl"
      >
        logout <IoIosLogOut />
      </button>
    </aside>
  );
}