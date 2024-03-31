import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='md:px-28 px-10 md:pt-20 pb-5 pt-10 bg-gray-100'>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;