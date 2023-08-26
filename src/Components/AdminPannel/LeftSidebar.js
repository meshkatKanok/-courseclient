import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaUser } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

const LeftSidebar = () => {
	const{logout}=useContext(AuthContext)
	const LogOutCLick = () => {
        logout()
    }
    return (
        <div>
            
            <div className="fixed h-full mb-10   p-3 space-y-2 w-40 z-0   hidden lg:block bg-[#168b64] ">
	<div className="divide-y  divide-gray-700">
		<ul  className="pt-2 pb-4   space-y-1 text-sm">
		<li className="  dark:text-black">
				<Link  to="/admin/user" className="flex items-center p-2 space-x-3 rounded-md">
					 <FaUser className='h-4 w-4'/>
					<span className='text-white'>Admit Data</span>
				</Link>
			</li>
		</ul>
		<ul className="pt-2 pb-4   space-y-1  ">
			<li className="  dark:text-black">
				<Link  to="addCourse" className="flex items-center p-2 space-x-3 rounded-md">
					 <FaPlusCircle className='h-4 w-4'/>
					<span className='text-white'>Add New Course</span>
				</Link>
			</li>
			 
			 
			 
			 
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			 
			<li>
				<Link to="/admin/courseUodate" className="flex items-center p-2 space-x-3 rounded-md">
				<FaPlusCircle className='h-4 w-4'/>
					<span className='text-white'>Update Course Page</span>
				</Link>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			 
			<li>
				<Link  to="/admin/addphoto" className="flex items-center p-2 space-x-3 rounded-md">
					 <FaPlusCircle className='h-4 w-4'/>
					<span className='text-white'>Add a Gallery Photo</span>
				</Link>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			 
			<li>
				<Link  to="/admin/blog" className="flex items-center p-2 space-x-3 rounded-md">
					 <FaPlusCircle className='h-4 w-4'/>
					<span className='text-white'>Blog</span>
				</Link>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			 
			<li>
				<Link  to="/admin/product" className="flex items-center p-2 space-x-3 rounded-md">
					 <FaPlusCircle className='h-4 w-4'/>
					<span className='text-white'>Product</span>
				</Link>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			 
			<li>
				<Link  to="/admin/profile" className="flex items-center p-2 space-x-3 rounded-md">
					 <FaPlusCircle className='h-4 w-4'/>
					<span className='text-white'>Setting</span>
				</Link>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			 
			<li>
				<button onClick={LogOutCLick}  rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-black">
						<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
						<rect width="32" height="64" x="256" y="232"></rect>
					</svg>
					<span className='text-white'>Logout</span>
				</button>
			</li>
		</ul>
	</div>
</div>
            
        </div>
    );
};

export default LeftSidebar;