"use client";
import Image from 'next/image';
import React from 'react';

export default function Contact() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-11/12 md:mt-[20px] md:mb-[30px]">
        <div className='flex flex-col md:flex-row justify-center items-start'>
          <div className='w-full md:w-1/2 p-4'>
            <p className="md:text-[35px] text-[25px] font-bold mb-4">Get In Touch</p>
            <form className='flex flex-col space-y-4'>
              <input
                type="text"
                placeholder='Full name'
                className='border p-2 w-full'
              />
              <input
                type="text"
                placeholder='Phone Number'
                className='border p-2 w-full'
              />
              <input
                type="email"
                placeholder='Email'
                className='border p-2 w-full'
              />
              <textarea
                placeholder='Message'
                className='border p-2 w-full'
                rows="4"
              />
              <button type="submit" className="bg-green-500 text-white p-2 rounded">
                SEND NOW
              </button>
            </form>
          </div>
          <div className='w-full md:w-1/2 p-4 flex flex-col space-y-4'>
            <p className="md:text-[35px] text-[25px] font-bold mb-4">Talk To Us</p>
            <div className='flex items-center'>
              <Image src="/path/to/email-icon.png" alt="Email" className='mr-2' />
              <div>
                <p className='font-bold'>EMAIL</p>
                <p>something@tyler.com</p>
              </div>
            </div>
            <div className='flex items-center'>
              <Image src="/path/to/phone-icon.png" alt="Phone Number" className='mr-2' />
              <div>
                <p className='font-bold'>PHONE NUMBER</p>
                <p>202-555-0188</p>
              </div>
            </div>
            <div className='flex items-center'>
              <Image src="/path/to/address-icon.png" alt="Address" className='mr-2' />
              <div>
                <p className='font-bold'>ADDRESS</p>
                <p>2727 Ocean Road, Malibu, CA, 90264</p>
              </div>
            </div>
            <div className='flex space-x-2'>
              <p className='font-bold'>Follow Us:</p>
              <Image src="/path/to/facebook-icon.png" alt="Facebook" />
              <Image src="/path/to/twitter-icon.png" alt="Twitter" />
              <Image src="/path/to/linkedin-icon.png" alt="LinkedIn" />
              <Image src="/path/to/youtube-icon.png" alt="YouTube" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
