import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import './HomeService.css'

const HomeService = () => {
    const [service, setService] = useState([])
    const serviceSlice = service.slice(0, 4)

    useEffect(() => {
        fetch('https://fast-cliffs-19766.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div style={{ backgroundColor: '#1F2937' }}>
                <div className="text-center p-10 pt-20">
                    <p className=" text-indigo-600 text-lg font-bold">Tariffs</p>
                    <h1 className=" text-white text-4xl md:text-5xl lg:text-5xl font-bold">Choose your plan</h1>
                    <p className="text-white text-sm md:text-lg lg:text-lg pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-4 md:gap-10 lg:gap-10 container mx-auto pl-5 pr-5 md:pl-32 lg:pl-32 md:pr-32 lg:pr-32 mt-5 mb-5">
                    {serviceSlice.map((row) => (
                        <div className="content" key={row._id} style={{ backgroundColor: 'white' }}>
                            <div className="p-5 fastBg" style={{ backgroundColor: '#F4F2E9' }}>
                                <p className=" text-indigo-600 text-lg font-bold">{row.serviceName}</p>
                                <p className=" text-gray-800 text-3xl font-bold">{row.title}</p>
                            </div>
                            <div className="text-left p-5">
                                <p className="text-lg pt-5 p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{row.feOne}</span></p>
                                <p className="text-lg p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{row.feTwo}</span></p>
                                <p className="text-lg p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{row.feThree}</span></p>
                                <p className="text-lg p-2"><CheckIcon style={{ marginTop: '-4px', marginRight: '20x', marginLeft: '5px' }} /> <span className="pl-5">{row.feFour}</span></p>
                            </div>
                            <p className="text-2xl font-bold pt-3 pb-10"> <span className="text-indigo-600">${row.price}.99</span> | month</p>

                            <Link to={`/serviceDetails/${row._id}`}>
                                <button className="buy-1 pButton font-medium text-white bg-indigo-600 hover:bg-indigo-700 text-xl">Subscribe Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-center pb-20">
                    <Link to="/services"><button className="px-6 py-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700">See More Services</button></Link>
                </div>
            </div>

            <div style={{ backgroundColor: '#1F2937' }} className="">
                <div className="globalBg pt-20 pb-20">
                    <div className="md:text-5xl text-3xl text-white font-bold text-center">
                        <h2 className="ml-5 md:ml-32 mr-5 md:mr-32"> Check ability to connect our services <br /> in your area</h2></div>
                    <div>
                        <div className="ml-5 md:ml-32 mr-5 md:mr-32">
                            <div className="flex justify-center pt-10 pb-5">
                                <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                                <button className="px-8 rounded-r-lg text-white font-bold p-4 bg-indigo-600 hover:bg-indigo-700 border-t border-b border-r">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;