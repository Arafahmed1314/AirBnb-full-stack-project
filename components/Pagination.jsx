import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Font Awesome
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"; // Material Design
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Ant Design

import Link from "next/link";
import React from "react";

export default function Pagination() {
  return (
    <div className="mt-8 flex justify-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <Link
              href="#"
              className="block py-2 px-3 ml-0 leading-tight text-zinc-500 bg-white rounded-l-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <span className="sr-only">Previous</span>
              <FaArrowLeft />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="py-2 px-3 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="py-2 px-3 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="py-2 px-3 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 leading-tight text-zinc-500 bg-white rounded-r-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <span className="sr-only">Next</span>
              <FaArrowRight />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
