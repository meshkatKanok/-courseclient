import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../About/About';
import AdminPannel from '../AdminPannel/AdminPannel';
import Blog from '../Blog/Blog';
import Career from '../Career/Career';
import Certificate from '../Certificate/Certificate';
import Galary from '../Galary/Galary';
import CoursedetailsLayout from '../layout/CoursedetailsLayout';
import Layout from '../layout/Layout';
import OurCourse from '../OurCourse/OurCourse';
import CourseServices from '../Pages/CourseService/CourseServices';
import Home from '../Pages/Home/Home';
import Industrial from '../Pages/IndusRu/Industrial';
import IndustrialItem from '../Pages/IndusRu/IndustrialItem';
import Profile from '../Pages/Profile/Profile';
import Services from '../Pages/Service/Services';
import ForgetPassword from '../Pages/Signinup/ForgetPassword';
import Signin from '../Pages/Signinup/Signin';
import Signup from '../Pages/Signinup/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Product from '../Product/Product';
import ErrorRoute from '../ErrorRoute/ErrorRoute';
import AddAnewCourse from '../AdminPannel/AddAnewCourse';
import UpdateCoursePage from '../AdminPannel/UpdateCoursePage';
import AddGallaryPhoto from '../AdminPannel/AddGallaryPhoto';
import UserData from '../AdminPannel/UserData';
import AdminBlog from '../AdminPannel/AdminBlog';
import AdminSetting from '../AdminPannel/AdminSetting';
import OurTeam from '../Pages/OurTeam/OurTeam';
import Contact from '../Pages/Contact/Contact';
import CertificateFile from '../Certificate/CertificateFile';
import AdminProduct from '../AdminPannel/AdminProduct';
import CertificateVerify from '../Pages/CertificateVerify/CertificateVerify';

const Router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { path: '/', element: <Home /> },
        ]


    },
    {
        path: '/course/:id', element: <PrivateRoute> <CoursedetailsLayout /></PrivateRoute>,
        loader: ({ params }) => fetch(` https://data-rouge.vercel.app/course/${params.id}`)
    },
    { path: "/signup", element: <Signup /> },
    { path: "/courseDetails", element: <PrivateRoute><CoursedetailsLayout /></PrivateRoute> },
    { path: "/signin", element: <Signin /> },
    {
        path: "/services/:id", element: <CourseServices />,
        loader: ({ params }) => fetch(` https://data-rouge.vercel.app/course/${params.id}`)
    },
    { path: '/services', element: <Services /> },
    { path: '/ourcourse', element: <OurCourse /> },
    {
        path: "/industrialitem/:id", element: <IndustrialItem />,
        loader: ({ params }) => fetch(` https://data-rouge.vercel.app/course/${params.id}`)
    },

    { path: '/industrial', element: <Industrial /> },
    { path: '/product', element: <Product /> },
    { path: '/certificate', element: <Certificate /> },
    { path: '/career', element: <Career /> },
    { path: '/about', element: <About /> },
    { path: '/gallery', element: <Galary /> },
    { path: '/blog', element: <Blog /> },
    {
    path:'/contact',element:<Contact/>
    },
    {
        path: '/forget', element: <ForgetPassword />
    },
    {
        path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute>
    },
    {path:'/ourteam',element:<OurTeam/>},
    {
        path: '/admin', element: <PrivateRoute><AdminPannel /></PrivateRoute>, children: [
           {path: "/admin", element:<UserData/> },
            { path: "addCourse", element: <AddAnewCourse /> },
            { path: "/admin/courseUodate", element: <UpdateCoursePage /> },
            {
                path: "/admin/addphoto", element: <AddGallaryPhoto />
            },
            {
                path:"/admin/user",element:<UserData/>
            },
            {
                path:"/admin/blog",element:<AdminBlog/>
            },
            {
                path:"/admin/profile",element: <AdminSetting/>
            },
            {
                path:"/admin/product",element:<AdminProduct/>
            }

        ]
    },
    {
path:'/certificatefile',element: <CertificateFile/>
    },
    {
path:'/certificateVerify',element:<CertificateVerify/>
    },
    {
        path: '*', element: <ErrorRoute />
    }
    
 


])

export default Router;