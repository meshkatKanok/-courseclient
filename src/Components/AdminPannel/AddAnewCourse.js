import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddAnewCourse = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledTwo, setIsDisabledTwo] = useState(true)
    const [isDisabledthree, setIsDisabledthree] = useState(true)
    const [isDisabledfour, setIsDisabledfour] = useState(true)
    const [isDisabledfive, setIsDisabledfive] = useState(true)
    const [isDisabledsix, setIsDisabledsix] = useState(true)
    const [isDisabledseven, setIsDisabledseven] = useState(true)
    const [isDisabledeight, setIsDisabledeight] = useState(true)
    const [isDisablednine, setIsDisablednine] = useState(true)
    const [isDisabledTen, setIsDisabledTen] = useState(true)


    const onSubmit = data => {
        const { coursename, details, price, module1, module2, module3, module4, module5, module6, module7, module8, module9, module10
        } = data
        const coursebrand = [
            { module: module1 },
            { module: module2 },
            { module: module3 },
            { module: module4 },
            { module: module5 },
            { module: module6 },
            { module: module7 },
            { module: module8 },
            { module: module9 },
            { module: module10 },



        ]
        const image = data.image[0]
        const hostApikey = "ee02cd46d23334df6cf8ac8440fa951a"
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${hostApikey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(data => {

                const { url: courseimg } = data?.data
                fetch('https://data-rouge.vercel.app/course', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        courseimg,
                        coursename, details, price,coursebrand
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data?.acknowledged === true) {
                            reset()
                            toast.success("Successfully Added A New Course")
                        }
                    })

            })
    };
    return (
        <div>
            <div className="flex justify-center items-center mx-auto h-full"
                style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
            >

                <div className="container mx-auto ml-96 my-4">

                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex">
                                <span className='text-black text-2xl font-bold'>Add A New Course</span>
                            </div>
                            <div className="mt-5">
                                <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                                    <input className="w-full bg-gray-100 text-gray-900 m p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Enter CourseNane" {...register("coursename")} />
                                    <input className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Enter Course Price" {...register("price")} />
                                </div>
                                {/* Upload a Phone */}

                                <label className="w-full flex flex-col mt-4 items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span className="mt-2 text-base leading-normal">Select a Course Photo</span>
                                    <input type='file' className="hidden" {...register("image")} />
                                </label>

                                {/* upload Photo-------- */}
                            </div>
                            {/* All Course Module List-------- */}
                            <div className='lg:grid lg:grid-cols-2 mt-3 lg:gap-4'>
                                <input onClick={() => setIsDisabled(false)} className="w-full bg-gray-100 text-gray-900 m p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module1")} />
                                <input disabled={isDisabled} onClick={() => setIsDisabledTwo(false)} className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module2")} />
                                <input disabled={isDisabledTwo} onClick={() => setIsDisabledthree(false)} className="w-full bg-gray-100 text-gray-900 m p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module3")} />
                                <input disabled={isDisabledthree} onClick={() => setIsDisabledfour()} className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module4")} />
                                <input disabled={isDisabledfour} onClick={() => setIsDisabledfive()} className="w-full bg-gray-100 text-gray-900 m p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module5")} />
                                <input disabled={isDisabledfive} onClick={() => setIsDisabledsix()} className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module6")} />
                                <input disabled={isDisabledsix} onClick={() => setIsDisabledseven()} className="w-full bg-gray-100 text-gray-900 m p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module7")} />
                                <input disabled={isDisabledseven} onClick={() => setIsDisabledeight()} className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module8")} />
                                <input disabled={isDisabledeight} onClick={() => setIsDisablednine()} className="w-full bg-gray-100 text-gray-900 m p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module9")} />
                                <input disabled={isDisablednine} onClick={() => setIsDisabledTen()} className="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Enter Course Module" {...register("module10")} />


                            </div>
                            {/* All Course Module List-------- */}
                            <div className="my-2 w-full">
                                <input className="uppercase text-sm cursor-pointer font-bold tracking-wide bg-[#168b64] text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline hover:bg-[#0b5c41]" type="submit" value="Add A New Course" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddAnewCourse;
