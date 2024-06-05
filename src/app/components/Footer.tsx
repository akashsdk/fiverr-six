import React from "react";
import Link from "next/link";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="w-full relative">
      <div className="web-bg w-full flex justify-center border-t-2">
        <div className="w-11/12 md:flex mt-5 mb-5">
          <div className="flex-1">jhbbhvvdhbv</div>

          <div className="flex-1 border-l-2 border-green-700">
            <p className="md:text-[30px] md:ml-3 text-[20px] font-bold mb-4 text-green-700">
              Stay Connected
            </p>
            <div className="ml-5">
              <p className="font-bold">EMAIL</p>
              <p className="opacity-70">something@tyler.com</p>
            </div>

            <div className="ml-5 mt-3">
              <p className="font-bold">PHONE NUMBER</p>
              <p className="opacity-70">202-555-0188</p>
            </div>

            <div className="ml-5 mt-3">
              <p className="font-bold">ADDRESS</p>
              <p className="opacity-70">2727 Ocean Road, Malibu, CA, 90264</p>
            </div>
          </div>

          <div className="flex-1">
            <p className="md:text-[30px] md:ml-3 text-[20px] font-bold mb-4 text-green-700">
              Support
            </p>

            <a
              className=" h-[60px] w-[230px] border-2 border-green-700 flex items-center justify-evenly rounded-[30px] opacity-60 hover:opacity-100"
              href="tel:202-555-0188"
            >
              <PhoneOutlined className="transform rotate-90 text-green-700 font-bold text-[25px]" />
              <div className="h-[30px] w-[2px] bg-green-700" />
              <p className="font-bold text-[18px]">01321-100152</p>
            </a>

            <div className="flex mt-7">
              <a
                className="h-[50px] w-[50px] rounded-[5px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined className="text-[30px] opacity-70 " />
              </a>

              <a
                className="h-[50px] w-[50px] rounded-[5px]  ml-2  border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppOutlined className="text-[30px] opacity-70 " />
              </a>

              <a
                className="h-[50px] w-[50px] rounded-[5px]  ml-2  border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeOutlined className="text-[30px] opacity-70 " />
              </a>

              <a
                className="h-[50px] w-[50px] rounded-[5px] ml-2 border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined className="text-[30px] opacity-70 " />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer-Box">
        <div className="w-11/12 h-[80px] md:h-[100px] flex justify-between items-center">
          <div className="flex-1 hidden md:flex">
            <Link href="/" className="mr-2 hover:text-red-500">
              <p>Home</p>
            </Link>

            <Link href="/about" className="mr-2 hover:text-red-500">
              <p>About</p>
            </Link>

            <Link href="/shop" className="mr-2 hover:text-red-500">
              <p>Shop</p>
            </Link>

            <Link href="/contact" className="mr-2 hover:text-red-500">
              <p>Contact</p>
            </Link>
          </div>

          <div className="flex-1 flex md:justify-center">
            <Link href="/">
              <h1 className="text-3xl font-bold">Web Icon</h1>
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <p className="Footer-Box-text5">
              Copyright &copy; {new Date().getFullYear()}
              <a
                className="ml-2"
                href="https://my-portfolio-d43ec.web.app/"
                target="_blank"
              >
                Site Name
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
