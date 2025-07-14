import React from 'react';

const Header = ({ children }) => {
    return (
        <h1 className="flex items-center justify-center text-9xl md:text-8xl font-bold text-white bg-teal-400 text-center h-96">
            {children}
        </h1>
    );
};

export default Header;
