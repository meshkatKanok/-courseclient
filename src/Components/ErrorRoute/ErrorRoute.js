import React from 'react';
import './ErrorRoute.css'
import { Link } from 'react-router-dom';

const ErrorRoute = () => {
     
    return (
        <div>
            <div class="bg-gray-100 h-screen justify-center">
                <center class="m-auto">
              
                    <div class=" tracking-widest">
                        <span class="text-gray-500 text-6xl block"><span>4  0  4</span></span>
                        <span class="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>

                    </div>
                </center>
                <center class="mt-6">
                   <Link  to="/" class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back </Link>
                </center>
            </div>
        </div>
    );
};

export default ErrorRoute;