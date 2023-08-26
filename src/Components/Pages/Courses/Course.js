import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { coursename, courseimg, price, _id
    } = course
   
    return (
        <div>
            <div className="w-full  bg-white border border-gray-200 rounded-lg hover:shadow-2xl  lg:h-[400px] md:h-[400px] shadow-lg " style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                <Link to="#">
                    <img className=" rounded-t-lg lg:h-[240px] md:h-[240px] w-full" src={courseimg} alt="product image" />
                </Link>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-[50px]">{coursename}</h5>
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
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">৳{price}</span>
                        <Link to={`/course/${_id}`}><button className="btn btn-warning bg-[#44977B]"><FaArrowAltCircleRight className='text-white'></FaArrowAltCircleRight></button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Course;