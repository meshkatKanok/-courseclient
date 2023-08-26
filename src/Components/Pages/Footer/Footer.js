import React from 'react';
import { FaFacebook, FaLocationArrow, FaPhone, FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../Components/asset/logo/betchLogo.png'

const Footer = () => {
    return (
        <div>
           
            <div className="relative mt-28  bg-black w-full">
                <svg
                    className="absolute top-0 w-full  h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="black"
                        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                    />
                </svg>
                <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 text-white">
                        <div className="md:max-w-md lg:col-span-2">
                            <a
                                href="/"
                                aria-label="Go home"
                                title="Company"
                                className="inline-flex items-center"
                            >
                                <img className='lg:h-[100px] lg:w-[400px] xl:h-[100px] xl:w-[400px]' src={logo} alt="nedl logo" />

                            </a>
                            <div className="mt-4 lg:max-w-sm">
                                <p className="text-sm text-deep-purple-50">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                </p>
                                <p className="mt-4 text-sm text-deep-purple-50">
                                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Category
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <Link to="/industrial">Industrial Attachment</Link>
                                    </li>
                                    <li>
                                        <Link to="/ourcourse">
                                            Our Course

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/career">Career</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Contact
                                </p>

                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <span className='transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400'>403/1,Monir Chemical Road,DUET,Gazipur City,Gazipur-1707</span>
                                    </li>
                                    <li>
                                        <span className='transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400'>01531-657931,<br /> 01778-796941</span>
                                    </li>
                                    <li>
                                        <span className='transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400'>nedl00015@gmail.com</span>
                                    </li>



                                </ul>
                            </div>
                            <div className>
                                <div>
                                    <span className="uppercase text-sm text-white  font-bold">Full Name</span>
                                    <input className="w-full bg-gray-300 text-gray-900  rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder />
                                </div>
                                <div className="mt-2">
                                    <span className="uppercase text-sm text-white font-bold">Email</span>
                                    <input className="w-full bg-gray-300 text-gray-900   rounded-lg focus:outline-none focus:shadow-outline" type="text" />
                                </div>
                                <div className="mt-2">
                                    <span className="uppercase text-sm text-white font-bold">Message</span>
                                    <textarea className="w-full h-16 bg-gray-300 text-gray-900   rounded-lg focus:outline-none focus:shadow-outline" defaultValue={""} />
                                </div>
                                <div className="mt-2">
                                    <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </div>

                            <div>

                            </div>

                        </div>

                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                        <p className="text-sm text-gray-100">
                            © Copyright 2020 Lorem Inc. All rights reserved.
                        </p>
                        <div className='flex items-center md:justify-center justify-center mt-1 sm:justify-center md:mt-2 lg:mt-0 ml-2 lg:ml-0 md:ml-0'>
                            <Link target="_blank" to="https://www.facebook.com/nedl.bd?mibextid=ZbWKwL"><FaFacebook className='mr-3 text-3xl cursor-pointer hover:text-blue-50' /></Link>
                            <Link target="_blank" to="https://twitter.com/NedlLimited?t=dcvEpk6xfKzMpayzqbUj7w&s=09"><FaTwitter className='mr-3 text-3xl cursor-pointer hover:text-blue-50' /></Link>
                            <Link target="_blank" to="https://youtube.com/@nationalengineeringdevelop4679"><FaYoutube className='mr-7 text-3xl cursor-pointer hover:text-blue-50' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;