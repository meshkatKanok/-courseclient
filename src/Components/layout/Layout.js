import React from 'react';
import { Outlet } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;