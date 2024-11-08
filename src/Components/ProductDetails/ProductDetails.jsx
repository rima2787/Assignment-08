import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToStoredCart } from '../../utility/AddCart';
import { addToStoredWishCart } from '../../utility/AddWishList';



const ProductDetails = () => {
    const { product_id } = useParams();

    const data = useLoaderData();


    const product = data.find(product => product.product_id === product_id)

    const { product_title, product_image, category, price, description, specification, availability, rating } = product;

    const handleAddCart = (id) => {

        addToStoredCart(id);

    }
    const handleWishCart = (id) => {

        addToStoredWishCart(id);

    }

    return (
        <div>
            <div className=" bg-violet-600 text-white max-w-6xl mx-auto py-20 rounded-md">
                <div className="hero ">
                    <div className="hero-content text-center">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-4xl font-bold">Product Details</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-8 mt-3 bg-slate-300 max-w-4xl p-4  mb-8 mx-auto text-center'>
                <div className='text-center] pt-5'>
                    <img src={product_image} alt="" />
                </div>
                <div className='text-start mt-3'>
                    <h2 className='font-bold text-3xl'>{product_title}</h2>
                    <p className='mt-2 font-semibold'><span className=' text-2xl'>Price:</span> ${price}</p>
                    <div className="badge badge-secondary mt-2 bg-lime-200 text-lime-700 p-4">In Stock</div>
                    <p className='mt-2 font-medium'>{description}</p>
                    <p className='mt-2'><span className='font-semibold text-xl'>Specification:</span> <br /> {specification}</p>
                    <p><span className='font-semibold text-2xl' >Ratings:</span> {rating}</p>
                    <div className='flex gap-2 mt-5'>
                        <button onClick={() => handleAddCart(product_id)} className='btn btn-success rounded-full'>Add to Cart</button> <br />
                        <button onCanPlay={() =>handleWishCart(product_id)} className='btn btn-default font-thin rounded-full'><img src="https://img.icons8.com/?size=48&id=DxIsF9smUsRE&format=png" alt="" /></button>
                        
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProductDetails;