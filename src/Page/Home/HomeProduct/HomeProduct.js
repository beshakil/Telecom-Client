import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeProduct.css'

const HomeProduct = () => {
    const [product, setProduct] = useState([]);
    const productSlice = product.slice(0, 4)

    useEffect(() =>
        fetch('https://fast-cliffs-19766.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
        , [])

    return (
        <div style={{ backgroundColor: '#F4F2E9' }}>
            <div className="text-center pt-10 md:pt-20">
                <p className="text-xl font-bold text-indigo-800">Online Store</p>
                <p className="text-4xl md:text-5xl font-bold text-gray-800">Popular Devices</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto p-8 mt-5 mb-5">
                {productSlice.map((row) => (
                    <div className="content bg-white" key={row._id}>
                        <div className="pl-5 pt-5 pr-5">
                            <img src={`data:image/png;base64,${row?.image}`} alt=""></img>
                        </div>
                        <h3 className="text-2xl p-0 m-0 font-bold text-gray-800 hover:text-indigo-600">{row.title}</h3>
                        <p className="text-md p-3 text-gray-800">{row.description.slice(0, 75)}</p>
                        <h6 className="text-2xl pb-3 font-bold text-gray-800">${row.price}.00</h6>
                        <Link to={`/productDetails/${row._id}`}>
                            <button className="buy-1 pButton font-medium text-white bg-indigo-600 hover:bg-indigo-700 text-xl">Buy Now</button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center pb-10 md:pb-20">
                <Link to="/products"><button className="px-6 py-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700">See More Product</button></Link>
            </div>
        </div>
    );
};

export default HomeProduct;