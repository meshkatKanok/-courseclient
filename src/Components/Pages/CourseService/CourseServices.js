import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Sppiner from '../../Sppner/Sppiner';
const CourseServices = () => {
    const { depname } = useLoaderData()
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(' https://data-rouge.vercel.app/course').then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Sppiner />
    }
    return (
        <div>
            <div>
                <Header />
                <Navbar />

                <div className='grid grid-cols-1'>

                    {
                        data?.map(attdata => <div>
                            




                            <div>
                                {
                                    attdata.depname === "Electrical" &&
                                    <div className={`bg-[#44977B] mt-16 w-full lg:w-[90%] mx-auto rounded-lg lg:p-24  ${depname === "Electronics" || depname === "Mechanical Technology" || depname === "Computer Science & Technology" || depname === "Civil Technology"  ? "hidden":"block"}`}>
                                        {
                                attdata?.depname === "Electrical" &&
                                <div>
                                    {
                                        depname === "Electrical" && <Link className="justify-between">
                                            <h1 className='text-center text-4xl  font-bold text-white'> {attdata?.depname}</h1>
                                        </Link>
                                    }
                                </div>
                            }
                                        {depname === "Electrical" &&
                                            <div className="card lg:mt-4 w-full lg:h-[500px] lg:w-[60%] bg-[#1c6d52] p-3 rounded-lg mx-auto shadow-xl ">
                                                <div className="card-body">
                                                    <h1 className='text-3xl text-center font-bold text-white mb-10'>Course Name</h1>
                                                    {
                                                        data.slice(0, 7)?.map((course,index) => <div key={course?._id} className='text-white  w-full '>
                                                            <Link to={`/course/${course?._id}`} className='text-[7px] md:text-base  '>{index+1}.{course?.coursename}</Link>
                                                        </div>)
                                                    }
                                                </div>
                                            </div>

                                        }

                                    </div>
                                }

                                {/* 2------------------------------ */}
                                {
                                    attdata.depname === "Electronics" &&
                                    <div className={`bg-[#44977B] mt-16 w-full lg:w-[90%] mx-auto rounded-lg lg:p-24 ${depname === "Electrical" || depname ==="Mechanical Technology" || depname === "Computer Science & Technology" || depname === "Civil Technology"  ? "hidden":"block"} `}>
                                        {
                                attdata?.depname === "Electronics" &&
                                <div>
                                    {
                                        depname === "Electronics" && <Link className="justify-between">
                                            <h1 className='text-center text-4xl  font-bold text-white'> {attdata?.depname}</h1>
                                        </Link>
                                    }
                                </div>
                            }
                                        {depname === "Electronics" &&
                                            <div className="card lg:mt-4 w-full lg:h-[500px] lg:w-[60%] bg-[#1c6d52] p-3 rounded-lg mx-auto shadow-xl ">
                                                <div className="card-body">
                                                    <h1 className='text-3xl text-center font-bold text-white mb-10'>Course Name</h1>
                                                    {
                                                        data.slice(0, 7)?.map((course,index) => <div key={course?._id} className='text-white  w-full '>
                                                            <Link to={`/course/${course?._id}`} className='text-[7px] md:text-base  '>{index+1}.{course?.coursename}</Link>
                                                        </div>)
                                                    }
                                                </div>
                                            </div>

                                        }

                                    </div>
                                }

 
                                {/* --------------------3-------------- */}


                                {
                                    attdata.depname === "Mechanical Technology" &&
                                    <div className={`bg-[#44977B] mt-16 w-full lg:w-[90%] mx-auto rounded-lg lg:p-24 ${ depname ==="Electronics" || depname === "Electrical" || depname === "Computer Science & Technology" ||depname === "Civil Technology"?"hidden":"block"}`}>
                                        {
                                attdata?.depname === "Mechanical Technology" &&
                                <div>
                                    {
                                        depname === "Mechanical Technology" && <Link className="justify-between">
                                            <h1 className='text-center text-4xl  font-bold text-white'> {attdata?.depname}</h1>
                                        </Link>
                                    }
                                </div>
                            }
                                        {depname === "Mechanical Technology" &&
                                            <div className="card lg:mt-4 w-full lg:h-[500px] lg:w-[60%] bg-[#1c6d52] p-3 rounded-lg mx-auto shadow-xl ">
                                                <div className="card-body">
                                                    <h1 className='text-3xl text-center font-bold text-white mb-10'>Course Name</h1>
                                                    {
                                                        data.slice(0, 7)?.map((course,index) => <div key={course?._id} className='text-white  w-full '>
                                                            <Link to={`/course/${course?._id}`} className='text-[7px] md:text-base  '>{index+1}.{course?.coursename}</Link>
                                                        </div>)
                                                    }
                                                </div>
                                            </div>

                                        }

                                    </div>
                                }
                                {/* 4 ---------------------------------------------- */}


                                

                                {
                                    attdata.depname === "Computer Science & Technology" &&
                                    <div className={`bg-[#44977B] mt-16 w-full lg:w-[90%] mx-auto rounded-lg lg:p-24 ${ depname ==="Electronics" || depname === "Electrical" || depname === "Mechanical Technology" || depname === "Civil Technology" ?"hidden":"block"}`}>
                                        {
                                attdata?.depname === "Computer Science & Technology" &&
                                <div>
                                    {
                                        depname === "Computer Science & Technology" && <Link className="justify-between">
                                            <h1 className='text-center text-4xl  font-bold text-white'> {attdata?.depname}</h1>
                                        </Link>
                                    }
                                </div>
                            }
                                        {depname === "Computer Science & Technology" &&
                                            <div className="card lg:mt-4 w-full lg:h-[500px] lg:w-[60%] bg-[#1c6d52] p-3 rounded-lg mx-auto shadow-xl ">
                                                <div className="card-body">
                                                    <h1 className='text-3xl text-center font-bold text-white mb-10'>Course Name</h1>
                                                    {
                                                        data.slice(7,12)?.map((course,index) => <div key={course?._id} className='text-white  w-full '>
                                                            <Link to={`/course/${course?._id}`} className='text-[7px] md:text-base  '>{index+1}.{course?.coursename}</Link>
                                                        </div>)
                                                    }
                                                </div>
                                            </div>

                                        }

                                    </div>
                                }
 
                                {/* 5---------------- */}



                                {
                                    attdata.depname === "Civil Technology" &&
                                    <div className={`bg-[#44977B] mt-16 w-full lg:w-[90%] mx-auto rounded-lg lg:p-24 ${ depname ==="Electronics" || depname === "Electrical" || depname === "Mechanical Technology" ||  depname === "Computer Science & Technology" ?"hidden":"block"}`}>
                                        {
                                attdata?.depname === "Civil Technology" &&
                                <div>
                                    {
                                        depname === "Civil Technology" && <Link className="justify-between">
                                            <h1 className='text-center text-4xl  font-bold text-white'> {attdata?.depname}</h1>
                                        </Link>
                                    }
                                </div>
                            }
                                        {depname === "Civil Technology" &&
                                            <div className="card lg:mt-4 w-full lg:h-[500px] lg:w-[60%] bg-[#1c6d52] p-3 rounded-lg mx-auto shadow-xl ">
                                                <div className="card-body">
                                                    <h1 className='text-3xl text-center font-bold text-white mb-10'>Course Name</h1>
                                                    {
                                                        data.slice(12,16)?.map((course,index) => <div key={course?._id} className='text-white  w-full '>
                                                            <Link to={`/course/${course?._id}`} className='text-[7px] md:text-base  '>{index+1}.{course?.coursename}</Link>
                                                        </div>)
                                                    }
                                                </div>
                                            </div>

                                        }

                                    </div>
                                }
                            </div>
                        </div>
                        )
                    }

                </div>
            </div>

        </div>
    );
};

export default CourseServices;