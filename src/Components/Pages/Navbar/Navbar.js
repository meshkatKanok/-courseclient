import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logpicture from '../../asset/logo/betchLogo.png'
import Spiner from '../../Sppner/Sppiner';

const Navbar = () => {
  const { data,isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(` https://data-rouge.vercel.app/course`).then(
        (res) => res.json(),
      ),
  })
if(isLoading){
  return <Spiner/>
}
  return (
   <div>
     <div className='lg:w-[80%] md:w-[70%] w-[200px] xl:w-[95%] h-10 mx-auto flex items-center mt-12'>
      <Link to="/"><img className='lg:w-full lg:h-[50px] md:w-[250px] md:h-[50px] w-[300px]' src={logpicture} alt="" /></Link>
      <div className="navbar  lg:bg-[#44977B] lg:ml-9 lg:rounded-xl lg:w-[85%] w-full ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden md:ml-[200px]  bg-[#44977B] md:w-[150px] md:h-[80px] md:bg-[#44977B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content lg:mt-3 md:mt-3 lg:p-2 shadow bg-[#44977B]  rounded-box lg:w-52 md:w-52 ml-[-120px] lg:ml-0 md:lg-0 text-white">
              <li><Link to='/'>Home</Link></li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  our Course
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2 ml-[-180px] menu menu-compact bg-[#44977B] ">
                  {
                    data?.map(course => <li key={course?._id} className='text-white z-50 bg-[#44977B]  w-full '><Link to={`/course/${course?._id}`} className='text-[7px] md:text-base'>{course?.coursename}</Link></li>)
                  }
                </ul>
              </li>
              <li><Link to="/industrial">Industrial Attachment</Link></li>
              <li><Link to="/services">Service</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/certificate">CERTIFICATE VERIFICATION</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/ourteam" className='bg-[#44977B]'>Our team</Link></li>
              <li><Link className='bg-[#44977B]' to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className=" hidden lg:flex mr-[800px]">
          <ul className="menu menu-horizontal text-xs font-bold text-white ">
            <li ><Link className='bg-[#44977B]' to='/'>Home</Link></li>
            <li tabIndex={0}>
              <Link className='bg-[#44977B]' to="/ourcourse">
                Our Course

              </Link>
              <ul className="">
                {
                  data?.map(course => <li key={course?._id} className='text-white z-50 bg-[#44977B]'><Link className='bg-[#44977B]' to={`/course/${course?._id}`}>{course?.coursename}</Link></li>)
                }
              </ul>
            </li>
            {/* Industrial Attachment--------------------------------------menu */}
            <li><Link className='bg-[#44977B]' to="/industrial">Industrial Attachment</Link>
              <ul>
                {
                  data && data.slice(0, 5)?.map(attdata => <div key={attdata?._id} className="dropdown">
                    <li tabIndex={0} className='text-white z-10  bg-[#44977B]'>
                      <Link className="justify-between bg-[#44977B]">
                        {attdata?.depname
                        }
                        <img className='w-4 h-4 mr-2' src={attdata?.icone} alt="" />
                      </Link>
                    </li>
                    <ul tabIndex={0} className="p-2 ml-[180px] menu menu-compact rounded dropdown-content bg-[#44977B] ">
                      {
                        attdata.depname === "Electrical" && data.slice(0, 6)?.map(course => <li key={course?._id} className='text-white z-50 bg-[#44977B]  w-full '>
                          <Link to={`/course/${course?._id}`} className='text-[7px] md:text-base  bg-[#44977B]'>{course?.coursename}</Link>
                        </li>)
                      }
                      {
                        attdata.depname === "Electronics" && data.slice(0,6)?.map(course => <li key={course?._id} className='text-white z-50 bg-[#44977B]  w-full '><Link to={`/course/${course?._id}`} className='text-[7px] md:text-base bg-[#44977B] '>{course?.coursename}</Link></li>)
                      }
                      {
                        attdata.depname === "Mechanical Technology" && data.slice(0,6)?.map(course => <li key={course?._id} className='text-white z-50 bg-[#44977B]  w-full '><Link to={`/course/${course?._id}`} className='text-[7px] md:text-base bg-[#44977B] '>{course?.coursename}</Link></li>)
                      }
                      {
                        attdata.depname === "Computer Science & Technology" && data.slice(6, 11)?.map(course => <li key={course?._id} className='text-white z-50 bg-[#44977B]  w-full '><Link to={`/course/${course?._id}`} className='text-[7px] md:text-base bg-[#44977B]'>{course?.coursename}</Link></li>)
                      }
                      {
                        attdata.depname === "Civil Technology" && data.slice(11, 16)?.map(course => <li key={course?._id} className='text-white z-50 bg-[#44977B]  w-full '><Link to={`/course/${course?._id}`} className='text-[7px]   bg-[#44977B] md:text-base'>{course?.coursename}</Link></li>)
                        
                      }
                    </ul>

                  </div>
                  )
                }
              </ul>
            </li>
            <li><Link className='bg-[#44977B]' to="/services">Service</Link></li>
            <li><Link className='bg-[#44977B]' to="/product">Product</Link></li>
            <li><Link className='bg-[#44977B]' to="/certificateVerify">Certificate Verify</Link>
            <ul>
             <li tabIndex={0} className='bg-[#44977B] p-2 z-10'>
              <Link to="/certificateVerify" className='bg-[#44977B]'>Certificate Verify</Link>
              <Link to="/certificate" className='bg-[#44977B]'>Certificate Verification</Link>
             </li>
            </ul>
            </li>
            <li><Link className='bg-[#44977B]' to="/career">Career</Link></li>
            <li><Link className='bg-[#44977B]' to="/about">About</Link>
            <ul>
             <li tabIndex={0} className='bg-[#44977B] p-2 z-10'>
              <Link to="/ourteam" className='bg-[#44977B]'>Our team</Link>
             </li>
            </ul>
            </li>
            <li><Link className='bg-[#44977B]' to="/blog">Blog</Link>
            </li>
            <li><Link className='bg-[#44977B]' to="/gallery">Gallery</Link></li>
            <li><Link className='bg-[#44977B]' to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

    </div>
   </div>
  );
};

export default Navbar;