import React, { useContext } from "react";
import { ProductsContext } from "../Home/Home";
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { getStoredCartList, setStoredCartList } from "../../Utility/addToDb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Root/Root";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams();
  const {cart, cartUpdate, wishList,wishListUpdate} = useContext(CartContext);
  const products = useLoaderData();
  const product = products.find(
    (product) => parseInt(product.product_id) === parseInt(id)
  );
  const {
    product_id,
    product_title,
    product_image,
    price,
    availability,
    description,
    Specification,
    rating,
  } = product;

  let ratingDiv = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(rating)) {
      ratingDiv.push(<FaStar className="text-yellow-400 font-bold" />);
    } else {
      ratingDiv.push(<FaRegStar />);
    }
  }

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
  const addToWishListHandler = () =>{
    if(wishList.includes(product_id)){
      toast.warn("Item already on the Wishlist", {
        position: "top-left",
      });
    }else{
      setStoredCartList(product_id,"wishlist")
    wishListUpdate(getStoredCartList("wishlist"))
    toast.success("Item added to Wishlist", {
      position: "top-left",
    });
    }
    

  }

  return (
    <div>
      <Helmet>
        <title>Product|Gadget Heaven</title>
      </Helmet>
      <div className="bg-customPurple text-center pb-60">
        <h1 className="text-4xl font-bold pt-10 text-white">Product Details</h1>
        <p className="w-1/2 mx-auto text-gray-200 mt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="mt-7 container rounded-xl mx-auto flex bg-white p-10 border border-customPurple border-dashed -mt-48 mb-20">
        <div className="w-1/3 mr-7">
          <img src={product_image} alt="" />
        </div>
        <div className="w-2/3">
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <h3 className="text-xl font-medium">Price : {price}</h3>
          <h3 className="my-4">
            {availability ? (
              <span className="px-4 py-2 border inline-block rounded-full text-green-600 border-green-600 bg-green-600 bg-opacity-10">
                In Stock
              </span>
            ) : (
              <span className="px-4 py-2 border inline-block rounded-full text-red-600 border-red-600 bg-red-600 bg-opacity-10">
                Out of Stock
              </span>
            )}
          </h3>
          <p className="text-gray-500 text-sm">{description}</p>
          <h3 className="font-bold mt-4">Specification :</h3>
          <ol className="list-decimal ml-5 mt-3" type="1">
            {Specification.map((item) => (
              <li className="text-gray-500 font-light">{item}</li>
            ))}
          </ol>
          <h3 className="font-bold mt-4">Rating :</h3>
          <div className="flex gap-1 mt-4 items-center">
            {ratingDiv} 
            <p className="bg-gray-200 text-sm ml-3 rounded-full px-2 py-1 ">{rating}</p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button onClick={()=> addToCartHandler()} className="bg-customPurple flex text-white items-center px-4 py-2 rounded-xl active:bg-purple-400">
                <p className="font-bold text-lg text-white">Add To Cart</p>
                <HiOutlineShoppingCart className="ml-2 text-xl" />
            </button>
            <button onClick={()=> addToWishListHandler()} className="hover:text-red-600 hover:bg-red-200 active:scale-75 active:bg-red-300 bg-gray-200 p-2 rounded-full">
                <MdFavoriteBorder className="text-xl"/>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetails;
