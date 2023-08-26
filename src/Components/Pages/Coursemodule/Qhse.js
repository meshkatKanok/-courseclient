import React from 'react';

const Qhse = ({ courseimg, coursename }) => {
    return (
        <div>
            {/* ----------------------------- */}
            <div className='max-w-screen-xl m-auto'>
                <h1 className='text-4xl font-bold text-center mt-20 mb-10 text-[#44977B] drop-shadow-lg'>{coursename}</h1>
                <img className=" rounded-t-lg lg:h-[800px] md:h-[800px] w-full" src={courseimg} alt="product image" />
                <div className="w-full mt-5  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
                    <div className="mb-4">
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-full text-start  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                                        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead  className='w-full text-white'>
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            📢 Trainings are:
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Oneline
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Offline
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr  >
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Basic QHSE certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                            5000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            6000
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️  Basic First Aid and fire fighting
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                            7000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            8000
                                                        </td>
                                                         
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Emergency prepardness and response
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        5000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            6000
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️  Hazard identification and Risk assessment
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        3000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            4000
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Induatrial heavy Equipment operator's certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        7000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            8000
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️  Scaffolding erection, dismentling and modification certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        5000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            6000
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Scaffolding Inspectors' and supervisors certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        6000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            7000
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Telecom Tower climbing and work at height certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        6000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            7000
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Permit to work and LOTO certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        4000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            5000
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Confined space entry awarenesses training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        7000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            7500
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Hot work Certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        4500
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            5500
                                                        </td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        ⚙️ Electrical work certification training
                                                        </th>
                                                        <td className="px-6 py-4 text-white">
                                                        6000
                                                        </td>
                                                        <td className="px-6 py-4 text-white">
                                                            7000
                                                        </td>
                                                       
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qhse;