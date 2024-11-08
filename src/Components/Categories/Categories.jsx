import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted bg-slate-400">
            {
                categories.map(category => {
                    <Link key={category.category} role="tab" className="tab">
                        {category.category}
                    </Link>
                    // console.log(category.category)
                })
            }
            
            
        </div>
    );
};

export default Categories;