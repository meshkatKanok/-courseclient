import React from 'react';
import Courseitem from '../Pages/Courses/Courseitem';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';

const OurCourse = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Courseitem/>
            <Footer/>
            
        </div>
    );
};

export default OurCourse;