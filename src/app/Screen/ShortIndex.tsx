"use client";
import Image from 'next/image';
import React from 'react';

import Icon1 from "../../Data/Icon/shield.png";

export default function ShortIndex() {
  return (
    <div className="web-bg2 w-full h-[50px] flex justify-center items-center">
        <div className="w-11/12 flex justify-center items-center">
            <div>
                <Image alt='ok' src={Icon1} />
                <p>Safe Payments</p>
            </div>
        </div>
    </div>
  )
}
