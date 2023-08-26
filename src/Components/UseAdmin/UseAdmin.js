import React, { useEffect, useState } from 'react';

const UseAdmin = (email) => {
    const [isAdmin,setAdmin]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`https://data-rouge.vercel.app/user/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setAdmin(data.isAdmin)
            })
        }
    },[email])
    return [isAdmin]
};

export default UseAdmin;