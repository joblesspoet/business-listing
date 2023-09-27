import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" height={50} width={50} />
        <h2 className="text-[25px] tracking-widest font-semibold text-red-500">
          DISCOVER
        </h2>
      </div>
      <ul className="flex gap-8 items-center">
        <li className="text-[18px] hover:text-red-500 cursor-pointer">HOME</li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">
          Contact Us
        </li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">
          About Us
        </li>
      </ul>
    </div>
  );
};
