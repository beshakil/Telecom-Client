import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Services = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://fast-cliffs-19766.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="pb-20">
                <div className="text-center p-10">
                    <h1 className=" text-gray-800 text-4xl md:text-5xl lg:text-5xl font-bold">Choose your plan</h1>
                    <p className="text-gray-800 text-sm md:text-lg lg:text-lg pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-4 md:gap-10 lg:gap-10 container mx-auto pl-5 pr-5 md:pl-32 lg:pl-32 md:pr-32 lg:pr-32 mt-5 mb-5">
                    {service.map((row) => (
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
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Services;