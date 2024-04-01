import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='md:px-28 px-10 md:pt-16 pb-5 pt-10 flex items-center justify-center'>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;