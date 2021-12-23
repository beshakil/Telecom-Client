import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="bg-gray-800">
            <div className="globalBg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 pb-10">
                    <div className="ml-5 md:ml-32 pt-6 text-white">
                        <p className="text-2xl ">Want to know about our offers first?</p>
                        <p className="text-4xl"> Subscribe our newsletter</p>
                    </div>

                    <div className="ml-5 md:ml-0 mr-5 md:mr-32">
                        <div className="flex justify-center pt-10 pb-5">
                            <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                            <button className="px-8 rounded-r-lg text-white font-bold p-4 bg-indigo-600 hover:bg-indigo-700 border-t border-b border-r">Get Started</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-white text-center p-5">
                        <p className="text-5xl font-bold pb-5">Classic Telecom</p>
                        <p className="text-xl">Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. </p>
                        <p className="text-xl pb-3"> Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.</p>
                    </div>
                    <div className="pb-10">
                        <div className="flex justify-center">
                            <FacebookIcon style={{ fontSize: '50px' }} className="text-white" />
                            <InstagramIcon style={{ fontSize: '50px' }} className="text-white ml-5" />
                            <YouTubeIcon style={{ fontSize: '50px' }} className="text-white ml-5" />
                            <TwitterIcon style={{ fontSize: '50px' }} className="text-white ml-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;