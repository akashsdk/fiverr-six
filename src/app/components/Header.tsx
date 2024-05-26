import React, { useState } from "react";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";
import { Button, Drawer, Radio, Space } from "antd";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Navlink from "./Navlink";

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
          title="Shopping Cart"
          placement="right"
          width={500}
          onClose={onCloseDrawer}
          visible={isDrawerVisible}
          footer={
            <Space>
              <Button onClick={onCloseDrawer}>Cancel</Button>
              <Button type="primary" onClick={onCloseDrawer}>
                OK
              </Button>
            </Space>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
      {isMenuOpen && (
        <div className="Header-Box md:hidden">
          <div className="w-11/12 flex flex-col justify-center items-center">
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500"
              href="/"
              text="Home"
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500"
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
