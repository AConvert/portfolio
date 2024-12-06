"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className="">
      <section className="w-full ">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-black rounded-3xl py-1 px-4 font-semibold cursor-pointer relative"
        >
          {!menuOpen ? "Menu" : "Close"}
        </button>
        <ul
          className={`${
            menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } flex flex-col space-y-3 text-white bg-purple absolute z-10 top-20 left-0 px-4 py-8 mx-10 w-4/5 h-[540px] max-h-[540px] rounded-[30px] transform transition-all duration-200 ease-in-out`}
        >
          <a className="h-12 border-b-2 border-white text-[32px]" id="projects">
            Projects
          </a>
          <a className="h-12 border-b-2 border-white text-[32px]" id="about">
            About
          </a>
          <a className="h-12 border-b-2 border-white text-[32px]" id="contact">
            Contact
          </a>
          <button
            onClick={() => setLightMode(!lightMode)}
            className="flex items-center space-x-4 pt-[248px]"
          >
            {!lightMode ? (
              <Image
                src="/icons/dark.svg"
                alt="light mode logo"
                width={60}
                height={60}
                style={{ objectFit: "cover" }}
                className="bg-white p-[10px] rounded-full"
              />
            ) : (
              <Image
                src="/icons/light.svg"
                alt="light mode logo"
                width={60}
                height={60}
                style={{ objectFit: "cover" }}
                className="bg-white p-[10px] rounded-full"
              />
            )}

            <p className="text-white opacity-80 font-light text-md">
              {lightMode ? "Light" : "Dark"} Mode
            </p>
          </button>
        </ul>
      </section>
    </div>
  );
};

export default BurgerMenu;
