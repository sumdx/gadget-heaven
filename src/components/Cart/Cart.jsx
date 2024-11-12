import React, { useContext, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { deleteFromCart, getStoredCartList } from "../../Utility/addToDb";
import { CartContext } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ newProduct}) => {
  const { product_id, product_image, product_title, price, description } = newProduct;
  const { cart, cartUpdate } = useContext(CartContext);



  const cartItemDlt = (product_id) => {
    

    deleteFromCart(product_id, "cart");
    cartUpdate(getStoredCartList("cart"));
  };



  return (
    <div>
      <div className="flex gap-6 mb-6 border p-4 items-center justify-between">
        <div className="flex gap-6">
          <div className="">
            <img className="max-h-28 object-cover" src={product_image} alt="" />
          </div>
          <div className="flex gap-4 flex-col justify-between">
            <h1 className=" text-xl font-bold">{product_title}</h1>
            <p className="font-light">{description}</p>
            <h3 className="font-bold">Price : {price}</h3>
          </div>
        </div>

        <div>
          <MdDeleteForever
            onClick={() => cartItemDlt(product_id)}
            className="active:text-red-200 text-4xl text-red-500 active:scale-125 active:rotate-45"
          />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Cart;
