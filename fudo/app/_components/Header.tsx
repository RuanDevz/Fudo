"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import { FC, useState, useEffect } from "react";
import Button from "./Button";
import { LogIn, Menu, X } from "lucide-react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<string | number>("0px");

  useEffect(() => {
    const menuElement = document.getElementById("mobile-menu");
    if (isMenuOpen) {
      if (menuElement) {
        setMenuHeight(`${menuElement.scrollHeight}px`);
      }
    } else {
      setMenuHeight("0px");
    }
  }, [isMenuOpen]);

  return (
    <header className={`shadow-md ${isMenuOpen ? "bg-primary" : "lg:bg-[#fdf3f3] bg-primary"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-7">
        <div className="flex items-center gap-2 font-semibold">
          <Image src={logo} alt="Logo" quality={100} width={40} height={40} />
          <h1 className=" hidden text-2xl text-white font-semibold transition-colors duration-300 ease-in-out lg:flex hover:text-primary">
            Fudo
          </h1>
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex gap-14 font-medium text-gray-700">
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              O que é o Fudo
            </li>
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Serviços
            </li>
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Menu
            </li>
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Contato
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Button className="flex gap-2 transition-colors duration-300 ease-in-out hover:bg-gray-100">
            <LogIn />
            Login
          </Button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        style={{ height: menuHeight, overflow: "hidden" }}
        className={`lg:hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-4 p-4 font-medium text-white">
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-300">
            O que é o Fudo
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-300">
            Serviços
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-300">
            Menu
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-300">
            Contato
          </li>
          <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-200">
            <Button className="flex gap-2">
              <LogIn />
              Login
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
