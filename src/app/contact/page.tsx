"use client";
import React from "react";
import Image from "next/image";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-11/12 md:mt-[20px] md:mb-[30px]">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-1/2 p-4">
            <p className="md:text-[35px] text-[25px] font-bold mb-4 text-green-700">
              Get In Touch
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="border-2 p-2 w-full  rounded-[5px] outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-2 w-full  rounded-[5px] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full rounded-[5px] outline-none"
              />
              <textarea
                placeholder="Message"
                className="border p-2 w-full rounded-[5px] outline-none"
                rows={4}
              />
              <button
                type="submit"
                className="bg-green-700 text-white p-2 rounded"
              >
                SEND NOW
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
            <p className="md:text-[35px] md:ml-3 text-[25px] font-bold mb-4 text-green-700">
              Talk To Us
            </p>
            <div className="flex items-center md:ml-3">
              <div className="h-[50px] w-[50px] rounded-[25px] border-2 flex justify-center items-center">
                <MailOutlined className="text-[25px] opacity-70" />
              </div>
              <div className="ml-5">
                <p className="font-bold">EMAIL</p>
                <p className="opacity-70">something@tyler.com</p>
              </div>
            </div>
            <div className="flex items-center md:ml-3">
              <div className="h-[50px] w-[50px] rounded-[25px] border-2 flex justify-center items-center">
                <PhoneOutlined className="text-[25px] opacity-70" />
              </div>
              <div className="ml-5">
                <p className="font-bold">PHONE NUMBER</p>
                <p className="opacity-70">202-555-0188</p>
              </div>
            </div>
            <div className="flex items-center md:ml-3">
              <div className="h-[50px] w-[50px] rounded-[25px] border-2 flex justify-center items-center">
                <EnvironmentOutlined className="text-[25px] opacity-70" />
              </div>
              <div className="ml-5">
                <p className="font-bold">ADDRESS</p>
                <p className="opacity-70">2727 Ocean Road, Malibu, CA, 90264</p>
              </div>
            </div>
            <div className="flex flex-col space-x-2 md:ml-[15%]">
              <p className="font-bold">Follow Us:</p>

              <div className="flex mt-3">
                <div className="h-[40px] w-[40px] ml-[-10px] rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700">
                  <FacebookOutlined className="text-[20px] opacity-70 " />
                </div>

                <div className="h-[40px] w-[40px] ml-2 rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700">
                  <WhatsAppOutlined className="text-[20px] opacity-70 " />
                </div>

                <div className="h-[40px] w-[40px] ml-2 rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700">
                  <YoutubeOutlined className="text-[20px] opacity-70 " />
                </div>

                <div className="h-[40px] w-[40px] ml-2 rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700">
                  <LinkedinOutlined className="text-[20px] opacity-70 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
