"use client";
import { useState } from "react";
import Image from "next/image";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button onClick={() => setOpen(!open)} className="relative w-8 h-8 m-3">
        <div
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : ""
          } relative w-full h-full`}
        >
          <Image
            src="/images/burger_menu.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="burger menu"
          />
        </div>
      </button>
      <section className="relative w-full ">
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-0 left-0 w-screen bg-white`}
        >
          <ul className="flex flex-col justify-center h-full w-full pl-3">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Projects</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BurgerMenu;
