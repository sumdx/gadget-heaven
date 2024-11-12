import React, { useContext, useEffect, useState } from "react";
import { clearCart, getStoredCartList } from "../../Utility/addToDb";
import Cart from "../Cart/Cart";
import { ProductsContext } from "../Dashboard/Dashboard";
import { CartContext } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Carts = () => {
  const [totalCost, updateCost] = useState(0);
  
  // const carts = getStoredCartList("cart");

  const products = useContext(ProductsContext);
  
  const {cart, cartUpdate} =useContext(CartContext);
  
  const clearCartHandle =()=>{
    if(totalCost>0){
      toast.success("Item Added to the Cart", {
        position: "top-left",
      });
      clearCart("cart");
      cartUpdate(getStoredCartList("cart"));
    }else{
      toast.warn("Empty cart, Please add something.", {
        position: "top-left",
      });
    }
    
  }
  useEffect(()=>{
    const total = cart.reduce((acc, cartId) => {
      const product = products.find(
        (product) => parseInt(product.product_id) === parseInt(cartId)
      );
      return product ? acc + product.price : acc;
    }, 0);

    updateCost(total);
  },[cart])
  

  return (
    <div>
      
      <div className="container flex justify-between mx-auto py-8">
        <h1 className="flex justify-between font-bold">Cart</h1>
        <div className="flex gap-4">
          <h1 className="font-bold">Total cost: {totalCost.toFixed(2)} </h1>
          <button>Sort by price</button>
          <button onClick={clearCartHandle}>Purchase</button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-6">
        {cart.map((cart) => {
          const newProduct = products.find(
            (product) => parseInt(product.product_id) === parseInt(cart)
          );
          
          return <Cart newProduct={newProduct} ></Cart>;
        })}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Carts;
