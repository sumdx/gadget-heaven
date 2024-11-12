import React, { useContext, useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { getStoredCartList } from "../../Utility/addToDb";
import { CartContext } from "../Root/Root";

const NavBar = () => {
  
  const cartItems = getStoredCartList("cart");
  const {wishList,wishListUpdate} = useContext(CartContext);
  const location = useLocation();

  return (
    <div className={(location.pathname ==='/' ? "home-route" : "another-route")}>
      <h1 className="text-xl font-bold">Gadget Heaven</h1>
      <div className="flex gap-5">
        <NavLink to={"/"}>
          <h1>Home</h1>
        </NavLink>
        <NavLink to={"statistics"}>
          <h1>Statistics</h1>
        </NavLink>
        <NavLink to={"dashboard"}>
          <h1>Dashboard</h1>
        </NavLink>
        <NavLink to={"purchaseHistory"}>
          <h1>History</h1>
        </NavLink>
      </div>
      <div className="flex gap-6">
        <div className="bg-white text-black text-xl shadow-lg shadow-black rounded-full p-2 relative">
          <Link to="dashboard"><HiOutlineShoppingCart/></Link>
          <p className="absolute -top-2 -right-4 bg-green-500 rounded-full px-2 py-1 text-xs">{cartItems.length}</p>
        </div>
        <div className="bg-white  text-black text-xl shadow-lg shadow-black rounded-full p-2 relative">
          <Link to="dashboard"><MdFavoriteBorder/></Link>
          <p className="absolute -top-2 -right-4 bg-green-500 rounded-full px-2 py-1 text-xs">{wishList.length}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
