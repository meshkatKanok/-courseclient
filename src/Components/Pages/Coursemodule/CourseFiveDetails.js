import React from 'react';

const CourseFiveDetails = ({ brand, brandTWo, brandThree, brandfour, brandfive, LsTitle, barandsix, Ls, Lsone, Mitsubishi, Panasonic, Siemens, Siemenss7, coursebrand, coursebrandthree, coursebrandtwo, coursename,brandtwo,courseFive }) => {
    return (
        <div className='max-w-screen-xl m-auto'>
            <div className='max-w-screen-xl m-auto'>
                <div className="w-full mt-5  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
                    <div className="mb-4">
                        <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white  text-center">{brandTWo}</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative  text-start  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                                        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            {
                                                Siemens?.map((Siemens, index) => <span
                                                    key={index}
                                                    className='lg:py-4 w-full  text-xl font-bold text-white text-justify'>
                                                 {index+1}.   {
                                                        Siemens?.modulelist
                                                    }
<br /> <br />
                                                </span>)
                                            }

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 2nd brand--------------------------------------------- */}
            <div className='max-w-screen-xl m-auto'>
                <div className="w-full mt-5  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
                    <div className="mb-4">
                        <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white  text-center">{brandThree}</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative  text-start  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                                        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            {
                                                Siemenss7?.map((Siemenss7, index) => <span
                                                    key={index}
                                                    className='lg:py-4 w-full text-xl font-bold text-white text-justify'>
                                                    {index + 1}.     {
                                                        Siemenss7?.modulelist
                                                    }
                                                    <br /> <br />
                                                </span>
                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 3rd brand------------------------------- */}
            <div className='max-w-screen-xl m-auto'>
                <div className="w-full mt-5  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
                    <div className="mb-4">
                        <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white  text-center">{brandfour}</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-full text-start  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                                        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            {
                                                Ls?.map((Ls, index) => <span
                                                    key={index}
                                                    className='lg:py-4 w-full  text-xl font-bold text-white text-justify'>
                                                {index+1}.    {
                                                        Ls?.modulelist
                                                    }
                                                  <br /> <br />
                                                </span>)
                                            }

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                {/* 5th brand------------------------ */}

                <div className="w-full mt-5  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
                    <div className="mb-4">
                        <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white  text-center">{barandsix}</h5>
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-full text-start  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                                        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            {
                                                Panasonic
                                                ?.map((Panasonic
                                                    , index) => <span
                                                    key={index}
                                                    className='lg:py-4 w-full  text-xl font-bold text-white text-justify'>
                                                {index+1}.    {
                                                        Panasonic
                                                        ?.modulelist
                                                    }
                                                  <br /> <br />
                                                </span>)
                                            }

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 6th all brand-------------------------------- */}
               {
            courseFive?.map(courseFive=><div className="w-full mt-5  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
            <div className="mb-4">
                <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white  text-center">{courseFive?.brand}</h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="relative w-full text-start  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                                <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    
                                        
                                        <span
                                            
                                            className='lg:py-4 w-full  text-xl font-bold text-white text-justify'>
                                         {
                                                
                                                courseFive?.brandmodule
                                            }
                                          
                                        </span>
                                     

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>)
               }

                 
        </div>
    );
};

export default CourseFiveDetails;