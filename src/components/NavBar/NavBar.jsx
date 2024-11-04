import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="bg-customPurple text-white flex justify-between px-6 py-4 items-center rounded-b-none rounded-bl-none rounded-xl">
      <h1 className="text-xl font-bold">Gadget Heaven</h1>
      <div className="flex gap-5">
        <NavLink to={"/"}><h1>Home</h1></NavLink>
        
        <h1>Statistics</h1>
        <NavLink to={"/dashboard"}><h1>Dashboard</h1></NavLink>
        
      </div>
      <div className="flex gap-3">
        <div className="bg-white text-black text-xl shadow-lg shadow-black rounded-full p-2">
          <HiOutlineShoppingCart />
        </div>
        <div className="bg-white text-black text-xl shadow-lg shadow-black rounded-full p-2">
          <MdFavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
