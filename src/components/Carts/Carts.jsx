import React, { useContext, useEffect, useState } from "react";
import { clearCart, getStoredCartList, setStoredCartList } from "../../Utility/addToDb";
import Cart from "../Cart/Cart";
import { ProductsContext } from "../Dashboard/Dashboard";
import { CartContext } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { MdDoneAll } from "react-icons/md";

const Carts = () => {
  const [totalCost, updateCost] = useState(0);

  // const carts = getStoredCartList("cart");

  const products = useContext(ProductsContext);

  const { cart, cartUpdate, wishList, wishListUpdate } = useContext(CartContext);

  const clearCartImp = () =>{
    clearCart("cart");
    cartUpdate(getStoredCartList("cart"));
  }
  const setHistory =()=> {
    const timestamp = Date.now();
    const historyItem = {
      itemLength : cart.length,
      totalPrice : totalCost,
      time: timestamp
    }
    setStoredCartList(historyItem,"history")
  }
  const clearCartHandle = () => {
    
    if (totalCost > 0) {
      document.getElementById("my_modal_1").showModal();
      setHistory();
      
    } else {
      toast.warn("Empty cart, Please add something.", {
        position: "top-left",
      });
    }
  };
  useEffect(() => {
    const total = cart.reduce((acc, cartId) => {
      const product = products.find(
        (product) => parseInt(product.product_id) === parseInt(cartId)
      );
      return product ? acc + product.price : acc;
    }, 0);

    updateCost(total);
  }, [cart]);

  return (
    <div>
      {/* Modal */}
      
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col text-center items-center">
        <MdDoneAll className="text-green-500 text-8xl text-center "/>
        <h3 className="font-bold text-2xl">Payment Successful</h3>
        <p>Thanks for Purchasing</p>
        <p>Total : {totalCost}</p>          
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={clearCartImp} className="btn rounded-2xl px-10 bg-green-500 text-white" ><Link to={'/'}>Close</Link></button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Modal Ends */}
      <div className="container flex justify-between mx-auto py-8 items-center">
        <h1 className="flex justify-between font-bold">Cart</h1>
        <div className="flex gap-4 items-center">
          <h1 className="font-bold">Total cost: {totalCost.toFixed(2)} </h1>
          <button className="border border-customPurple px-4 py-2 text-customPurple rounded-3xl">Sort by price</button>
          <button onClick={clearCartHandle} className="bg-customPurple px-5 py-2 rounded-3xl text-white active:scale-90 active:bg-purple-300 ">Purchase</button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-6">
        {cart.map((cart) => {
          const newProduct = products.find(
            (product) => parseInt(product.product_id) === parseInt(cart)
          );

          return <Cart newProduct={newProduct}></Cart>;
        })}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Carts;
