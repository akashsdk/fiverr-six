import React, { useState } from "react";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";
import { Button, Drawer, Radio, Space } from "antd";
import Image from "next/image";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Navlink from "./Navlink";

import Img1 from "../../Data/Img/2022-12-03 11.29.30 (1).jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <div className="w-full relative">
      <div className="Header-Body">
        <div className="w-11/12 h-[80px] md:h-[100px] flex justify-between items-center">
          <div className="flex-1">
            <Link href="/">
              <h1 className="text-3xl font-bold">Web Icon</h1>
            </Link>
          </div>

          {/* For desktop screen (min-width: 1000px) */}
          <div className="hidden md:flex md:justify-end md:items-center">
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase hover:text-green-700"
              href="/"
              text="Home"
            />
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold hover:text-green-700 uppercase"
              href="/about"
              text="About"
            />
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase hover:text-green-700"
              href="/shop"
              text="Shop"
            />
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase hover:text-green-700"
              href="/contact"
              text="Contact"
            />
            <ShoppingCartOutlined
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={showDrawer}
            />
          </div>

          {/* For mobile screen (max-width: 999px) */}
          <div className="md:hidden flex items-center">
            <div className="flex items-center">
              <ShoppingCartOutlined
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
                onClick={showDrawer}
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
        <Drawer
          title={
            <div className="flex justify-between items-center">
              <p className="text-[20px] text-green-700">Shopping Cart</p>
            </div>
          }
          placement="right"
          width={500}
          onClose={onCloseDrawer}
          visible={isDrawerVisible}
          footer={
            <button className="h-[40px] w-full flex justify-center items-center bg-green-700 text-white text-[20px] font-bold hover:text-green-700 hover:bg-white">
              CONTINUE SHOPPING
            </button>
          }
        >
          <div className="w-full">
            <div className="w-full h-[75px] flex justify-between items-center">
              <div className="flex">
                <Image alt="Product" className="h-[60px] w-[60px]" src={Img1} />

                <div className="h-[60px] ml-4 flex-col justify-center items-center">
                  <p className="text-[20px] text-green-500">Product Name</p>
                  <p className="text-[16px] ">$14.50</p>
                </div>
              </div>

              <div className="flex ">
                <div className="h-[35px] w-[80px] flex justify-around items-center">
                  <MinusOutlined className="text-[20px]" />
                  <p className="text-[20px]">10</p>
                  <PlusOutlined className="text-[20px]" />
                </div>
                <DeleteOutlined className="text-[25px] ml-5 text-red-600" />
              </div>
            </div>

            <div className="mt-[30px] flex justify-between items-center">
              <p className="text-[20px]">Total: (3)</p>
              <p className="text-[20px] text-red-600">$ 41</p>
            </div>
          </div>
        </Drawer>
      </div>
      {isMenuOpen && (
        <div className="Header-Box md:hidden">
          <div className="w-11/12 flex flex-col justify-center items-center">
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/"
              text="Home"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/about"
              text="About"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/shop"
              text="Shop"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/contact"
              text="Contact"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/profile"
              text="Profile"
            />
          </div>
        </div>
      )}
    </div>
  );
}
