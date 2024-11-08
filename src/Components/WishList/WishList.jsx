import React from 'react';

const WishList = ({ product }) => {
    const { product_id, product_title, product_image, category, price, description } = product;
    return (
        <div className='flex justify-between bg-slate-100 mt-4 p-4'>

            <img className='w-60 h-60' src={product_image} alt="" />
            <div className='mt-10 text-start'>
                <h2 className='font-semibold mt-3'>{product_title}</h2>
                <p className='mt-2'>{description}</p>
                <p className='font-semibold mt-2'>Price: ${price}</p>
                <button className='btn btn-accent rounded-full mt-4'>Add To Card</button>
            </div>
            <button className='btn btn-error text-white mt-12'>Delete</button>


        </div>
    );
};

export default WishList;