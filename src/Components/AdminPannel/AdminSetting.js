import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import UpdatePro from '../Pages/Profile/UpdatePro';
import UpdateProModal from '../Pages/Profile/UpdateProModal';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Sppiner from '../Sppner/Sppiner';

const AdminSetting = () => {
    const { user } = useContext(AuthContext)
    const [id, SetpicUserID] = useState()
    const [picData, setpicData] = useState()
    const [data, setData] = useState()
   
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
        return <Sppiner></Sppiner>
    }
    if (data || picData) {
        const finduserData = data?.find(n => n?.email === user?.email)
        const picdatafind = picData?.find(p => p?.email === user?.email)
        if (finduserData === undefined) {
            return <Sppiner />
        }
        return (
            <div>
                <div className="container mx-auto my-60">
                         <div>
                        <div className="bg-white relative shadow rounded-lg  w-[30%] mx-auto">
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
                                <p className="text-center text-lg text-black  font-medium">
                                    {finduserData?.selectoption}

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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


}


export default AdminSetting;