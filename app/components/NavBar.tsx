"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-[67px] bg-black z-50">
      <nav className=" container  h-full flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Logo" className="w-[148px] lg:w-[181px]" />
        </div>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden lg:flex gap-6 text-white">
            <li className="cursor-pointer flex items-center hover:text-[#1FCFF1] transition-colors duration-300">
              Learn <KeyboardArrowDownRoundedIcon />
            </li>
            <li className="cursor-pointer flex items-center hover:text-[#1FCFF1] transition-colors duration-300">
              Build <KeyboardArrowDownRoundedIcon />
            </li>
            <li className="cursor-pointer flex items-center hover:text-[#1FCFF1] transition-colors duration-300">
              Network <KeyboardArrowDownRoundedIcon />
            </li>
            <li className="cursor-pointer flex items-center hover:text-[#1FCFF1] transition-colors duration-300">
              Community <KeyboardArrowDownRoundedIcon />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer text-white"
          >
            {showMenu ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </span>
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`absolute z-30 top-[67px] left-0 w-full bg-black text-white p-4 transform transition-all duration-300 ease-in-out ${
            showMenu
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer flex items-center text-sm">
              Learn <KeyboardArrowDownRoundedIcon />
            </li>
            <li className="cursor-pointer flex items-center text-sm">
              Build <KeyboardArrowDownRoundedIcon />
            </li>
            <li className="cursor-pointer flex items-center text-sm">
              Network <KeyboardArrowDownRoundedIcon />
            </li>
            <li className="cursor-pointer flex items-center text-sm">
              Community <KeyboardArrowDownRoundedIcon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
