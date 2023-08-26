import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

const CertificateVerify = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm ();
    const { isLoading, error, data } = useQuery({
        queryKey: ['admissiondata'],
        queryFn: () =>
          fetch(' https://data-rouge.vercel.app/admission').then(
            (res) => res.json(),
          ),
      })
      console.log(data);
    const onSubmit = data =>{
       
       
    };
    return (
        <div>
            <div>
                <Header />
                <Navbar />

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control ">
                      <div className='flex mx-auto h-[500px] w-[500px] mt-9'>
                        
                      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" style={{borderRadius:"0px 0px 0px 0px"}} 
                      {...register("verifydata")}
                      />
                       <input type='submit' value="Check Data" className='btn ' style={{borderRadius:"0px 5px 5px 0px"}}/>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CertificateVerify;