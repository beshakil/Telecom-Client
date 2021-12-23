import React from 'react';
import RouterIcon from '@mui/icons-material/Router';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import Live from '../../../Image/live.png'
import SpeedoMeter from '../../../Image/Icon/speedometer.png'
import WatchTv from '../../../Image/Icon/watch-tv.png'
import RouterOne from '../../../Image/Icon/routerOne.png'
import FullHd from '../../../Image/Icon/4k-fullhd.png'
import Planning from '../../../Image/Icon/planning.png'
import Service from '../../../Image/Icon/customer-service.png'



const BannerSecond = () => {
    return (
        <div>
            <div className="" style={{ backgroundColor: 'white' }}>
                <div className="grid grid-cols-1 md:grid-cols-3 rounded ml-8 mr-8 md:ml-36 md:mr-36" style={{ backgroundColor: '#F4F2E9' }} >
                    <div className="flex md:border-r-2 md:border-fuchsia-600 sm:border-b-2 md:border-b-0 border-b-2">
                        <div>
                            <RouterIcon style={{ fontSize: '100px' }} className="md:m-10 m-3 pt-5 md:pt-0 text-gray-800"> </RouterIcon>
                        </div>
                        <div className="ml-3 md:ml-3 mt-10 mb-10 mr-5 md:mr-10">
                            <h2 className="text-3xl text-gray-800 font-bold pb-3">Broadband</h2>
                            <p className="pb-3 text-gray-800">Over 200 entertainment channels with movies, cartoons, sport and shows</p>
                            <p className=" text-indigo-600 font-bold text-lg">from $24.99</p>
                        </div>
                    </div>
                    <div className="flex md:border-r-2 md:border-fuchsia-600 sm:border-b-2 md:border-b-0 border-b-2">
                        <div>
                            <ConnectedTvIcon style={{ fontSize: '100px' }} className="md:m-10 m-3 pt-5 md:pt-0 text-gray-800"> </ConnectedTvIcon>
                        </div>
                        <div className="ml-3 md:ml-3 mt-10 mb-10 mr-5 md:mr-10">
                            <h2 className="text-3xl text-gray-800 font-bold pb-3">Satellite TV</h2>
                            <p className="pb-3 text-gray-800">Unlimited high speed internet for the whole family and devices</p>
                            <p className=" text-indigo-600 font-bold text-lg">from $24.99</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <MobileScreenShareIcon style={{ fontSize: '100px' }} className="md:m-10 m-3 pt-5 md:pt-0 text-gray-800"> </MobileScreenShareIcon>
                        </div>
                        <div className="ml-3 md:ml-3 mt-10 mb-10 mr-5 md:mr-10">
                            <h2 className="text-3xl text-gray-800 font-bold pb-3">Mobility</h2>
                            <p className="pb-3 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum.</p>
                            <p className=" text-indigo-600 font-bold text-lg">from $24.99</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-fuchsia-600">
                <div className="grid grid-cols-1 md:grid-cols-2 rounded ml-8 mr-8 md:ml-26 md:mr-26 pt-5 md:pt-20 pl:5 md:pl-20 pr-0 md:pr-20 pb-5 md:pb-10 gap-8 ">
                    <div className="pl-0 md:pl-10">
                        <div>
                            <h1 className="md:text-5xl text-4xl font-bold text-gray-800 pb-5 md:pb-10 pt-5 md:pt-16"> <span className=" text-indigo-600">Live Sport </span> and TV-shows for best friends</h1>
                        </div>
                        <p className="text-gray-800 pb-5 text-lg">Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis turpis et gravida interdum. Nulla facilisi. Pellentesque imperdiet, sem et commodo interdum, justo velit sagittis metus erat sed purus.</p>
                        <div className="flex pb-10 md:pb-16 pt-5 md:pt-10">
                            <p className="text-lg text-gray-800"> <span className=" text-indigo-600 text-2xl font-bold">4K</span> Ultra HD Quality</p>
                            <p className="text-lg text-gray-800 ml-24"> <span className=" text-indigo-600 text-2xl font-bold">200+</span> Online Channels</p>
                        </div>
                        <div className="">
                            <button className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                <span className="pt-3 pb-3 md:pl-10 md:pr-10">Read More</span>
                            </button>
                        </div>
                    </div>
                    <div className=" pr-0 md:pr-10">
                        <img src={Live} alt="" className="p-0 md:p-5" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 rounded ml-8 mr-8 md:ml-26 md:mr-26 pt-5 md:pt-5 pl:5 md:pl-20 pr-0 md:pr-20 pb-5 md:pb-10 gap-8">

                <div className="text-center">
                    <div className="pt-5">
                        <img src={SpeedoMeter} alt="" className="w-24 h-24 m-auto" />
                    </div>
                    <p className="text-lg text-gray-800 font-bold pt-6">Ultra-speed Connection</p>
                </div>
                <div className="text-center">
                    <div className="pt-5">
                        <img src={WatchTv} alt="" className="w-24 h-24 m-auto" />
                    </div>
                    <p className="text-lg text-gray-800 font-bold pt-6">250+ World Channels</p>
                </div>
                <div className="text-center">
                    <div className="pt-5">
                        <img src={RouterOne} alt="" className="w-24 h-24 m-auto" />
                    </div>
                    <p className="text-lg text-gray-800 font-bold pt-6">Free Installation</p>
                </div>
                <div className="text-center">
                    <div className="pt-5">
                        <img src={FullHd} alt="" className="w-24 h-24 m-auto" />
                    </div>
                    <p className="text-lg text-gray-800 font-bold pt-6">4K and 8K Quality</p>
                </div>
                <div className="text-center">
                    <div className="pt-5">
                        <img src={Planning} alt="" className="w-24 h-24 m-auto" />
                    </div>
                    <p className="text-lg text-gray-800 font-bold pt-6">Flexible Tariff Plans</p>
                </div>
                <div className="text-center">
                    <div className="pt-5">
                        <img src={Service} alt="" className="w-24 h-24 m-auto" />
                    </div>
                    <p className="text-lg text-gray-800 font-bold pt-6">Fast Support 24/7</p>
                </div>

            </div>
        </div>
    );
};

export default BannerSecond;