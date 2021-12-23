import React from 'react';
import './MidBanner.css'
import RouterOne from '../../../Image/Icon/routerOne.png'

const MidBanner = () => {
    return (
        <div className="midBanner pb-20 md:pb-40 pt-10 md:pt-20">
            <div className="pl-5 md:pl-40 pr-5 md:pr-0">
                <div>
                    <h1 className="md:text-5xl text-4xl font-bold text-gray-800 pb-5 md:pb-10 pt-5 md:pt-16">Test our TV and Internet <br />
                        just for <span className=" text-indigo-600">1$ Per Month</span></h1>
                </div>
                <div className="mr-0 md:mr-96 pr-0 md:pr-96">
                    <p className="text-gray-800 pb-5 text-lg">Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis turpis et gravida interdum. Nulla facilisi. Pellentesque imperdiet, sem et commodo interdum, justo velit sagittis metus erat sed purus.</p>
                </div>
                <div className="flex pb-10 md:pb-16 pt-5 md:pt-10">
                    <img src={RouterOne} alt="" className="w-24 h-24" />
                    <p className="text-xl text-gray-800 ml-10 pt-10 font-bold">Free WiFi router included</p>
                </div>
                <div className="">
                    <button className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        <span className="pt-3 pb-3 md:pl-10 md:pr-10">Read More</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MidBanner;