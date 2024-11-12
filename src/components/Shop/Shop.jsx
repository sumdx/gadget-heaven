import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ProductsContext } from '../Home/Home';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    
    const products =useContext(ProductsContext);
    
    return (
        <div className='grid grid-cols-3 gap-5 '>
            {
                products.map((product,idx) => <ProductCard key={idx} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Shop;