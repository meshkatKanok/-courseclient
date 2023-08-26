import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AdmissionModal = ({ coursename, price }) => {
    const{user}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        const { name, institute, email, department, coursename, ammount, phone,roll } = data
        if (name && institute && email && department) {
            fetch('https://data-rouge.vercel.app/admissiondata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, institute, email, department, coursename, ammount, phone,roll
                })

            })
                .then(res => res.json(res))
                .then(data => {
                    if (data?.acknowledged === true) {
                        toast.success("Admission successfully complete")
                    }
                    reset()
                })
        }
        else {
            toast.error("Please fillup Form")
        }



    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal font-poppins">
                    <div className="modal-box relative">
                        <label
                            style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
                            htmlFor="my-modal-3"
                            className="btn btn-sm text-white border-none btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>

                        <div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">FullName</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name here"
                                    className="input input-bordered "
                                    {...register("name")}


                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">CourseName</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name here"
                                    className="input input-bordered "
                                    defaultValue={coursename}

                                    {...register("coursename")}

                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email here"
                                    className="input input-bordered "
                                    name="email"
                                    defaultValue={user?.email}
                                    {...register("email")}

                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Roll Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Roll here"
                                    className="input input-bordered "
                                    name="roll"
                                    {...register("roll")}

                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Institute/University/Company Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Institute/University/Company Name"
                                    className="input input-bordered "
                                    {...register("institute")}


                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Department Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder=" Enter Department Name"
                                    className="input input-bordered "
                                    {...register("department")}


                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Phone No here"
                                    className="input input-bordered "
                                    name="phone"
                                    {...register("phone")}

                                />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Paid Amount</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Paid Amount"
                                    className="input input-bordered "
                                    defaultValue={price}
                                    {...register("ammount")}

                                />
                            </div>
                            <div className="my-5">
                                <button
                                    style={{ background: 'linear-gradient(0deg, rgba(68,151,123,1) 0%, rgba(245,240,240,1) 100%)' }}
                                    className="btn btn-primary rounded-md w-full text-white border-none">
                                    Admission
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AdmissionModal;