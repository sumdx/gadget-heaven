import React, { createContext, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Shop from "../Shop/Shop";
import { Route, useLoaderData } from "react-router-dom";
import ShopCategories from "../ShopCategories/ShopCategories";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Helmet } from "react-helmet-async";

export const ProductsContext = createContext(1);

const Home = () => {
  const [dataShow, updateDataShow] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    updateDataShow(products);
  }, []);

  const handleClickCategory = (id) => {
    if (id) {
      const newProduct = products.filter((product) => product.category === id);
      updateDataShow(newProduct);
    } else {
      updateDataShow(products);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Home|Gadget Heaven</title>
      </Helmet>
      <Banner></Banner>
      <ProductsContext.Provider value={dataShow}>
        <div id="shop" className="-mt-32 mb-10">
          <h1 className="mx-auto text-center font-bold text-4xl mb-8">
            Explore Cutting-Edge Gadgets
          </h1>
          <div className="flex container mt-10 mx-auto gap-10 items-start">
            <ShopCategories 
              handleClickCategory={handleClickCategory}
              className="w-full"
            ></ShopCategories>
            <Shop className=""></Shop>
          </div>
        </div>
      </ProductsContext.Provider>
    </div>
  );
};

export default Home;
