import React from 'react';

const WishListProduct = ({newProduct}) => {
    const {product_image,product_title,price,description} =newProduct;
    return (
        <div className='flex'>
            <div>
                <img className='h-32 w-60 object-cover' src={product_image} alt="" />
            </div>
            <div>
                <h1 className='text-xl font-bold'>{product_title}</h1>
                <h2>Description : {description}</h2>

            </div>
        </div>
    );
};

export default WishListProduct;