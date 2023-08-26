import React from 'react';
import CommingSoon from '../asset/logo/Comming Soon.gif'
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import { useQuery } from '@tanstack/react-query';
import Footer from '../Pages/Footer/Footer';

const Product = () => {
    const { isLoading, error, data: product } = useQuery({
        queryKey: ['product'],
        queryFn: () =>
            fetch('https://data-rouge.vercel.app/product').then(
                (res) => res.json(),
            ),
    })
    console.log(product);

    return (
        <div>
            <Header />
            <Navbar />

            <h1 className='mt-20 text-center lg:text-5xl md:text-2xl text-lg font-semibold'>MY Product Services</h1>
            <div className='max-w-screen-xl m-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10  gap-10 mb-20'>
                {/* <img className='w-full mt-24' src={CommingSoon} alt="" /> */}
                {
                    product && product?.map((newproduct) => <div className='' key={newproduct?._id}>
                        <div className="card w-80 lg:h-[350px] bg-base-100 shadow-xl">
                            <figure><img src={newproduct?.ProductImg} alt="product Image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{newproduct?.productName}</h2>
                                <p className='text-orange-700 font-semibold'>Price : BDT {newproduct?.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-black">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div><Footer />
        </div>

    );
};

export default Product;