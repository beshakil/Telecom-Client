import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

const AddNewProduct = () => {


    const [success, setSuccess] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        if (!image) {
            return;
        }
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('image', image)

        fetch('https://fast-cliffs-19766.herokuapp.com/products', {
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
            <div className="max-w-sm mx-auto rounded shadow-lg md:max-w-md my-10 p-6 pb-10 bg-gray-100">
                <div className=" flex justify-center border-b border-gray-300">
                    <h1 className="font-bold text-lg pb-1">Add New Product</h1>
                </div>
                <div className=" pt-6">
                    <form className=" text-center" onSubmit={handleSubmit}>
                        <input onChange={e => setTitle(e.target.value)} type="text" name="title" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 text-gray-600" placeholder="Product Name*" required />

                        <textarea onChange={e => setDescription(e.target.value)} type="text" name="description" className="block border p-2 bg-white w-full h-20 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Description" required />

                        <input onChange={e => setPrice(e.target.value)} type="number" name="price" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Price" required />

                        <input onChange={e => setImage(e.target.files[0])} accept="image/*" type="file" name="image" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Upload Image" required />

                        <button type="submit" className="w-80 h-9 bg-blue-500 text-sm font-semibold mt-2 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Add Product</button>
                    </form>
                    {success && <Alert severity="success">Successfully Add Your Products</Alert>}
                </div>
            </div>
        </div >
    );
};

export default AddNewProduct;