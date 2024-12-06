"use client";

import React, { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-20 px-10 flex items-center sticky justify-between w-full mt-[10px]">
      <div className="flex flex-col -space-y-2">
        <p className="font-normal text-lg">Angelo</p>
        <p className="font-normal text-lg">Convertini</p>
      </div>
      {windowWidth > 640 ? <NavigationMenu /> : <BurgerMenu />}
    </div>
  );
};

export default Header;
