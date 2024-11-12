import React, { useContext } from "react";
import { CartContext } from "../Root/Root";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteFromCart, getStoredCartList, setStoredCartList } from "../../Utility/addToDb";


const WishListProduct = ({ newProduct }) => {
  const {product_id, product_image, product_title, price, description, availability } = newProduct;
  const { wishList, wishListUpdate ,cart,cartUpdate } = useContext(CartContext);

  const addToCartHandler = () =>{
    if(availability){
      toast.success("Item Added to the Cart", {
        position: "top-left",
      });
      
      setStoredCartList(product_id,"cart")
      cartUpdate(getStoredCartList("cart"));
    }else{
      toast.warning("Item is not avaialable", {
        position: "top-left",
      });
    }
    
  }

  const cartItemDlt = (product_id) => {
    toast.success("Item removed from the Cart", {
      position: "top-left",
    });

    deleteFromCart(product_id, "wishlist");
    wishListUpdate(getStoredCartList("wishlist"));
    console.log(wishList)
  };

  return (
    <div>
      <div className="flex gap-6 items-center">
        <div>
          <img className="h-32 w-60 object-cover" src={product_image} alt="" />
        </div>
        <div className="flex justify-between flex-col">
          <h1 className="text-xl font-bold">{product_title}</h1>
          <h2>Description : {description}</h2>
          <h3>Price : ${price}</h3>
          <button onClick={()=> addToCartHandler()} className="bg-customPurple text-white px-4 py-2 rounded-lg self-start">
            Add to Cart
          </button>
        </div>
        <div className="ml-10">
          <MdDeleteForever
            onClick={() => cartItemDlt(product_id)}
            className="active:text-red-200 text-4xl text-red-500 active:scale-125 active:rotate-45 "
          />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default WishListProduct;
