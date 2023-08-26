import React, { useEffect, useState } from 'react';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';
import Sppiner from '../Sppner/Sppiner';


const Blog = () => {
    const [data, setdata] = useState()
    useEffect(() => {
        fetch("https://data-rouge.vercel.app/blogData")
            .then(res => res.json())
            .then(data => setdata(data))
    }, [data])
    if (!data) {
        return <Sppiner />
    }

    return (
        <div>
            <Header />
            <Navbar />
            <div className="h-screen"
                style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
            >
                <div>
                    <h1 className='mt-5 text-center lg:text-5xl md:text-2xl text-lg font-semibold'>Blog</h1>
                </div>

                <div className="card w-full mt-5  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                    {
                        data?.map(blog => <div key={blog?._id} className="card-body mt-5">
                            <h2 className="card-title lg:text-3xl ">{blog?.title}</h2>
                            <p className='text-black lg:text-xl font-bold'>
                                {blog?.Details}

                            </p>

                        </div>)
                    }

                </div>

            </div>

            <Footer />

        </div>

    );
};

export default Blog;