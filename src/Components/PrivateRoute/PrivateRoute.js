import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Sppiner from '../Sppner/Sppiner';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
     
    if(user){
        return children
    }
    if(loading){
        return <Sppiner/>
    }
    return <Navigate to='/Signin' state={{from:location}}replace></Navigate>
    
};

export default PrivateRoute;