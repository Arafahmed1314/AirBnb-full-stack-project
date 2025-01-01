import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch, FaLanguage, FaBars, FaUser } from "react-icons/fa"; // Import icons from React Icons
import PopUp from "./PopUp";

export default function Header() {
  return (
    <nav className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Hotel Logo"
            height={400}
            width={400}
            className="h-8 w-auto"
          />
        </Link>
      </div>

      <div className="row-start-2 col-span-2 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2">
        <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow">
          <input
            type="text"
            placeholder="Where to?"
            className="px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm"
          />
        </div>

        <button className="bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0">
          <FaSearch className="text-white" /> {/* Search Icon */}
        </button>
      </div>

      <div className="flex items-center space-x-4 relative justify-end">
        <button>
          <FaLanguage className="text-zinc-700 text-xl" /> {/* Language Icon */}
        </button>
        <button className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center">
          <FaBars /> {/* Bars Icon */}
          <span className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
            <FaUser className="text-white" /> {/* User Icon */}
          </span>
        </button>

        {/* Popup */}
        <PopUp />
      </div>
    </nav>
  );
}
