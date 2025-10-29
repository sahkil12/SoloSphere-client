import { useLoaderData } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const JobDetails = () => {
    const { user } = useAuth()
    const job = useLoaderData()
    const [startDate, setStartDate] = useState(new Date());

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (user?.email === job.buyer.email) {
            return toast.error('Action not permitted')
        }
        const price = parseFloat(e.target.price.value);
        if (price < parseInt(job.min_price)) {
            return toast.error('Offer More or at least equal to Minimum Price')
        }
        const email = e.target.email.value;
        const comment = e.target.comment.value;
        const deadline = startDate;
        const status = 'pending'
        const category = job.category
        const title = job.title
        const jobId = job._id
        const buyer_email = job.buyer.email
        const bidData = {
            jobId, price, email, deadline, comment, status, buyer_email, category, title
        }
        // bid post
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/bid`, bidData)
            if(data.insertedId){
                toast.success('Bid Successfully send')
            }
        } catch (error) {
           toast.error(error.message);
        }
    }

    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto py-10'>
            {/* Job Details */}
            <div className='flex-1 p-6 bg-white rounded-md shadow-md md:min-h-[350px] border border-neutral-300'>
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-light text-gray-800 '>
                        Deadline: {new Date(job.deadline).toLocaleDateString()}
                    </span>
                    <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                        {job.category}
                    </span>
                </div>
                <div>
                    <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                        {job.title}
                    </h1>

                    <p className='mt-4 text-base/relaxed text-gray-600 '>
                        {job.description}
                    </p>
                    <p className='mt-4 text-sm font-bold text-gray-600 '>
                        Buyer Details:
                    </p>
                    <div className='flex items-center gap-5'>
                        <div>
                            <p className='mt-2 text-sm  text-gray-600 '>Name: {job.buyer.name}</p>
                            <p className='mt-2 text-sm  text-gray-600 '>
                                Email: {job.buyer.email}
                            </p>
                        </div>
                        <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                            <img src={job.buyer.photo} alt='' />
                        </div>
                    </div>
                    <p className='mt-3 text-lg font-bold text-gray-600 '>
                        Range: ${job.min_price} - ${job.max_price}
                    </p>
                </div>
            </div>
            {/* Place A Bid Form */}
            <section className='p-7 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[350px] border border-neutral-300'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Place A Bid
                </h2>
                {/* bid form */}
                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Price
                            </label>
                            <input
                                id='price'
                                type='number'
                                required
                                name='price'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                defaultValue={user?.email}
                                type='email'
                                required
                                name='email'
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Comment
                            </label>
                            <input
                                id='comment'
                                name='comment'
                                required
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col  '>
                            <label className='text-gray-700'>Deadline</label>
                            <DatePicker className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                            {/* Date Picker Input Field */}
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 font-semibold'
                        >
                            Place Bid
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default JobDetails;