import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaFacebook, FaLock, FaRegEnvelope, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

const Header = () => {
    const { logout, user } = useContext(AuthContext)
    const [search, setSearch] = useState()
    const LogOutCLick = () => {
        logout()
    }
    const [picData, setpicData] = useState()
    useEffect(() => {
        fetch('https://data-rouge.vercel.app/UserPicture')
            .then(res => res.json())
            .then(data => setpicData(data))
    }, [picData])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setSearch(data.search);
    };
    const { data, isLoading } = useQuery({
        queryKey: ['search'],
        queryFn: () =>
            fetch(`https://data-rouge.vercel.app/course?search=${search}`).then(
                (res) => res.json(),
            ),
    })



    const picdatafind = picData?.find(p => p?.email === user?.email)
    return (
        <div>
            <div className='bg-[#44977B] w-full md:w-full lg:h-12 md:h-16 h-20 shadow-lg'>
                <div className='lg:flex items-center lg:justify-between w-[85%] h-10 m-auto'>
                    <div>
                        <span className='flex items-center md:justify-center justify-center lg:justify-start'>
                            <FaRegEnvelope className='mr-3 text-[20px]' />
                            <span className='text-white text-base md:mt-1 lg:mt-0'>
                                nedl00015@gmail.com
                            </span>
                        </span>

                    </div>
                    <div className='lg:flex items-center md:flex justify-center'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center'>
                            <div className="form-control hidden lg:block">
                                <input type="text" {...register("search")} placeholder="Search" className="input input-bordered input-sm w-full  " />

                            </div>
                            {/* <input  className='btn btn-ghost btn-circle hidden lg:block' type="submit" value="Searching"/> */}


                        </form>
                        <div className='flex items-center md:justify-center justify-center mt-1 sm:justify-center md:mt-2 lg:mt-0 ml-2 lg:ml-0 md:ml-0'>
                            <Link target="_blank" to="https://www.facebook.com/nedl.bd?mibextid=ZbWKwL"><FaFacebook className='mr-3 text-[20px] cursor-pointer hover:text-blue-50' /></Link>
                            <Link target="_blank" to="https://twitter.com/NedlLimited?t=dcvEpk6xfKzMpayzqbUj7w&s=09"><FaTwitter className='mr-3 text-[20px] cursor-pointer hover:text-blue-50' /></Link>
                            <Link target="_blank" to="https://youtube.com/@nationalengineeringdevelop4679"><FaYoutube className='mr-7 text-[20px] cursor-pointer hover:text-blue-50' /></Link>
                        </div>
                        {
                            user ?
                                <div>
                                    <div className="dropdown hidden lg:block dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            {
                                                <div className="w-9  rounded-full">
                                                    {
                                                        picdatafind?.url ? <img src={picdatafind?.url} /> : <FaUser className='w-7 h-7' />
                                                    }
                                                </div>
                                            }

                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#44977B] text-white rounded-box w-52">
                                            <li>
                                                {
                                                    user?.email === "atikcse12@gmail.com" ? <Link to="/admin" className="font-bold">Admin pannel</Link> :
                                                        <Link to="/profile" className="font-bold">
                                                            Profile
                                                        </Link>
                                                }
                                            </li>
                                            <li>
                                                <Link to="/" className="font-bold">
                                                    Home
                                                </Link>
                                            </li>
                                            <li onClick={LogOutCLick}><Link className="font-bold">Logout</Link></li>
                                        </ul>
                                    </div>
                                    <span className='flex items-center lg:hidden  block text-white justify-center mr-2 lg:mr-0 md:mr-0 cursor-pointer'>
                                        {
                                            user?.email === "atikcse12@gmail.com" ? <div><Link to="/admin" className="font-bold">Admin pannel</Link> <Link onClick={LogOutCLick} className="font-bold ml-3">Logout</Link></div> : <div>
                                                <Link to="/profile" className="font-bold mx-3">
                                                    Profile
                                                </Link> |
                                                <Link onClick={LogOutCLick} className="font-bold ml-3">Logout</Link>
                                            </div>
                                        }

                                    </span>

                                </div>


                                : <span className='flex items-center text-white justify-center mr-2 lg:mr-0 md:mr-0 cursor-pointer'>
                                    <FaLock className=' text-[15px] cursor-pointer mr-2' />
                                    <Link to="/Signin">Sign In |</Link>
                                    <Link to="/Signup">Sign Up |</Link>
                                    <Link to="/">Home</Link>

                                </span>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;

