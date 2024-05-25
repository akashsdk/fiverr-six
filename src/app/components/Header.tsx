import React from "react";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="h-24 w-full flex justify-center items-center bg-[#ffffff] shadow-md mb-2.5">
      <div className="w-11/12 flex justify-center items-center">
        <div className="flex-1">
          <Link href="/">
            <h1 className="text-3xl font-bold">Web Icon</h1>
          </Link>
        </div>
        <div className="flex-3 flex justify-end items-center">
          <Link href="/" className="mr-5">
            Home
          </Link>
          <Link
            href="/about"
            className="mr-5"
          >
            About
          </Link>
          <Link href="/shop" className="mr-5">
            Shop
          </Link>
          <Link href="/contact" className="mr-5">
            Contact
          </Link>
          <Link href="/profile" className="mr-0 flex items-center">
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
