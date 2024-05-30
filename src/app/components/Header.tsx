import React, { useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import Image from "next/image";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import Navlink from "./Navlink";

import Img1 from "../../Data/Img/2022-12-03 11.29.30 (1).jpg";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: any;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product Name", price: 14.5, quantity: 10, img: Img1 },
    { id: 2, name: "Product Name 2", price: 10.5, quantity: 1, img: Img1 },
    { id: 3, name: "Product Name 3", price: 20.0, quantity: 1, img: Img1 },
  ]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const increaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    onCloseDrawer();
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
            <Navlink
              activeClasses="active-red"
              className="mr-5 text-[20px] font-bold uppercase hover:text-green-700"
              href="/Search"
              text={
                <>
                  <SearchOutlined className="mt-[5px] text-[25px]"/>
                </>
              }
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
            <div onClick={handleCheckout} className="cursor-pointer">
              <Navlink
                activeClasses="active-red"
                className="h-[40px] w-full flex justify-center items-center  text-[20px] font-bold text-green-700 hover:text-red-500 border-2 border-green-700 hover:border-red-500"
                href="/checkout"
                text="Checkout"
              />
            </div>
          }
        >
          <div className="w-full">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full h-[75px] flex justify-between items-center border-b border-black-500"
              >
                <div className="flex">
                  <Image
                    alt="Product"
                    className="h-[60px] w-[60px]"
                    src={item.img}
                  />

                  <div className="h-[60px] ml-4 flex-col justify-center items-center">
                    <p className="text-[20px] text-green-500">{item.name}</p>
                    <p className="text-[16px] ">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="h-[40px] w-[90px] flex justify-around items-center border border-black-800">
                    <MinusOutlined
                      className="text-[20px] cursor-pointer"
                      onClick={() => decreaseQuantity(item.id)}
                    />
                    <p className="text-[20px]">{item.quantity}</p>
                    <PlusOutlined
                      className="text-[20px] cursor-pointer"
                      onClick={() => increaseQuantity(item.id)}
                    />
                  </div>
                  <DeleteOutlined
                    className="text-[25px] ml-5 text-red-600 cursor-pointer"
                    onClick={() => deleteItem(item.id)}
                  />
                </div>
              </div>
            ))}

            <div className="mt-[30px] flex justify-between items-center">
              <p className="text-[20px]">Total: ({totalItems})</p>
              <p className="text-[20px] text-red-600">
                ${totalPrice.toFixed(2)}
              </p>
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
              href="/Search"
              text={
                <>
                  <SearchOutlined className="mr-[10px] text-[25px]"/>
                  Search
                </>
              }
            />

            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/about"
              text={
                <>
                  <UserOutlined className="mr-[10px] text-[25px]"/>
                  About
                </>
              }
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/shop"
              text={
                <>
                 <ShoppingOutlined className="mr-[10px] text-[25px]"/>
                  Shop
                </>
              }
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/contact"
              text={
                <>
                 <CustomerServiceOutlined className="mr-[10px] text-[25px]"/>
                 Contact
                </>
              }
            />
            <Navlink
              activeClasses="active-red"
              className="h-[40px] w-full flex justify-start items-center text-[20px] font-bold uppercase border-b border-black-500 hover:text-green-700"
              href="/profile"
              text={
                <>
                 <UserOutlined className="mr-[10px] text-[25px]"/>
                 Profile
                </>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
