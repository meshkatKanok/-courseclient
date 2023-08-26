import React, { useEffect } from 'react';
import Header from '../Header/Header';
import ourtemvideo from '../../../Components/asset/video/ourTeam.gif'
import Aos from 'aos';
import "aos/dist/aos.css"
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'

const OurTeam = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <Header />
            <Navbar/>
            <img className='h-[300px] w-full mt-12' src={ourtemvideo} alt="" />


            <div>
                <div>

                    <div className='lg:w-[80%] lg:m-auto md:w-[80%] md:m-auto  w-full'>
                        <div class='max-w-screen-xl m-auto grid md:grid-cols-2 lg:grid-cols-3  gap-10 mb-20 mt-11'>
                            {/* 1st team member------------- */}

                            <div data-aos="fade-up" className="lg:w-[250px] md:w-[250px] w-full  hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">

                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/ct6XGT8/porag-sir.jpgg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight  mt-3">Engr. Emrul Kayes Porag</h5>
                                    <span className='text-center text-sm font-bold'>Chief Advisor</span>  <br />
                                    <span className='text-center text-[13px]'>B.Sc in CSE (DUET) <br /> MBA (SCM),Life Member of IEB

                                    </span>



                                </div>
                            </div>
                            {/* 1st Team Member End---------------- */}
                            {/* 2nd-------------------- */}
                            <div data-aos="fade-down" className="lg:w-[250px] md:w-[250px] w-full   hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">

                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/BGk7950/vecteezy-business-man-icon.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Engr. Md. Zaid Hossain</h5>
                                    <span className='text-center text-sm font-bold'>Advisors</span> <br />
                                    <span className='text-center text-[13px]'>Executive Director <br /> Global Experts Technology Limited</span>



                                </div>
                            </div>
                            {/* 2nd end-------------- */}
                            {/* 3rd-------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full   hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/BGk7950/vecteezy-business-man-icon.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Engr. Md. Golam Nazib</h5>
                                    <span className='text-center text-sm font-bold'>Advisors</span> <br />
                                    <span className='text-center text-[13px]'>MBA,BSc (ME),DME <br />Export of FFS,Former HSE Manager</span>



                                </div>
                            </div>

                            {/* 4th--------------------------- */}
                            <div data-aos="fade-left" className="lg:w-[250px] md:w-[250px] w-full   hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">

                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/BGk7950/vecteezy-business-man-icon.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Engr. Hazrat Ali</h5>
                                    <span className='text-center text-sm font-bold'>Advisors</span> <br />
                                    <span className='text-center text-[13px]'>B.Sc Engr. CE(RUET)<br />Germany Sensior Specilalist</span>



                                </div>
                            </div>
                            {/* 5th--------------------- */}
                            <div data-aos="fill-right" className="lg:w-[250px] md:w-[250px] w-full   hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">

                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/BGk7950/vecteezy-business-man-icon.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer ">

                                    <h5 className="text-xl font-semibold tracking-tight mt-3">Most Jannatul Ferdaush</h5>
                                    <span className='text-center text-sm font-bold'>Chairman</span> <br />
                                    <span className='text-center text-[13px]'>Master of Science</span>



                                </div>
                            </div>
                            {/* 6th------------------- */}
                            <div data-aos="zoom-in" className="lg:w-[250px] md:w-[250px] w-full   hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">

                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/37t3SXD/shohel.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight mt-3">Engr. Sohel Rana</h5>
                                    <span className='text-sm font-bold'>Managing Director</span> <br />
                                    <span className='text-center text-[13px]'>B.Sc Engr. EEE</span>



                                </div>
                            </div>
                            {/* 7th-------------------------- */}
                            <div data-aos="zoom-in" className="lg:w-[250px] md:w-[250px] w-full   hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">

                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/sjhtRR6/atik-removebg-preview-1.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight mt-3">Atikur Rhaman</h5>
                                    <span className='text-sm font-bold'>Finance Director</span> <br />
                                    <span className='text-center text-[13px]'>B.Sc Engr. CSE</span>



                                </div>
                            </div>
                            {/* 8th----------------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full   hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/2FVz9XB/IMG-20230517-WA0000.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Mizanur Rahman</h5>
                                    <span className='text-center text-sm font-bold'>Automation Engineer</span> <br />




                                </div>
                            </div>
                            {/* 9th------------------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full  hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/kDgBq8b/1683617167727.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Md parves</h5>
                                    <span className='text-center text-sm font-bold'>Automation Engineer</span> <br />




                                </div>
                            </div>
                            {/* 9th------------------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full  hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/3h6Wcq7/shilon.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Engr. Md. Shilon Ali</h5>
                                    <span className='text-center text-sm font-bold'>Assistant Engineer</span> <br />
                                    <span className='text-center text-[13px]'>B.Sc in CE  (DUET)</span>




                                </div>
                            </div>
                            {/* 10th-------------------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full  hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/89Kcq9c/faez.png" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Engr. Faiz Ahmed</h5>
                                    <span className='text-center text-sm font-bold'>Senior Automation Engineer</span> <br />
                                    <span className='text-center text-[13px]'>B.Sc in EEE  (DUET)</span>
                                </div>
                            </div>
                            {/* 11th-------------------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full  hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/wNtz0rv/asif.png" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Asif Akash</h5>
                                    <span className='text-center text-sm font-bold'>Subassistant Engineer</span> <br />
                                    <span className='text-center text-[13px]'>B.Sc in CE  (DUET)</span>
                                </div>
                            </div>
                            {/* 12th-------------------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full  hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/WFm1Gbf/my-passport-photo-1.jpg" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Engr. Md. Foysal Rabbi</h5>
                                    <span className='text-center text-sm font-bold'>B.Sc in CSE (DUET)</span> <br />

                                </div>
                            </div>
                            {/* 13th-------------------------- */}
                            <div data-aos="fade-right" className="lg:w-[250px] md:w-[250px] w-full  hover:bg-blue-950 hover:text-white border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[380px] md:h-[400px] shadow-lg ">
                                <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src="https://i.ibb.co/XVVw3Nb/1686465506311.jpg F" alt="product image" />

                                <div data-aos="fill-right" className="px-5 pb-5 hover:text-white cursor-pointer">

                                    <h5 className="text-xl font-semibold tracking-tight   mt-3">Md. Abdul Bari</h5>
                                    <span className='text-center text-sm font-bold'>Office Excutive</span> <br />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurTeam;