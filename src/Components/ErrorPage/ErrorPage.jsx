import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-32'>
            <h2 className='text-5xl text-red-400'>Page Not Found</h2>
            <p className='text-3xl'> Status:404</p>
        </div>
    );
};

export default ErrorPage;