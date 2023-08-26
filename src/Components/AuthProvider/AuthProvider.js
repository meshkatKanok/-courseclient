import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase.confiq';
export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
     const [user,setUser]=useState()
const signup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)

}
const logout=()=>{
    return  signOut(auth)
}
const resetEmail=(email)=>{
    return sendPasswordResetEmail (auth,email)
}
useEffect(() => {
    const unScrbscribe = onAuthStateChanged(auth, currentuser => {
     setLoading(false)
        setUser(currentuser)
        
    })
    return () => {
        return unScrbscribe()
    }
}, [])
const userInfo={
    signup,
    signin,
    logout,
    user,
    loading,
    setLoading,
    resetEmail

}
    return(
        <AuthContext.Provider value={userInfo}>
             {children}
         </AuthContext.Provider>
    )
};

export default AuthProvider;