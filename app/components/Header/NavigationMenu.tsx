"use client";

import React, { useState } from "react";
import Image from "next/image";

const NavigationMenu = () => {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className="w-full h-20 bg-transparent">
      <section className="bg-white/50 w-[360px] mt-[10px] ml-8 backdrop-blur-sm backdrop-saturate-200 border border-gray-300/50 drop-shadow-lg shadow-[0_3px_20px_-5px_rgba(0,0,0,0.15)] rounded-full h-[58px]  flex justify-center items-center">
        <ul className="flex space-x-8 line">
          <a className="text-black text-lg hover:underline" href="#projects">
            Projects
          </a>
          <a className="text-black text-lg  hover:underline" href="#about">
            About
          </a>
          <a className="text-black text-lg  hover:underline" href="#contact">
            Contact
          </a>
        </ul>
        <button
          onClick={() => setLightMode(!lightMode)}
          className="ml-6 flex items-center justify-center w-10 h-10 rounded-full"
        >
          {!lightMode ? (
            <Image
              src="/icons/dark.svg"
              alt="light mode logo"
              width={60}
              height={60}
              style={{ objectFit: "cover" }}
              className="bg-transparent border border-black p-1 rounded-full"
            />
          ) : (
            <Image
              src="/icons/light.svg"
              alt="light mode logo"
              width={60}
              height={60}
              style={{ objectFit: "cover" }}
              className="bg-transparent border border-black p-1 rounded-full"
            />
          )}
        </button>
      </section>
    </div>
  );
};

export default NavigationMenu;
