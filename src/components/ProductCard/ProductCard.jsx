import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {


    const {product_image,product_title, price,product_id}=product
    return (
        <div className='bg-white border border-gray-200 rounded-2xl shadow-md'>
            <div className='rounded-2xl h-60  overflow-hidden'>
                <img className='rounded-2xl h-60 w-full object-cover mx-auto' src={product_image} alt="" />
            </div>
            <div className='ml-4 justify-between'>
                <h1 className='font-bold text-xl mt-4'>{product_title}</h1>
                <h3 className='mt-4 mb-4 text-gray-500'>Price: $ {price}</h3>
                <Link to={`/products/${product_id}`}><button className='mb-4 text-customPurple border-2 px-4 py-2 rounded-full border-customPurple'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;