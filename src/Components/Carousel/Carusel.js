import React from 'react';
import Marquee from "react-fast-marquee";
import banner1 from '../../Components/asset/banner/nedl banner.jpg'
import banner2 from '../../Components/asset/banner/banner2.png'
import banner3 from '../../Components/asset/banner/banner3.png'
import banner4 from '../../Components/asset/banner/banner1.jpg'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Carusel = () => {
  const {data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(' https://data-rouge.vercel.app/course').then(
        (res) => res.json(),
      ),
  })
  return (
    <div>

      <div className="carousel w-full  lg:h-[500px] mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-opacity-50 border-none ">❮</a>
            <a href="#slide2" className="btn btn-circle bg-opacity-50 border-none ">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-opacity-50 border-none">❮</a>
            <a href="#slide3" className="btn btn-circle bg-opacity-50 border-none">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-opacity-50 border-none">❮</a>
            <a href="#slide4" className="btn btn-circle bg-opacity-50 border-none">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-opacity-50 border-none">❮</a>
            <a href="#slide1" className="btn btn-circle bg-opacity-50 border-none">❯</a>
          </div>
        </div>
      </div>
      <div>

        <Marquee className='bg-[#44977B] h-[60px] text-white text-[20px]'>
          {
            data?.map(course => <Link key={course?._id} className="hover:bg-blue-600" to={`/course/${course?._id}`}> ***{course?.coursename} | </Link>)
          }
        </Marquee>
      </div>
    </div>
  );
};

export default Carusel;
