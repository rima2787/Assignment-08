import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Categories from '../Categories/Categories';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    

    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>

            <div className='flex justify-between gap-4 max-w-6xl mx-auto mt-7'>
                <div className='bg-gray-300  rounded-md flex flex-col h-[480px]'>
                    <button className='btn btn-default font-bold p-4 rounded-full m-4'>All Product</button>
                    <button className='btn btn-default font-bold p-4 rounded-full m-4'>Laptops</button>
                    <button className='btn btn-default font-bold p-4 rounded-full m-4'>MacBooks</button>
                    <button className='btn btn-default font-bold p-4 rounded-full m-4'>Tablets</button>
                    <button className='btn btn-default font-bold p-4 rounded-full m-4'>Headphones</button>
                    <button className='btn btn-default font-bold p-4 rounded-full m-4'>Smartphones</button>
                </div>
                
                


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    {
                        products.map(product => <Product product={product} key={product.product_id}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;