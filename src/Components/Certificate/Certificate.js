import React, { useEffect, useState } from 'react';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
 

const Certificate = () => {
    const navigation=useNavigate()
     
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
      localStorage.setItem("key",JSON.stringify(data))
      navigation("/certificatefile")

}
return (
    <div>
        <Header />
        <Navbar />
        <div>
            <div>
            </div>
            <>
                {/* component */}
                <div className="flex justify-center items-center w-full lg:mt-24 mt-48 h-screen mx-auto bg-white">
                    {/* COMPONENT CODE */}
                    <div className="container mx-auto my-4 px-4 lg:px-20">
                        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold uppercase text-blue-900  lg:text-5xl">
                                    Certificate Verification Data
                                </h1>
                            </div>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Your Name*"
                                        {...register("name")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Father's Name*"
                                        {...register("fatherName")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Mother's Name*"
                                        {...register("MotherName")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Department Name*"
                                        {...register("Departmentname")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Board Roll*"
                                        {...register("roll")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Session*"
                                        {...register("session")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Institute Name*"
                                        {...register("institute")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Course Name*"
                                        {...register("courseName")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Training Start Date*"
                                        {...register("traningDate")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Training End Date*"
                                        {...register("TraningEnd")}
                                    />
                                    <input
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Course Title*"
                                        {...register("coursetitle")}
                                    />
                                </div>
                                <div className="my-2 w-1/2 lg:w-1/4">
                                 
                                  <input type="submit" className=" cursor-pointer uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline" value="Generate" />
                                  
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </>


        </div>
    </div>
);
};

export default Certificate;
