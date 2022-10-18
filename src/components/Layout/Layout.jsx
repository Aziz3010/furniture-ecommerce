import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Views from '../../routers/Router';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Views />
            </main>
            <Footer />
        </>
    )
}

export default Layout;