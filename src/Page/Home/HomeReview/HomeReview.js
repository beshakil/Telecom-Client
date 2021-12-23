import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard, Autoplay
} from 'swiper';
import { Rating } from '@mui/material';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const HomeReview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://fast-cliffs-19766.herokuapp.com/ratings/all')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div className="pt-10">
            <div className="pb-10">
                <div className="text-center">
                    <p className="mt-4 text-xl font-bold leading-7 text-gray-800 font-regular">
                        TESTIMONIALS
                    </p>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-800">
                        What our <span className="text-indigo-600">Clients say?</span>
                    </h3>
                </div>
            </div>

            <div className="">
                <Swiper cssMode={true} navigation={true} pagination={false} loop={false} mousewheel={true}
                    keyboard={true} className="mySwiper"
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": true
                    }}
                >
                    {review.map((row) => (
                        < SwiperSlide className="" key={row._id}>

                            <div className="flex items-center justify-center px-5 py-5 pt-20">
                                <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
                                    <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                                        <img src={`data:image/png;base64,${row?.image}`} alt="" className="mx-auto object-cover rounded-full h-20 w-20"></img>
                                    </div>
                                    <div className="w-full mb-10">
                                        <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                                            “
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                                            <Rating name="read-only" value={row?.rating} readOnly />
                                        </p>
                                        <p className="text-lg text-gray-600 dark:text-gray-100 text-center px-5">
                                            {row?.description.slice(0, 120)}
                                        </p>
                                        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                                            ”
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-md text-indigo-500 font-bold text-center">
                                            {row?.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                                            {row?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper >
            </div >
        </div>
    )
}
export default HomeReview;




















