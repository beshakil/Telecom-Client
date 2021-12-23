import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const CreateReview = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)

    const [setName] = useState('')
    const [setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        if (!image) {
            return;
        }
        const formData = new FormData()
        formData.append('name', user.displayName)
        formData.append('email', user.email)
        formData.append('description', description)
        formData.append('rating', rating)
        formData.append('image', image)

        fetch('https://fast-cliffs-19766.herokuapp.com/ratings', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <div>
                <div className="max-w-sm mx-auto rounded shadow-lg md:max-w-md my-10 p-6 pb-10 bg-gray-100">
                    <div className=" flex justify-center border-b border-gray-300">
                        <h1 className="font-bold text-lg pb-1">Create Your Review</h1>
                    </div>
                    <div className=" pt-6">
                        <form className=" text-center" onSubmit={handleSubmit}>
                            <input onChange={e => setName(e.target.value)} defaultValue={user.displayName} type="text" name="name" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 text-gray-600" placeholder="Your Name*" required />

                            <input onChange={e => setEmail(e.target.value)} defaultValue={user.email} type="email" name="email" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 text-gray-600 mt-2" placeholder="Your Name*" required />

                            <textarea onChange={e => setDescription(e.target.value)} type="text" name="description" className="block border p-2 bg-white w-full h-30 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Review Details" required />

                            <input onChange={e => setRating(e.target.value)} type="number" name="rating" min="0" max="5" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Please Input Rating 1 to 5" required />

                            <input onChange={e => setImage(e.target.files[0])} accept="image/*" type="file" name="image" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Upload Image" required />

                            <button type="submit" className="w-80 h-9 bg-blue-500 text-sm font-semibold mt-2 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Submit</button>
                        </form>
                        {success && <Alert severity="success">Successfully Add Your Rating</Alert>}
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CreateReview;