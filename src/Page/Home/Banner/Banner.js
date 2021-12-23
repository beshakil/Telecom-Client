import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import './Banner.css'

import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const Banner = () => {
    return (
        <div className="">
            <Swiper cssMode={true}
                navigation={true}
                pagination={true}
                loop={true}
                mousewheel={true}
                keyboard={true}
                className="mySwiper"
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": true
                }}
            >


                < SwiperSlide className="">
                    <div className="bg1">
                        <div className="md:pl-32 md:pr-32 sm:pl-8 sm:pr-8 pl-6 pr-6" >
                            <div className="pt-8 pb-8 md:pt-36 md:pb-36 sm:pt-8 sm:pb-8  md:col-span-2 col-span-1">
                                <div className="pb-5">
                                    <h1 className=" md:text-7xl sm:text-2xl text-5xl font-bold" style={{ color: '#DDC76D' }}>Your Favorite</h1>
                                    <h1 className="md:text-7xl sm:text-2xl text-5xl font-bold text-white">Show and Movies</h1>
                                </div>
                                <div className="">
                                    <p className="md:mr-96 md:pr-40 md:pb-16 pb-10 text-white text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                                <div className="">
                                    <button className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        <span className="pt-3 pb-3 md:pl-10 md:pr-10">Read More</span>
                                    </button>
                                    <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        <span className="pt-3 pb-3 md:pl-10 md:pr-10">Start Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                < SwiperSlide >
                    <div className="bg2">
                        <div className="md:pl-32 md:pr-32 sm:pl-8 sm:pr-8 pl-6 pr-6" >
                            <div className="pt-8 pb-8 md:pt-36 md:pb-36 sm:pt-8 sm:pb-8  md:col-span-2 col-span-1">
                                <div className="pb-5">
                                    <h1 className=" md:text-7xl sm:text-2xl text-5xl font-bold" style={{ color: '#DDC76D' }}>Explore Games</h1>
                                    <h1 className="md:text-7xl sm:text-2xl text-5xl font-bold text-white">For You</h1>
                                </div>
                                <div className="">
                                    <p className="md:mr-96 md:pr-40 md:pb-16 pb-10 text-white text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                                <div>
                                    <button className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        <span className="pt-3 pb-3 md:pl-10 md:pr-10">Read More</span>
                                    </button>
                                    <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        <span className="pt-3 pb-3 md:pl-10 md:pr-10">Start Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                < SwiperSlide >
                    <div className="bg3">
                        <div className="md:pl-32 md:pr-32 sm:pl-8 sm:pr-8 pl-6 pr-6" >
                            <div className="pt-8 pb-8 md:pt-36 md:pb-36 sm:pt-8 sm:pb-8  md:col-span-2 col-span-1">
                                <div className="pb-5">
                                    <h1 className=" md:text-7xl sm:text-2xl text-5xl font-bold" style={{ color: '#DDC76D' }}>World Cup</h1>
                                    <h1 className="md:text-7xl sm:text-2xl text-5xl font-bold text-white">Football Stream</h1>
                                </div>
                                <div className="">
                                    <p className="md:mr-96 md:pr-40 md:pb-16 pb-10 text-white text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                                <div>
                                    <button className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        <span className="pt-3 pb-3 md:pl-10 md:pr-10">Read More</span>
                                    </button>
                                    <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        <span className="pt-3 pb-3 md:pl-10 md:pr-10">Start Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </div >
    )
}
export default Banner;