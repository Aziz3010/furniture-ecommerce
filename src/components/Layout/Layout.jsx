import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Views from '../../routers/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <>
            <ToastContainer position="top-center" autoClose={3000} closeOnClick pauseOnHover theme="light" />
            <Header />
            <main>
                <Views />
            </main>
            <Footer />
        </>
    )
}

export default Layout;