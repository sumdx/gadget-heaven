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
    <div className="bg-gray-50 min-h-screen">
      <div className=" border-t ml-7 mr-7 rounded-tr-xl">
        <NavBar></NavBar>
      </div>
      <main className="flex-grow">
      <Outlet></Outlet>
      </main>
      <footer className="scroll bottom-0">
      <Footer></Footer>
      </footer>
      
    </div>
    </CartContext.Provider>
  );
};

export default Root;
