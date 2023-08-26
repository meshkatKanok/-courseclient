import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const UpdateProModal = ({ user }) => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
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
                const { url } = data?.data



                if (data?.success === true) {
                    toast.success("Add Your Picture")
                    fetch("https://data-rouge.vercel.app/UserPicture",
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ url, email: user?.email })
                        }

                    )

                }
            })
        reset()
    };



    return (
        <div>



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex justify-center mt-8">
                        <div className="w-full">
                            <label className="px-4 py-2 flex cursor-pointer justify-end" htmlFor="my-modal" >&#10060;</label>
                            <div className="m-4">
                                <label className="inline-block mb-2 text-gray-500">Upload
                                    Image(jpg,png,svg,jpeg)</label>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                            <div className="flex flex-col items-center justify-center pt-7">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                    Select a photo</p>
                                            </div>
                                            <input type="file" {...register("image")} className="opacity-0" />
                                        </label>
                                    </div>
                                    <div className="flex p-2 space-x-4">

                                        <label htmlFor="my-modal" className="px-4 py-2 cursor-pointer text-white bg-green-500 rounded shadow-xl">
                                            <input className='cursor-pointer' type="submit" />
                                        </label>


                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default UpdateProModal;