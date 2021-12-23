import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './HomeMovies.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import img1 from '../../../Image/Movies/img1.jpg'
import img2 from '../../../Image/Movies/img2.jpg'
import img3 from '../../../Image/Movies/img3.jpg'
import img4 from '../../../Image/Movies/img4.jpg'
import img5 from '../../../Image/Movies/img5.jpg'
import img6 from '../../../Image/Movies/img6.jpg'
import img7 from '../../../Image/Movies/img7.jpg'
import img8 from '../../../Image/Movies/img8.jpg'
import img9 from '../../../Image/Movies/img9.jpg'
import img10 from '../../../Image/Movies/img10.jpg'
import img11 from '../../../Image/Movies/img11.jpg'
import img12 from '../../../Image/Movies/img12.jpg'
import Sofa from '../../../Image/sofa.png'

import Part1 from '../../../Image/LogoPart/part1.png'
import Part2 from '../../../Image/LogoPart/part2.png'
import Part3 from '../../../Image/LogoPart/part3.png'
import Part4 from '../../../Image/LogoPart/part4.png'
import Part5 from '../../../Image/LogoPart/part5.png'
import Part6 from '../../../Image/LogoPart/part6.png'

import SwiperCore, {
    Pagination,
    Autoplay
} from 'swiper';

SwiperCore.use([Pagination, Autoplay]);


const TestSlide = () => {
    return (
        <div>
            <div className="pt-20 pb-32 md:pb-96 bg-gray-800">
                <div className="text-center text-white pb-10">
                    <p className="text-indigo-700 font-bold text-2xl pb-3"> Interesting</p>
                    <p className="font-bold text-5xl pb-3">Featured Shows</p>
                    <p className="text-lg pb-3 pl-5 md:pl-60 pr-5 md:pr-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.</p>

                </div>

                <div className="">
                    <Swiper slidesPerView={1} spaceBetween={10} loop={true}
                        autoplay={{
                            "delay": 2000,
                            "disableOnInteraction": false,
                        }}
                        pagination={{
                            "clickable": true
                        }} breakpoints={{
                            "@0.00": {
                                "slidesPerView": 1,
                                "spaceBetween": 10
                            },
                            "@0.75": {
                                "slidesPerView": 2,
                                "spaceBetween": 20
                            },
                            "@1.00": {
                                "slidesPerView": 4,
                                "spaceBetween": 20
                            },
                            "@1.50": {
                                "slidesPerView": 6,
                                "spaceBetween": 30
                            }
                        }} className="mySwiper">
                        <SwiperSlide>
                            <img src={img1} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img6} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img7} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img8} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img9} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img10} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img11} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img12} alt="" className="rounded-lg" />
                        </SwiperSlide>
                        <div><p className="mt-10"></p></div>
                    </Swiper>
                </div>
            </div>
            <div className="p-6 md:p-30 ">
                <img src={Sofa} alt="" className="m-auto -mt-28 md:-mt-80" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 justify-items-center pl-5 md:pl-20  pr-5 md:pr-20 pt-10 md:pt-20 pb-10 md:pb-20">
                <div>
                    <img src={Part1} alt="" />
                </div>
                <div>
                    <img src={Part2} alt="" />
                </div>
                <div>
                    <img src={Part3} alt="" />
                </div>
                <div>
                    <img src={Part4} alt="" />
                </div>
                <div>
                    <img src={Part5} alt="" />
                </div>
                <div>
                    <img src={Part6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TestSlide;