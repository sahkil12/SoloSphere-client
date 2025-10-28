import { useState } from "react";
import useAuth from "../Auth/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateJobs = () => {
    const job = useLoaderData()
    const { user } = useAuth()
    const [startDate, setStartDate] = useState(new Date(job.deadline)) || new Date();
    const navigate = useNavigate()

    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.job_title.value
        const email = form.email.value
        const category = form.category.value
        const min_price = parseInt(form.min_price.value)
        const max_price = parseInt(form.max_price.value)
        const description = form.description.value
        const deadline = startDate

        const jobData = {
            title, category, min_price, max_price, deadline, description, buyer: {
                email,
                name: user.displayName,
                photo: user.photoURL
            }
        }
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/job/${job._id}`, jobData)
            if (data.modifiedCount) {
                toast.success('Update Your Data Successfully')
                navigate('/myPostedJobs')
            }
            console.log(data);
        }
        catch (error) {
            toast.error(error.message);
        }

    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12 p-2'>
                    <section className='p-3 md:p-6 bg-base-200 border-2 border-neutral-300 rounded-md shadow-md w-full md:w-4/5 xl:w-4/6'>
                        <h2 className='text-2xl border-b pb-4 border-neutral-400 font-semibold text-gray-700 capitalize mb-8 text-center'>
                            Update Job
                        </h2>
                        {/* form */}
                        <form onSubmit={handleUpdate}>
                            <div className='grid grid-cols-1 gap-5 mt-4 md:grid-cols-2'>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                        Job Title
                                    </label>
                                    <input
                                        name='job_title'
                                        defaultValue={job.title}
                                        required
                                        type='text'
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                                    />
                                </div>
                                {/* email */}
                                <div>
                                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                                        Email Address
                                    </label>
                                    <input
                                        defaultValue={user.email}
                                        readOnly
                                        type='email'
                                        name='email'
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700'>Deadline</label>
                                    <DatePicker className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    {/* Date Picker Input Field */}
                                </div>
        
                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700 ' htmlFor='category'>
                                        Category
                                    </label>
                                    <select
                                        name='category'
                                        id='category'
                                        className='border p-2 rounded-md'
                                        defaultValue={job.category}
                                    >
                                        <option value='Web Development'>Web Development</option>
                                        <option value='Graphics Design'>Graphics Design</option>
                                        <option value='Digital Marketing'>Digital Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='min_price'>
                                        Minimum Price
                                    </label>
                                    <input
                                        name='min_price'
                                        required
                                        type='number'
                                        defaultValue={job.min_price}
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
        
                                <div>
                                    <label className='text-gray-700 ' htmlFor='max_price'>
                                        Maximum Price
                                    </label>
                                    <input
                                        name='max_price'
                                        type='number'
                                        defaultValue={job.max_price}
                                        required
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <label className='text-gray-700 ' htmlFor='description'>
                                    Description
                                </label>
                                <textarea
                                    required
                                    defaultValue={job.description}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    name='description'
                                    id='description'
                                ></textarea>
                            </div>
                            <div className='flex justify-end mt-6'>
                                <button className='font-bold py-3 leading-5 text-white transition-colors duration-200 transhtmlForm bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600 w-full'>
                                    Update Job
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
    );
};

export default UpdateJobs;