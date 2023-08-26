import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import Header from '../Header/Header';
import ReactDatePicker from 'react-datepicker';
import signuoGif from '../../asset/gif/registration-animation.gif'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';





const Signup = () => {
    const [Error, SetError] = useState("")
    const { signup } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.from?.pathname || '/';

    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { address,
            email,
            name,
            password,
            phone,
            selectdata,
            username } = data;
        // Post User Data-----------------------------------------
        fetch('https://data-rouge.vercel.app/Userdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address,
                email,
                name,
                password,
                phone,
                selectdata,
                username
            })
        })
            .then(res => res.json(res))
            .then(data => {
                if (data?.acknowledged === true) {
                    toast.success("Account created successfully")
                    signup(email, password)
                        .then(result => {
                            const user = result.user
                            navigate(form, { replace: true })
                        }
                        )
                        .catch(e => {
                            SetError(e.message)
                        })
                }

            })

        // Post User Data-----------------------------------------



        if (!username) {
            return toast.error("Name field is required.");
        } else if (!email) {
            return toast.error("Email field is required");
        } else if (!password) {
            return toast.error("Password field is required.");
        } else if (password.length < 6) {
            return toast.error("Provide strong password more than 6 characters.");
        }
        else if (Error) {
            return toast.error("Your Password and Email in Used")
        }

    };




    return (
        <div>
            <Header />
            <section
                id="register"
                className="grid place-items-center lg:grid-cols-2 sm:h-[85vh] h-screen font-poppins"
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card flex-shrink-0 w-full rounded-md  max-w-lg mt-9"
                >
                    <div className="card-body shadow-xl" style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}>
                        <h3 className="text-xl font-poppins font-semibold">
                            SignUp Now!
                        </h3>
                        <div className='lg:flex lg:items-center lg:justify-between'>
                            {/* UserName ------------------*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input
                                    {...register("username")}
                                    type="text"
                                    placeholder="Username"
                                    className="input input-bordered bg-[#FFFFFF]"
                                    name="username"
                                />



                            </div>
                            {/* Name---------------------------- */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered bg-[#FFFFFF]"
                                    name="name"
                                />
                            </div>
                        </div>
                        {/* ------------------- */}
                        <div className='lg:flex lg:items-center lg:justify-between'>
                            {/* Email------------------------ */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered bg-[#FFFFFF]"
                                    name="email"
                                />
                            </div>
                            {/* password----------------------------- */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password")}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered bg-[#FFFFFF]"
                                    name="password"
                                />
                            </div>
                        </div>

                        {/* Gender-------------------------------- */}


                        <div className='lg:flex lg:items-center lg:justify-between'>
                            <div>
                                <span className="label-text">Gender</span>
                                <select
                                    {...register("selectdata")}

                                    className="select select-bordered w-full">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>


                            <div className='lg:ml-[120px]'>
                                <span className="label-text">Birth Date</span>
                                <ReactDatePicker
                                    className='input input-bordered bg-[#FFFFFF] w-full ' selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                        </div>

                        {/* Phone Number---------------------- */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input
                                {...register("phone")}
                                type="text"
                                placeholder="Phone"
                                className="input input-bordered bg-[#FFFFFF]"
                                name="phone"
                            />
                        </div>

                        {/* Address--------------------------------------- */}
                        <textarea
                            {...register("address")}
                            placeholder="Enter Your Address" className="textarea textarea-bordered textarea-sm rounded-md w-full" ></textarea>



                        <div className="form-control mt-6">
                            <input type='submit' value='Create An Account' className="btn  bg-[#44977B] border-none text-white hover:bg-[#44977B] shadow-md" />
                        </div>
                        <label className="label-text-alt  ">
                            Already have an Account{" "}
                            <Link
                                to="/signin"
                                className="label-text-alt link link-hover text-white font-bold"
                            >
                                Login
                            </Link>
                        </label>
                    </div>
                </form>

                <img className='mt-9 hidden lg:block' src={signuoGif} alt="" />
            </section>

        </div>
    );
};

export default Signup;