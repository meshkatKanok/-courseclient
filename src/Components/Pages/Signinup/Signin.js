import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import loginImg from '../../asset/gif/login.gif'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Sppiner from '../../Sppner/Sppiner';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Signin = () => {
  const { signin, loading } = useContext(AuthContext)
  const [Error, setError] = useState('')
  const [password, setPassword] = useState("")
  const [visible, setvisible] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state?.from?.pathname || '/';
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    const {
      email,
      password } = data;

    signin(email, password)
      .then(result => {
        const user = result.user
        toast.success("Login Successfully")
        navigate(form, { replace: true })
      })
      .catch(e => {
        setError(e.message)
      })
    if (!email) {
      return toast.error("Email field is required");
    }
    else if (!password) {
      return toast.error("Password field is required.");
    }
    else if (password.length < 6) {
      return toast.error("Provide strong password more than 6 characters.");
    }
    else if (Error) {
      return toast.error("incorrect Password")
    }
  }
  if (loading) {
    return <Sppiner />
  }
  return (
    <div>
      <Header />
      <section
        id="login"
        className="grid place-items-center lg:grid-cols-2 sm:h-[85vh] h-screen font-poppins"
      >
        <form
          style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 w-full rounded shadow-xl  max-w-sm"
        >
          <div className="card-body">
            <h3 className="text-lg font-poppins font-semibold">
              Login Now!
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className='input input-bordered'>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Email"
                  className="border-none h-full w-full focus:outline-none"
                  name="email"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className='input input-bordered flex  items-center'>
                <input
                  type={visible ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password"
                  className="h-full border-none focus:outline-none w-full"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div onClick={() => setvisible(!visible)}>
                  {
                    visible ? <FaEye /> : <FaEyeSlash />
                  }
                </div>
              </div>
              {
                Error && <label className="label">
                  <Link to='/forget' className="label-text-alt link link-hover text-white">Forgot password?</Link>
                </label>
              }
            </div>
            <div className="form-control mt-6">
              <input type='submit' value='Login' className="btn  bg-[#44977B] border-none text-white hover:bg-[#44977B] shadow-md" />
            </div>
            <label className="label-text-alt  ">
              New Account?{" "}
              <Link
                to="/signup"
                className="label-text-alt link link-hover text-white font-bold"
              >
                Create An Account
              </Link>
            </label>
          </div>
        </form>

        <img className='hidden lg:block' src={loginImg} alt="" />
      </section>
    </div>
  );
};

export default Signin;