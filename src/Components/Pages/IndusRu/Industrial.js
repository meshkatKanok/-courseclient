import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Sppiner from '../../Sppner/Sppiner';
import { Link } from 'react-router-dom';

const Industrial = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('h https://data-rouge.vercel.app/course').then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Sppiner />
    }
    return (
        <div>
            <Header />
            <Navbar />
            <div>
                <div className='w-full h-[100px] mt-20' style={{ background: "radial-gradient(circle, rgba(68,151,123,1) 0%, rgba(86,235,241,1) 100%)" }}>
                    <h1 className='lg:text-4xl text-2xl pt-5 font-bold text-center text-white'>Our Industrial Services</h1>
                </div>
                <div className='max-w-screen-xl servicesbody m-auto grid lg:grid-cols-3 h-auto md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                    {
                        data?.slice(0, 5)?.map(indusrial =>
                            <div className=''>
                                <div className="card w-full bg-base-100 shadow-lg  hover:shadow-2xl border border-gray-400">
                                    <figure><img className='w-full servicesImg h-[250px] bg-[#1D2939]' src={indusrial?.icone} alt="image" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title lg:text-xl md:text-lg  font-bold">{indusrial?.depname}</h2>
                                        <p className='text-[10px]'>Industrial Attachment Training is the Hands on Industry Based Training where a student get training and takes preparation for his or her upcoming career and jobs. After successful training with excillent skills from the institute a student can explore himself in the job market. </p>
                                        <div className="card-actions justify-end">
                                            <div>
                                                <Link to={`/industrialitem/${indusrial?._id}`} className="inline-flex items-center px-3 py-2 w-[156px] h-[40px] text-sm font-medium text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] mt-4 ">
                                                    See Details
                                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Industrial;