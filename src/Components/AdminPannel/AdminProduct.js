import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AdminProduct = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log( data);
        const { Productname, price
        } = data
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
               

                // const { url:ProductImg } = data?.image
                fetch('https://data-rouge.vercel.app/product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Productname, price,
                        // ProductImg
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data?.acknowledged === true) {
                            reset()
                            toast.success("Successfully Added A New Product")
                        }
                    })

            })
    };
    return (
        <div className='text-center'>
            Admin Product

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
                                            type="text" placeholder="Enter productName" {...register("Productname")} />
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
                                <div className="my-2 w-full">
                                    <input className="uppercase text-sm cursor-pointer font-bold tracking-wide bg-[#168b64] text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline hover:bg-[#0b5c41]" type="submit" value="Add A New Course" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminProduct;