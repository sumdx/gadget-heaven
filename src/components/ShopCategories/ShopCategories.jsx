import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProductsContext } from '../Home/Home';
import "./ShopCategories.css"


const ShopCategories = ({handleClickCategory}) => {
    const [categoryArr, setCategory] = useState([]);

    const products = useContext(ProductsContext);



    products.map((product)=> {

        if(!categoryArr.includes(product.category)){
            const newCategory = [...categoryArr,product.category];
            setCategory(newCategory)
        }
    })
    //console.log(categoryArr)

    return (
        <div className='flex flex-col bg-white border p-4 border-gray-200 rounded-2xl text-center gap-4'>
            <Link onClick={()=>handleClickCategory(false)} className='btn rounded-full'>All Products</Link>
            {
                categoryArr.map(category => <NavLink to={"/"} onClick={()=>handleClickCategory(category)} className="btn rounded-full active:bg-customPurple">{category}</NavLink>)
            }
            
        </div>
    );
};

export default ShopCategories;