import React from 'react';
import Sppiner from '../Sppner/Sppiner';
import { useQuery } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const AddGallaryPhoto = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://data-rouge.vercel.app/photo').then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Sppiner />
    }

    const onSubmit = data => {
        const image = data.image[0]
        const hostApikey = "ee02cd46d23334df6cf8ac8440fa951a"
        const formData = new FormData();
        formData.append('image', image);
        if (image) {
            const url = `https://api.imgbb.com/1/upload?key=${hostApikey}`
            fetch(url, {
                method: 'POST',
                body: formData

            })
                .then(res => res.json())
                .then(data => {
                    const { url: nedlGalary } = data?.data
                    toast.success("Successfully Added A Photo")
                    fetch("https://data-rouge.vercel.app/photo", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({nedlGalary})
                    })
                    refetch()
                    reset()
                })
        }
    }
    const HandleDelete = (id) => {
        fetch(`https://data-rouge.vercel.app/photo/${id}`, { method: "DELETE" })
            .then(res => {
                // Update state to remove deleted data
                toast.success("Successfully Delete")
                data.filter(photoData => photoData._id !== id);
                refetch()
            })
            .catch(err => console.error(err));
    }

    return (
        <div>

            <div className="mb-20">
            </div>
            <h1 className='mt-5 text-black text-5xl text-center mb-5'>Photo Gallery</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 imgaebody gap-5 lg:gap-y-5'>
                {
                    data && data?.map(img =>

                        <div key={img?._id}>
                            <div>

                                <div className="cardbody lg:mx-64 lg:w-[400px] lg:h-[400px]">
                                    <div className="cardbody-wrapper">
                                        <div className='flex justify-between'>
                                            <label
                                                htmlFor="my-modal-3"
                                                className="btn btn-warning bg-[#44977B] text-white"
                                            >
                                                Add Photo
                                            </label>
                                            <button onClick={() => HandleDelete(img?._id)} className="btn btn-warning bg-[#44977B] mb-5"> <FaTrash className='text-[red]' /> </button>
                                        </div>
                                        <div>
                                            <img className='cardbody-img h-[300px] ' src={img?.nedlGalary} alt="Nedl Photo" />
                                        </div>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
            {/* Modal Data-------------------- */}
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal font-poppins">
                        <div className="modal-box relative">
                            <label
                                htmlFor="my-modal-3"
                                className="btn btn-sm text-white hover:bg-red-600   bg-red-600 border-none btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>

                            <div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Course Image</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Phone No here"
                                        className=" input-bordered file-input w-full  "
                                        name="phone"
                                        {...register("image")}

                                    />

                                </div>
                                <div className="my-5">
                                    <input className="btn btn-primary rounded-none w-full bg-[tomato] hover:bg-[tomato] text-white border-none" type="submit" value="Add Photo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddGallaryPhoto;