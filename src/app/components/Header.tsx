import React, { useState } from "react";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Navlink from "./Navlink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full relative ">
      <div className="Header-Body">
        <div className="w-11/12 h-[80px]  md:h-[100px] flex justify-between items-center">
          <div className="flex-1">
            <Link href="/">
              <h1 className="text-3xl font-bold">Web Icon</h1>
            </Link>
          </div>

          {/* For desktop screen (min-width: 1000px) */}
          <div className="hidden md:flex md:justify-end md:items-center">
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase"
              href="/"
              text="Home"
            />
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase"
              href="/about"
              text="About"
            />
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase"
              href="/shop"
              text="Shop"
            />
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase"
              href="/contact"
              text="Contact"
            />
            <Navlink
              activeClasses="active-red"
              className="mr-0 flex items-center"
              href="/profile"
              text={<UserIcon className="h-6 w-6" />}
            />
          </div>

          {/* For mobile screen (max-width: 999px) */}
          <div className="md:hidden flex justify-end items-center">
            <div className="flex items-center">
              <Navlink
                activeClasses="active-red"
                className="mr-5 flex items-center"
                href="/cart"
                text={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
              />

              {isMenuOpen ? (
                <CloseOutlined
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  onClick={toggleMenu}
                />
              ) : (
                <MenuOutlined
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="Header-Box">
          <div className="w-11/12 flex flex-col justify-center items-center">
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center  text-[20px] font-bold uppercase border-b border-black-500"
              href="/"
              text="Home"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center  text-[20px] font-bold uppercase border-b border-black-500"
              href="/about"
              text="About"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500"
              href="/shop"
              text="Shop"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500"
              href="/contact"
              text="Contact"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500"
              href="/profile"
              text="Profile"
            />
          </div>
        </div>
      )}
    </div>
  );
}
