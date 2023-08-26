import React from 'react';
import AdminHeader from './AdminHeader';
import LeftSidebar from './LeftSidebar';
import { Outlet } from 'react-router-dom';
 
 

const AdminPannel = () => {
    return (
        <div>
         <AdminHeader/>
         <LeftSidebar/>
         <Outlet/>
       
            
        </div>
    );
};
 
export default AdminPannel;