import React from 'react';
import MyAllReview from '../MyAllReview/MyAllReview';
import MyOrder from '../MyOrder/MyOrder';

const DashboardHome = () => {
    return (
        <div>
            <MyOrder></MyOrder>
            <MyAllReview></MyAllReview>
        </div>
    );
};

export default DashboardHome;