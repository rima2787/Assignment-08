import React from 'react';

const Cart = ({ product }) => {
    const { product_id, product_title, product_image, category, price,description } = product;

    return (
        <div className='flex justify-between bg-slate-100 mt-4 p-4'>
            
                <img className='w-60 h-60' src={product_image} alt="" />
                <div className='mt-10 text-start'>
                    <h2 className='font-semibold mt-3'>{product_title}</h2>
                    <p className='mt-2'>{description}</p>
                    <p className='font-semibold mt-2'>Price: ${price}</p>
                </div>
                <button className='btn btn-error mt-12'>Delete</button>
            

        </div>
    );
};

export default Cart;