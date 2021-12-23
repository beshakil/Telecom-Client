import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jz5DsJNmQgm1ql8YaKMSpaXJXiFDAfwPjnZjFvStm1zxpUq3E66hi1sBFiUHDcySZkBu0An2bMZOUQZTRQOlFjR00jll7CfWD');

const Payment = () => {
    const { payId } = useParams()
    const [oderDetails, setOrderDetails] = useState({})
    useEffect(() => {
        fetch(`https://fast-cliffs-19766.herokuapp.com/orders/${payId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));

    }, [payId])
    return (
        <div className="text-center">
            <h2 className="text-3xl text-indigo-800">Dear {oderDetails.title} Sir,</h2>
            <h2 className="text-2xl pt-3 pb-3">Please Pay For: {oderDetails.orderName}</h2>
            <h4 className="text-2xl text-indigo-800 font-bold">Pay: ${oderDetails.price}</h4>

            {oderDetails?.price && <Elements stripe={stripePromise}>
                <CheckOutForm
                    oderDetails={oderDetails} />
            </Elements>}

        </div>
    );
};

export default Payment;