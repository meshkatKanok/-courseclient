import React from 'react';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import CommingSoon from '../asset/logo/Comming Soon.gif'

const Career = () => {
    return (
        <div>
            <div>
            <Header/>
            <Navbar/>
            <div>
            <img className='w-full mt-24' src={CommingSoon} alt="" />
        </div>
        </div>
        </div>
    );
};

export default Career;