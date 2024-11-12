import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-4xl'>Error 404</h1>
            <p className='text-xl'>Page Not Found</p>
            <NavLink to={"/"}>Go back to HOMEPAGE</NavLink>
        </div>
    );
};

export default ErrorPage;