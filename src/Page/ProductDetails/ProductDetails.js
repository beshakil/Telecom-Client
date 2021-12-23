import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { Alert } from '@mui/material';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const ProductDetails = () => {
    const { productId } = useParams();
    const [success, setSuccess] = useState(false)
    const { user } = useAuth();
    // const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();

    const [productDetails, setProductDetails] = useState([])
    useEffect(() => {
        fetch(`https://fast-cliffs-19766.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [productId])

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
                <div class="grid grid-cols-1 md:grid-cols-2 sm:gap-0 md:gap-10 container mx-auto p-10 mt-5 mb-5 ">
                    <div className="content flex flex-wrap content-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-0 md:gap-8 ">
                            <div className="">
                                <div>
                                    <img src={`data:image/png;base64,${productDetails?.image}`} alt="" ></img>
                                </div>
                            </div>
                            <div className="text-left p-5 flex flex-wrap content-center">
                                <div className="">
                                    <h3 className="text-2xl pb-3 m-0 font-bold text-gray-800 hover:text-indigo-600">{productDetails.title}</h3>
                                    <p className="text-md pb-3 text-gray-800">{productDetails.description}</p>
                                    <h6 className="text-2xl font-bold text-gray-800">${productDetails.price}.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" pt-6">
                            <form className=" text-center" onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("orderName", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 text-gray-600" required defaultValue={productDetails.title} />

                                <input {...register("title", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" required defaultValue={user.displayName} />

                                <input {...register("email", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" required defaultValue={user.email} />

                                <input {...register("address", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Address" required />

                                <input {...register("price", { required: true })} type="text" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" required defaultValue={productDetails.price} />

                                <input {...register("number", { required: true })} type="number" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Phone Number" required />

                                <button type="submit" className="w-80 h-9 bg-blue-500 text-sm font-semibold mt-2 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Order Now</button>
                            </form>
                            {success && <Alert severity="success">Successfully Order</Alert>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;