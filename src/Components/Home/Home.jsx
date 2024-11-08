import React from 'react';
import banner from '../../assets/banner.jpg'
import './Home.css'
import Products from '../Products/Products';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
const Home = () => {

    const categories = useLoaderData();
    console.log(categories);

    return (
        <div className='mb-10'>

            <div className="banner-top bg-violet-600 text-white max-w-6xl mx-auto pb-40">
                <div className="hero ">
                    <div className="hero-content text-center">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <button className="btn btn-primary rounded-full px-5">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-bottom max-w-3xl mb-8 mx-auto text-center'>
                <img src={banner} alt="" />
            </div>
            <div className='flex flex-col bg-slate-400'>
                <Categories categories={categories}></Categories>
            </div>


            <Products></Products>
        </div>
    );
};

export default Home;