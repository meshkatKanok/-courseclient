import React from 'react';
import { Link } from 'react-router-dom';
import logpicture from '../../Components/asset/logo/betchLogo.png'


const AdminHeader = () => {
    return (
        <div>
            <div
             style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
             className="navbar  z-50  shadow-xl">
                <div className=' w-full mx-auto'>
                    <div className="flex-1">
                        <Link to="/"><img className='lg:w-[200px] lg:h-[50px] md:w-[250px] md:h-[50px] w-[300px]' src={logpicture} alt="" /></Link>
                    </div>
                     
                </div>
            </div>

        </div>
    );
};

export default AdminHeader;