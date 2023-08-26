import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Course from './Course';
import Sppiner from '../../Sppner/Sppiner';

const Courseitem = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://data-rouge.vercel.app/course').then(
            (res) => res.json(),
          ),
      })
     if(isLoading){
      return  <Sppiner/>
     }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-20 mb-10 text-[#44977B] drop-shadow-lg'>Our Most Popular Course</h1>
             <div className='max-w-screen-xl m-auto grid md:grid-cols-2 lg:grid-cols-3  gap-10 mb-20'>
             {
                data?.map(course=><Course key={course._id} course={course}></Course>)
            }
             </div>
            {/* Services-------------------- */}
                
        </div>
    );
};

export default Courseitem;