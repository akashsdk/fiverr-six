"use client";
import React, { useState } from "react";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, FacebookOutlined, WhatsAppOutlined, YoutubeOutlined, LinkedinOutlined } from "@ant-design/icons";
import { message, notification } from 'antd';

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [messageApi, messageContextHolder] = message.useMessage();
  const [notificationApi, notificationContextHolder] = notification.useNotification();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !messageContent) {
      notificationApi.warning({
        message: 'Warning',
        description: 'Email and message are required!',
      });
      return;
    }

    messageApi.open({
      key: 'updatable',
      type: 'loading',
      content: 'Loading...',
    });

    setTimeout(() => {
      messageApi.open({
        key: 'updatable',
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
      setName("");
      setPhone("");
      setEmail("");
      setMessageContent("");
      notificationApi.success({
        message: 'Success',
        description: 'Your message has been sent successfully!👍 Our team will contact you very soon.🤗 Thank you sir/maam for being with us🥰',
      });
    }, 1000);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {messageContextHolder}
      {notificationContextHolder}
      <div className="w-11/12 md:mt-[20px] md:mb-[30px]">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-1/2 p-4">
            <p className="md:text-[35px] text-[25px] font-bold mb-4 text-green-700">
              Get In Touch
            </p>
            <form className="flex flex-col space-y-4" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Full name"
                className="border-2 p-2 w-full rounded-[5px] outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="border p-2 w-full rounded-[5px] outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email*"
                className="border p-2 w-full rounded-[5px] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message*"
                className="border p-2 w-full rounded-[5px] outline-none"
                rows={4}
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
              />
              <button
                type="submit"
                className="p-2 rounded-[5px] bg-green-700 text-white border-2 border-green-700 font-bold hover:text-green-700 hover:bg-white mt-2"
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
              <a
                className="h-[50px] w-[50px] rounded-[25px] border-2 flex justify-center items-center"
                href="mailto:something@tyler.com"
              >
                <MailOutlined className="text-[25px] opacity-70" />
              </a>
              <div className="ml-5">
                <p className="font-bold">EMAIL</p>
                <p className="opacity-70">something@tyler.com</p>
              </div>
            </div>
            <div className="flex items-center md:ml-3">
              <a
                className="h-[50px] w-[50px] rounded-[25px] border-2 flex justify-center items-center"
                href="tel:202-555-0188"
              >
                <PhoneOutlined className="text-[25px] opacity-70" />
              </a>
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
                <a
                  className="h-[40px] w-[40px] ml-[-10px] rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookOutlined className="text-[20px] opacity-70 " />
                </a>

                <a
                  className="h-[40px] w-[40px] ml-2 rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppOutlined className="text-[20px] opacity-70 " />
                </a>

                <a
                  className="h-[40px] w-[40px] ml-2 rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeOutlined className="text-[20px] opacity-70 " />
                </a>

                <a
                  className="h-[40px] w-[40px] ml-2 rounded-[20px] border-2 flex justify-center items-center border-green-700 bg-green-700 hover:bg-white text-white hover:text-green-700"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOutlined className="text-[20px] opacity-70 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
