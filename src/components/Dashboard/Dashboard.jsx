import React, { useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Carts from "../Carts/Carts";
import { createContext } from "react";
import WishList from "../WishList/WishList";
export const ProductsContext = createContext(1);
import "./Dashboard.css"
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Dashboard = () => {
  const [cartSelect, updateCartSelect ] = useState(true);
  const products = useLoaderData();
  const crtBtnHandle = (name) =>{
    if(name === "cart" && cartSelect === false){
      updateCartSelect(!cartSelect);
    }
    if(name === "wishlist" && cartSelect){
      updateCartSelect(!cartSelect);
    }
    
  }

  

  return (
    <div>
      <Helmet>
        <title>Dashboard|Gadget Heaven</title>
      </Helmet>
      <div className="bg-customPurple text-center h-52 flex flex-col justify-center">
        <div>
        <h1 className="text-4xl text-center  text-white">Dashboard</h1>
        <p className="text-sm font-light text-gray-200 mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-4">
        <div className="mr-4 inline-block">
        <button onClick={() => crtBtnHandle("cart")} className={!cartSelect ? "btn-normal" : "btn-active"}>Cart</button>
        </div>
        <div className="inline-block">
        <button onClick={() => crtBtnHandle("wishlist")} className={cartSelect ? "btn-normal" : "btn-active"}>Wishlist</button>
        </div>
        </div>
        
        
       
        
        </div>
      </div>
     

      <ProductsContext.Provider value={products}>
        <div>
          {
            cartSelect ? <Carts></Carts> : <WishList></WishList>
          }
          
        </div>
      </ProductsContext.Provider>
    </div>
  );
};

export default Dashboard;
