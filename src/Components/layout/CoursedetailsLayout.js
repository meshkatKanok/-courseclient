import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursefiurDetails from '../Pages/Coursemodule/CoursefiurDetails';
import CourseFiveDetails from '../Pages/Coursemodule/CourseFiveDetails';
import CoursenumTwo from '../Pages/Coursemodule/CoursenumTwo';
import Coursethreedetails from '../Pages/Coursemodule/Coursethreedetails';
import Coursetwelve from '../Pages/Coursemodule/Coursetwelve';
import Qhse from '../Pages/Coursemodule/Qhse';
import Header from '../Pages/Header/Header';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../../Components/Pages/Footer/Footer'
import AdmissionModal from './AdmissionModal';

const CoursedetailsLayout = () => {
  const courseData = useLoaderData()
  const { brand, coursebrand,coursename, advancecourse, brandone, brandmodule, coursethree, brandTWo, Siemens, brandThree,
    Siemenss7, brandfour,Ls, brandfive, Mitsubishi, barandsix, Panasonic, Fourthbrand, LsTitle, courseFive, Lsone, brandtwo, coursebrandthree, coursebrandtwo, course_id, courseimg, module, price
  } = courseData
  return (
    <div>
      <Header />
      <Navbar />
      <div className='max-w-screen-xl  m-auto relative'>
        <label
          style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
          htmlFor="my-modal-3"
          className="btn border-none absolute top-7 w-full"
        >
          Admission Now
        </label>
        <AdmissionModal coursename={coursename} price={price} />
      </div>
      {
        coursebrand && <div className='max-w-screen-xl m-auto'>

          <h1 className='text-4xl font-bold text-center mt-24 mb-10 text-[#44977B] drop-shadow-lg'>{coursename}</h1>
          <div className="w-full  p-4 border border-gray-200 rounded-lg shadow sm:p-8 bg-[#44977B]" >
            <div className="mb-4">
              <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white  text-center">{brand}</h5>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative  text-start w-full  shadow-xl sm:rounded-lg p-9 dark:border-gray-700 bg-[#1c6d52]">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                          <tr>

                            {
                              coursebrand?.map((details, index) => <span key={index} className=" py-4 text-xl w-full font-bold text-white text-justify">
                                {index + 1}. {details?.module} <br /> <br />
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
      }

      {
        advancecourse && <CoursenumTwo coursename={coursename} advancecourse={advancecourse} />
      }

      {
        coursethree && <Coursethreedetails brandone={brandone} brandmodule={brandmodule} coursename={coursename} coursethree={coursethree
        } brand={brand
        } brandTWo={brandTWo
        } Siemens={Siemens}
          brandThree={brandThree
          }
          Siemenss7={Siemenss7}
          brandfour={brandfour}
          Ls={Ls}
          brandfive={brandfive}
          Mitsubishi={Mitsubishi}
          barandsix={barandsix}
          Panasonic={Panasonic}
        />
      }

      {
        Fourthbrand && <CoursefiurDetails Fourthbrand={Fourthbrand} coursename={coursename} Ls={Ls} LsTitle={LsTitle}
          brand={brand}

        />
      }

      {
        courseFive && <CourseFiveDetails brand={brand} brandTWo
          ={brandTWo} brandThree={brandThree} brandfour
          ={brandfour} brandfive={brandfive} LsTitle={LsTitle} barandsix={barandsix}
          Ls={Ls} Lsone={Lsone} Mitsubishi={Mitsubishi} Panasonic={Panasonic} Siemens={Siemens
          } Siemenss7={Siemenss7} coursebrand={coursebrand} coursebrandthree={coursebrandthree} coursebrandtwo={coursebrandtwo}
          coursename={coursename} brandtwo={brandtwo} courseFive={courseFive}
        />
      }
      {
        coursebrand || advancecourse || coursethree || Fourthbrand || course_id === "17" ? "" : <Coursetwelve coursename={coursename} module={module} courseimg={courseimg}
        />
      }
      {course_id === "17" && <Qhse coursename={coursename} courseimg={courseimg} />}

      <Footer />
    </div>
  );
};

export default CoursedetailsLayout;