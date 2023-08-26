import React from 'react';

const Coursetwelve = ({ coursename,module}) => {
    return (
        <div className='max-w-screen-xl m-auto'>

        <h1 className='text-4xl font-bold text-center mt-24 mb-10 text-[#44977B] drop-shadow-lg'>{coursename}</h1>
        <div className="w-full  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="relative  text-start  shadow-xl sm:rounded-lg p-9 w-full dark:border-gray-700 bg-[#1c6d52]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr>

                          {
                            module?.map((coursemodule, index) => <span key={index} className=" py-4 text-xl w-full font-bold text-white text-justify">
                              {index + 1}. {coursemodule} <br /> <br />
                            </span>)
                          }

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Coursetwelve;