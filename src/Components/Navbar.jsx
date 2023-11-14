import {
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/shop", name: "Shop" },
    { id: 3, path: "/collections", name: "Collections" },
    { id: 4, path: "/about", name: "About" },
    { id: 5, path: "/contact", name: "Contact" },
  ];
  
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="bg-dark-green bg-noise flex h-[70px] justify-between ">
        <div className="my-auto pl-7 font-logo text-cust-yellow text-base md:text-2xl xl:text-3xl ">
          Vivienne's
        </div>
        <ul
          className={`text-sm flex absolute top-[70px] w-full h-full gap-10 pt-10 bg-noise flex-col items-center md:pt-0 md:flex-row md:static md:gap-10 md:my-auto md:pr-10 md:max-w-full md:justify-end xl:text-base transition-all duration-200 ${
            !open ? "left-[-100%]" : "left-0"
          }`}
        >
          {navLinks.map((link, index) => (
            <NavLink to={link.path} key={index}>
              <li className="font-title cursor-pointer text-white pb-2 border-2 border-transparent hover:text-cust-yellow hover:border-2 hover:border-solid hover:border-b-cust-yellow">
                {link.name}
              </li>
            </NavLink>
          ))}
          <div className="flex gap-10 mb-2">
            <PersonOutlineOutlined
              style={{ color: "white" }}
              className="cursor-pointer p-[1px] rounded-full hover:bg-cust-yellow"
            />
            <ShoppingCartOutlined
              style={{ color: "white" }}
              className="cursor-pointer p-[1px] rounded-full hover:bg-cust-yellow"
            />
          </div>
        </ul>
        <div
          className="flex flex-col gap-1 my-auto mr-5 md:hidden "
          onClick={toggle}
        >
          <div
            className={`h-[2px] w-5 bg-white transition-all duration-200 transform ${
              open ? "rotate-45 translate-y-1" : ""
            } `}
          ></div>
          <div
            className={`h-[2px] w-5 bg-white transition-all duration-200 transform ${
              open ? "-rotate-45 -translate-y-[1.8px]" : ""
            } `}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
