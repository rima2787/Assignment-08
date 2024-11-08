import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCart } from '../../utility/AddCart';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';


const Dashboard = () => {

    const allCart = useLoaderData();

    const [readCart, setReadCart] = useState([]);
    const [sort, setSort] = useState('');
    const [purchase, setPurchase] = useState('');

    const handlePurchase = purchase =>{
        // const purchase = true;
        setPurchase(purchase);

        if(purchase === 'true'){

        }

    }

    useEffect(() => {
        const storedCart = getStoredCart();
        console.log(allCart);

        const readCart = allCart.filter(product => storedCart.includes(product.product_id));
        setReadCart(readCart);

    }, [])

    const handleSort = sortType =>{
        setSort(sortType);

        if(sortType === 'Price'){
            const sortedReadCart = [...readCart].sort((a, b) => b.price - a.price);
            setReadCart(sortedReadCart);

        }

    }

    return (
        <div>
            <div className=" bg-violet-600 text-white max-w-6xl mx-auto pb-20 pt-8 rounded-md">
                <div className="hero ">
                    <div className="hero-content text-center">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-4xl font-bold">Dashboard</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center max-w-4xl mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>WishList</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='flex justify-between'>
                            <h2 className='font-bold text-4xl'>Cart</h2>
                            <div>
                                <button className='btn btn-default mr-4 font-bold'>Total Cost: {0.00}</button>
                                <button onClick={() => handleSort('Price')} className='btn btn-default bg-violet-500 font-semibold rounded-full text-white mr-5'>Short By Price</button>
                                <button onClick={()=> handlePurchase('true')} className='btn btn-default  bg-violet-500 font-semibold rounded-full text-white'>Purchase</button>
                            </div>

                        </div>
                        <h2 className='mt-7'>
                            {
                                readCart.map(product => <Cart key={product.product_id} product={product} ></Cart>)
                            }
                        </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='font-bold text-4xl text-start'>WishList</h2>
                        <h2 className='mt-7'>
                            {
                                readCart.map(product => <WishList key={product.product_id} product={product} ></WishList>)
                            }
                        </h2>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default Dashboard;