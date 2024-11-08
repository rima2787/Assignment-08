import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_id, product_title, product_image, category, price } = product;
    return (

        <div className="card bg-base-100 w-70 shadow-xl">
            <figure className="py-4 bg-gray-300">
                <img

                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl h-[170px] w-3/4" />
            </figure>
            <div className="card-body text-start">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}K</p>
                <Link to={`/products/${product_id}`}>
                    <div className="card-actions">
                        <button className="btn btn-default border-violet-400 text-violet-600 rounded-full">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Product;