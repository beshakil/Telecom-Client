import { Alert } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://fast-cliffs-19766.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="max-w-sm mx-auto rounded shadow-lg md:max-w-md my-10 p-6 pb-10 bg-gray-100">
                <div className=" flex justify-center border-b border-gray-300">
                    <h1 className="font-bold text-lg pb-1">Add New Product</h1>
                </div>
                <div className=" pt-6">
                    <form className=" text-center" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("serviceName", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 text-gray-600" placeholder="Service Name*" required />

                        <input {...register("title", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Title" required />

                        <input {...register("feOne", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Feature One" required />

                        <input {...register("feTwo", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Feature Two" required />

                        <input {...register("feThree", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Feature Three" required />

                        <input {...register("feFour", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Feature Four" required />

                        <input {...register("price", { required: true })} type="number" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Price" required />

                        <button type="submit" className="w-80 h-9 bg-blue-500 text-sm font-semibold mt-2 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Add Services</button>
                    </form>
                    {success && <Alert severity="success">Successfully Add Your Service</Alert>}
                </div>
            </div>
        </div>
    );
};

export default AddNewService;