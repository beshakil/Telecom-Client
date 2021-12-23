import { Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Rating from '@mui/material/Rating';

const MyAllReview = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://fast-cliffs-19766.herokuapp.com/ratings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm("You would like to delete?")
        if (proceed) {
            fetch(`https://fast-cliffs-19766.herokuapp.com/ratings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSuccess(true)
                        const remaining = myReviews.filter(order => order._id !== id)
                        setMyReviews(remaining)
                    }
                })
        }
    }

    return (
        <div className="">
            <div className="container pt-5 pb-5">

                < div className="text-center" >
                    <h1 className='pb-4 text-2xl'>My Total Reviews: <span className="span"> {myReviews.length}</span></h1>
                </div >

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto p-8 mt-5 mb-5">
                    {myReviews.map((row) => (
                        <div className="content" key={row._id}>
                            <div className="pl-5 pt-5 pr-5 text-center flex items-center justify-center">
                                <img className="rounded-full h-24 w-24 " src={`data:image/png;base64,${row?.image}`} alt=""></img>
                            </div>
                            <h3 className="text-2xl pt-3 m-0 font-bold text-gray-800 hover:text-indigo-600">{row.name}</h3>
                            <p className="text-md text-gray-800">{row.email}</p>
                            <p className="text-md p-3 text-gray-800">{row.description.slice(0, 120)}</p>
                            <h4 className="pb-2"><Rating name="no-value" value={row.rating}></Rating></h4>

                            <button onClick={() => handleDelete(row._id)} className="buy-1 pButton font-medium text-white bg-red-600 hover:bg-indigo-700 text-xl">Delete Review</button>
                        </div>
                    ))}
                </div>
                {success && <Alert severity="success">Review Delete Successfully</Alert>}
            </div >
        </div >
    );
};

export default MyAllReview;