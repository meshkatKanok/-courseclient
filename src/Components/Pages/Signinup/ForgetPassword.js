import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Header from '../Header/Header';

const ForgetPassword = () => {
    const { register, handleSubmit, resetField } = useForm();
    const { resetEmail} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.from?.pathname || '/';
    const resetemail = (data) => {
        resetEmail(data?.email)
            .then(() => {
                toast.success("Please Check Your Email")
                resetField("email")
                navigate(form, { replace: true })
            
            })
            .catch(e =>{
                if(e){
                    return toast.error("Please Add a Verify email Address")
                }
            })
    }
    
    return (
        <div>
            <Header/>
            <div className="hero">
                <div className="hero-content">
                    <div className="card   shadow-2xl w-[385px] h-[300px] bg-base-100">
                        <div className="card-body">
                            <span className="text-g font-semibold text-black text-center">Forget Email</span>
                            <form onSubmit={handleSubmit(resetemail)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input placeholder='Enter Your Email' type='email' {...register("email")} className="input input-bordered w-full" />
                                <input type='submit' className="btn btn-accent w-full mt-3 text-white " value='Reset Password' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ForgetPassword;