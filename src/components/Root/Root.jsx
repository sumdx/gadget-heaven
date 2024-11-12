import React, { createContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { getStoredCartList } from "../../Utility/addToDb";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";


export const CartContext = createContext(1);

const Root = () => {

  const [cart, cartUpdate] = useState([]);
  const [wishList, wishListUpdate] =useState([])
  const cartItems = getStoredCartList("cart");
  const wishItems = getStoredCartList("wishlist");
  useEffect(()=>{
    cartUpdate(cartItems);
  },[])

  useEffect(()=>{
    wishListUpdate(wishItems);
  },[])



  return (
    <CartContext.Provider value={{cart,cartUpdate,wishList,wishListUpdate}}>
    <div className="bg-gray-50">
      <div className=" border-t pt-2 pl-2 pr-2  rounded-tr-xl">
        <NavBar></NavBar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </CartContext.Provider>
  );
};

export default Root;
