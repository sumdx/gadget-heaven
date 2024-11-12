import React, { useContext } from "react";
import WishListProduct from "../WishListProduct/WishListProduct";
import { getStoredCartList } from "../../Utility/addToDb";
import { ProductsContext } from "../Dashboard/Dashboard";

const WishList = () => {
  const wishlists = getStoredCartList("wishlist");
  const products = useContext(ProductsContext);
  return (

    <div>
    <div className="container mx-auto flex flex-col gap-6 py-8">
        <h1 className="font-bold">Wishlist</h1>
       {wishlists.map((wishlist) => {
         const newProduct = products.find(
           (product) => parseInt(product.product_id) === parseInt(wishlist)
         );
         return <WishListProduct newProduct={newProduct}></WishListProduct>;
       })}
     </div>

 </div>
  )
 
};

export default WishList;
