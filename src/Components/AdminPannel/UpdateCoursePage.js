import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sppiner from '../Sppner/Sppiner';
import { toast } from 'react-hot-toast';
import UpdateModal from './UpdateModal';

const UpdateCoursePage = () => {
     const [UpdateId,SetUpdate]=useState("")
    const { isLoading, error, data,refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://data-rouge.vercel.app/course').then(
            (res) => res.json(),
          ),
      })
     if(isLoading){
      return  <Sppiner/>
     }
     const HandleDelete=(id)=>{
        fetch(`https://data-rouge.vercel.app/course/${id}`,{method:"DELETE"})
        .then(res => {
          // Update state to remove deleted data
           toast.success("Successfully Delete")
          data.filter(deteData =>deteData._id !== id);
          refetch()
        })
        .catch(err => console.error(err));
    };
   
    
    return (
        <div>
             <div>
             <div className='max-w-screen-xl m-auto grid md:grid-cols-2 lg:grid-cols-2  gap-10 lg:gap-y-5 mb-20'>
             {
                data?.map(course=> <div key={course._id}>
                      <UpdateModal refetch={refetch} id={UpdateId}/>
                    <div className="lg:w-[400px] lg:mx-52 w-full mt-5  bg-white border border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[400px] md:h-[400px] shadow-lg " style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                        <Link to="#">
                            <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src={course?.courseimg} alt="product image" />
                        </Link>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-[50px]">{course?.coursename}</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300 border-ye" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300 border-ye" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300 border-ye" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300 border-ye" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300 border-ye" />
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">৳{course?.price}</span>
                                {
                                course?.course_id==="01" ||course?.course_id==="05" ||
                                course?.advancecourse || course?.coursethree || course?.Fourthbrand ||course?.course_id === "17"? ""  :
                                 <label  onClick={()=>SetUpdate(course._id)} 
                                 htmlFor="my-modal-3"
                                 className="btn btn-warning bg-[#44977B] text-white"
                               >
                              UpDate
                               </label>
                               
                               } 
                               {
                                  course?.course_id==="01" || course?.course_id==="05" || course?.advancecourse || course?.coursethree || course?.Fourthbrand ||course?.course_id === "17"? ""  :
                                 <button onClick={()=>HandleDelete(course?._id)} className="btn btn-warning bg-[#44977B]"> <FaTrash className='text-[red]'/> </button>
                               } 


                            </div>
                        </div>
                    </div>
        
        
                </div>)
            }
             </div>
            
           
        </div>
            
        </div>
    );
};

export default UpdateCoursePage;