import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BannerSecond from '../BannerSecond/BannerSecond';
import HomeProduct from '../HomeProduct/HomeProduct';
import HomeReview from '../HomeReview/HomeReview';
import HomeService from '../HomeService/HomeService';
import MidBanner from '../MidBanner/MidBanner';
import HomeMovies from '../HomeMovies/HomeMovies'
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BannerSecond></BannerSecond>
            <HomeService></HomeService>
            <HomeReview></HomeReview>
            <MidBanner></MidBanner>
            <HomeMovies></HomeMovies>
            <HomeProduct></HomeProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;