import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Spiner from '../../Sppner/Sppiner';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import UpdateProModal from './UpdateProModal';
import UpdatePro from './UpdatePro';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [id, SetpicUserID] = useState()
    const [picData, setpicData] = useState()
    const [data, setData] = useState()
    const [admissiondata, setAdmissiondata] = useState()
    useEffect(() => {
        fetch('https://data-rouge.vercel.app/admission')
            .then(res => res.json())
            .then(data => setAdmissiondata(data))
    }, [admissiondata])
    useEffect(() => {
        fetch('https://data-rouge.vercel.app/UserPicture')
            .then(res => res.json())
            .then(data => setpicData(data))
    }, [picData])

    useEffect(() => {
        let isCancelled = false
        fetch('https://data-rouge.vercel.app/Userdata')
            .then(res => res.json())
            .then(data => {
                if (!isCancelled) {
                    setData(data)
                }

            })
        return () => {
            isCancelled = true
        }
    }, [user?.email])
    if (!data) {
        return <Spiner></Spiner>
    }
    if (data || picData || admissiondata) {
        const finduserData = data?.find(n => n?.email === user?.email)
        const picdatafind = picData?.find(p => p?.email === user?.email)
        const admituserdata = admissiondata?.filter(a => a?.email === user?.email)
        console.log(admituserdata);
        if (finduserData === undefined) {
            return <Spiner />
        }
        return (
            <div>
                <Header />
                <Navbar />
                <div className="container mx-auto my-60">
                    {admissiondata.length}
                    <div>
                        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-[87%] xl:w-[87%] mx-auto">
                            <div className="flex justify-center ">
                                {
                                    picdatafind?.url ? <img
                                        src={picdatafind?.url}
                                        alt=""
                                        className="rounded-full  mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                                    /> : <FaUser className='w-7 h-7' />
                                }
                            </div>
                            <div className="mt-16">
                                <h1 className="font-bold text-center text-3xl text-gray-900">
                                    {finduserData?.username}
                                </h1>
                                <p className="text-center text-sm text-gray-400 font-medium">
                                    {finduserData?.email}

                                </p>
                                <p>
                                    <span></span>
                                </p>
                                <div className="my-5 px-6">

                                    {
                                        picdatafind ? <label onClick={() => SetpicUserID(picdatafind?._id)} htmlFor="my-modal" className="text-gray-200 cursor-pointer block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Update Picture</label> : <label htmlFor="my-modal" className="text-gray-200 cursor-pointer block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Add Profile Picture</label>
                                    }
                                    {
                                        picdatafind ? <UpdatePro id={id} user={user} /> : <UpdateProModal user={user} />
                                    }
                                </div>
                                <div className="lg:flex md:flex lg:justify-between md:justify-between  lg:items-center my-5 px-6">
                                    <Link
                                        href=""
                                        className="text-black hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                                    >
                                        ID <br /> <span className='text-blue-400'>{finduserData?._id}</span> <br />
                                    </Link>
                                    <Link
                                        href=""
                                        className="text-black hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                                    >
                                        Address <br /> <span className='text-blue-400'>{finduserData?.address}</span> <br />
                                    </Link>
                                    <Link
                                        href=""
                                        className="text-black hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                                    >
                                        Phone <br /> <span className='text-blue-400'>{finduserData?.phone}</span> <br />
                                    </Link>
                                    <Link
                                        href=""
                                        className="text-black hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                                    >
                                        Gender <br /> <span className='text-blue-400'>{finduserData?.selectdata}</span> <br />
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <h3 className="font-medium text-gray-900 text-left px-6">
                                        Course status
                                    </h3>
                                    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                        {
                                            admituserdata?.map(admitUser => <Link key={admitUser._id}
                                                href="#"
                                                className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                                            >
                                                <img
                                                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                                    alt=""
                                                    className="rounded-full h-6 shadow-md inline-block mr-2"
                                                />
                                                {admitUser?.coursename}

                                            </Link>)
                                        }

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


}


export default Profile;