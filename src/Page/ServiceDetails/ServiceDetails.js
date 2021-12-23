import CheckIcon from '@mui/icons-material/Check';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './ServiceDetails.css'
import { Alert } from '@mui/material';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [success, setSuccess] = useState(false)
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch(`https://fast-cliffs-19766.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [serviceId])



    const onSubmit = data => {

        const orderData = {
            ...data,
            status: "pending"
        }
        console.log(orderData);

        axios.post('https://fast-cliffs-19766.herokuapp.com/orders', orderData)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset()
                    // navigate('/')
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-4 md:gap-10 lg:gap-10 container mx-auto pl-5 pr-5 md:pl-16 lg:pl-16 md:pr-16 lg:pr-16 mt-20 mb-5 ">
                    <div></div>
                    <div className="content" style={{ backgroundColor: 'white' }}>
                        <div className="p-5 fastBg" style={{ backgroundColor: '#F4F2E9' }}>
                            <p className=" text-indigo-600 text-lg font-bold">{serviceDetails.serviceName}</p>
                            <p className=" text-gray-800 text-3xl font-bold">{serviceDetails.title}</p>
                        </div>
                        <div className="text-left p-5">
                            <p className="text-lg pt-5 p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{serviceDetails.feOne}</span></p>
                            <p className="text-lg p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{serviceDetails.feTwo}</span></p>
                            <p className="text-lg p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{serviceDetails.feThree}</span></p>
                            <p className="text-lg p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{serviceDetails.feFour}</span></p>
                        </div>
                        <p className="text-2xl font-bold pt-3 pb-10"> <span className="text-indigo-600">${serviceDetails.price}.99</span> | month</p>
                    </div>
                    <div>
                        <div className="">
                            <div className=" pt-6">
                                <form className=" text-center" onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("orderName", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 text-gray-600" required defaultValue={serviceDetails.title} />

                                    <input {...register("title", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" required defaultValue={user.displayName} />

                                    <input {...register("email", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" required defaultValue={user.email} />

                                    <input {...register("address", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Address" required />

                                    <input {...register("price", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" required defaultValue={serviceDetails.price} />

                                    <input {...register("number", { required: true })} type="number" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Phone Number" required />

                                    <button type="submit" className="w-80 h-9 bg-blue-500 text-sm font-semibold mt-2 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Order Now</button>
                                </form>
                                {success && <Alert severity="success">Successfully Order</Alert>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;