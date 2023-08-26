import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import Sppiner from '../Sppner/Sppiner';

const Galary = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`https://data-rouge.vercel.app/photo`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])

        if (!data) {
            return <Sppiner />
        }
    return (
        <div>

            <div className="mb-20">
                <Header />
                <Navbar />
            </div>
            <h1 className='mt-5 text-black text-5xl text-center mb-5'>Photo Gallery</h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    data && data?.map(img =>

                      
                      
                            <div className="rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={img?.nedlGalary} alt="nedl Picture" />
                            
                              
                            </div>
                           
                        
                    )
                }



            </div>
            <Footer />
        </div>
    );
};

export default Galary;