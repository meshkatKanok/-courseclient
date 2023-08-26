import React from 'react';

const CoursenumTwo = ({coursename,advancecourse}) => {
    return (
        <div>
            <div className='max-w-screen-xl m-auto'>
      <h1 className='text-4xl font-bold text-center mt-20 mb-10 text-[#44977B] drop-shadow-lg'>{coursename}</h1>
    {
        advancecourse&& advancecourse.map((advanceCourse,index)=>
            <div key={index} className="w-full mt-5  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
            <div className="mb-4">
              <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white  text-center">{advanceCourse?.brand}</h5>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative  text-start  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                          <span
                           className='lg:py-4 w-full text-xl font-bold text-white text-justify'>
          {
            advanceCourse?.brandmodule
          }
                             
                          </span>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
            )
    }
    </div>
            
        </div>
    );
};

export default CoursenumTwo;