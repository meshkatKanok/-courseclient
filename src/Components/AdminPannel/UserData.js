import React, { useEffect, useState } from 'react';
import Sppiner from '../Sppner/Sppiner';

const UserData = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://data-rouge.vercel.app/admission')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])
    if (!data) {
        return <Sppiner />
    }

    return (

        <div>
            {
                data ?
                    <div className="h-screen"
                        style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
                    >
                        <div className="container">
                            <div className='rounded-2xl shadow-2xl h-screen' style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                                <table className="mx-48 mt-5  w-[85%]">
                                    {/* head */}
                                    <thead className='border bg-slate-300'>
                                        <tr className='text-center'>
                                            <th className='border-r p-3'>SL</th>
                                            <th className='border-r p-3'>Full Name</th>
                                            <th className='border-r p-3'>Course Name</th>
                                            <th className='border-r p-3'>Email</th>
                                            <th className='border-r p-3'>Institute Name</th>
                                            <th className='border-r p-3'>Department Name</th>
                                            <th className='border-r p-3' >Phone</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            data?.map((admitdata, index) => <tr key={admitdata?._id} className='text-center border'>
                                                <th className='p-3 border-r'>{index + 1}</th>
                                                <td className=' p-3 border-r w-[15%]'>{admitdata?.name}</td>
                                                <td className='p-3 w-[25%] border-r' >{admitdata?.coursename}</td>
                                                <td className='p-3 w-[20%] border-r'>{admitdata?.email}</td>
                                                <td className='p-3 border-r w-[20%]'>{admitdata?.institute}</td>
                                                <td className='p-3 border-r w-[20%]'>{admitdata?.department}</td>
                                                <td className='p-3 border-r w-[20%]'>{admitdata?.phone}</td>

                                            </tr>)
                                        }


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div> : <div><span className='text-4xl flex justify-center items-center lg:mt-40'>Data Not Found</span></div>
            }







        </div>
    );
};

export default UserData;