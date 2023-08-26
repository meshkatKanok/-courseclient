import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const UpdateModal = ({ id,refetch }) => {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = data => {
    const { coursename, price } = data
    const image = data.image[0]
    const hostApikey = "ee02cd46d23334df6cf8ac8440fa951a"
    const formData = new FormData();
    formData.append('image', image);
   if(image ){
    const url = `https://api.imgbb.com/1/upload?key=${hostApikey}`
    fetch(url, {
      method: 'POST',
      body: formData

    })
      .then(res => res.json())
      .then(data => {
        toast.success("Successfully Update")
        const { url: courseimg } = data?.data
        const apiUrl = `https://data-rouge.vercel.app/course/${id}`;
        fetch(apiUrl, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ courseimg, price, coursename })
        })
          .then(res => res.json())
          .then(data => {
            reset()
            refetch()
          })
         
      })
   }
   else{
    const apiUrl = `https://data-rouge.vercel.app/course/${id}`;
        fetch(apiUrl, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({price, coursename })
        })
          .then(res => res.json())
          .then(data => {
            reset()
            refetch()
          })

   }
  };
  return (
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
                  <span className="label-text">Course Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name here"
                  className="input input-bordered "
                  {...register("coursename")}

                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price here"
                  className="input input-bordered "
                  {...register("price")}

                />
              </div>
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
                <input className="btn btn-primary rounded-none w-full bg-[tomato] hover:bg-[tomato] text-white border-none" type="submit" value="UPDATE" />
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default UpdateModal;