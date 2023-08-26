import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import Sppiner from '../Sppner/Sppiner';

const AdminBlog = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://data-rouge.vercel.app/blogData').then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return <Sppiner />
    }
   
    const onSubmit = data => {
        const {title, Details}=data
        fetch('https://data-rouge.vercel.app/blogData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, Details
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.acknowledged === true){
                reset()
                refetch()
                toast.success("Successfully Added A Blog")
            }
        })

    }
    const HandleDelete=(id)=>{
        fetch(`https://data-rouge.vercel.app/blogData/${id}`,{method:"DELETE"})
        .then(res => {
          // Update state to remove deleted data
           toast.success("Successfully Delete")
          data?.filter(BlogData =>BlogData._id !== id);
          refetch()
        })
        .catch(err => console.error(err));
    };
    return (
        <div>
            <div
                 
            >
                <div>
                    <h1 className='mt-5 text-center lg:text-5xl md:text-2xl text-lg font-semibold'>Blog</h1>
                </div>
                <label 
                    htmlFor="my-modal-3"
                    className="btn btn-warning bg-[#44977B] text-white mx-96"
                >
                    Add Blog
                </label>
              {
                data?.map(blog=>  <div key={blog?._id} className="card w-[50%] mt-5 mx-auto  shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                <button onClick={()=>HandleDelete(blog?._id)} className="btn btn-warning w-20 bg-[#44977B]"> <FaTrash className='text-[red]'/> </button>
                     <div key={blog?._id} className="card-body">
                    <h2 className="card-title lg:text-xl ">{blog?.title}</h2>
                    <p className='text-black lg:text-lg font-bold'>
                        {blog?.Details}

                    </p>

                </div>
                  
                </div>)
              }
            </div>
{/* Modal start------------- */}
<form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal font-poppins">
          <div className="modal-box relative">
            <label
             style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
              htmlFor="my-modal-3"
              className="btn btn-sm text-white  btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Blog Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title here"
                  className="input input-bordered "
                  {...register("title")}

                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Blog Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Detailds here"
                  className="input input-bordered "
                  {...register("Details")}

                />
              </div>
              
              <div className="my-5">
                <input
                 style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
                 className="btn btn-primary rounded-none w-full  text-white border-none" type="submit" value="Add Blog" />
              </div>
            </div>
          </div>
        </div>
      </form>
{/* Modal End----------------------- */}
        </div>
    );
};

export default AdminBlog;