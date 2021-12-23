import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const navigate = useNavigate();

    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password Can Not Be Match")
            return
        }
        registerUser(loginData.email, loginData.password, navigate, loginData.name);
        console.log(loginData)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <div>
            <Header></Header>
            <div className="max-w-sm mx-auto rounded shadow-lg md:max-w-md my-10 p-6 pb-10 bg-gray-100">
                <div className=" flex justify-center border-b border-gray-300">
                    <h1 className="font-bold text-lg pb-1">Register New User</h1>
                </div>
                <div className=" pt-6">
                    {!isLoading && <form className=" text-center" onSubmit={handRegisterSubmit}>
                        <input onChange={handleOnBlur} type="text" name="name" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 text-gray-600" placeholder="Enter Your Full Name*" required />

                        <input onChange={handleOnBlur} type="email" name="email" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="E-mail*" required />

                        <input onChange={handleOnBlur} type="password" name="password" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Password*" required />

                        <input onChange={handleOnBlur} type="password" name="password2" className="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-800 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Confirm password*" required />

                        <div className="flex justify-center">
                            <p className="text-gray-600 font-semibold pt-2 w-2/3" style={{ fontSize: '10px' }}>By clicking Agree & Join, you agree to the Website User Agreement, Privacy Policy, and Cookie Policy.</p>
                        </div>

                        <button type="submit" className="w-80 h-9 bg-blue-500 text-sm font-semibold mt-2 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Agree & Join</button>

                    </form>}
                    {isLoading && <div className="text-center"><CircularProgress /></div>}
                    {user?.email && <div className="text-center"><Alert severity="success">Your Account is a Successfully Created!</Alert></div>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </div>

                <div className="pt-3 text-center"> <span className="text-gray-600 text-xs w-2/3">Already have an account?<Link to="/login" type="button" className="text-gray-700 text-xs font-bold">Login</Link></span> </div>
                <div className="flex justify-between items-center mt-1">
                    <hr className="w-full border-gray-300" /> <span className="p-2 text-gray-400 text-xs">OR</span>
                    <hr className="w-full border-gray-300" />
                </div>
                <div className="pt-2">
                    <p className="text-gray-700 font-bold pb-2 pl-1" style={{ fontSize: '10px' }}>You can also login with: </p>
                    <div className="flex justify-between items-center">
                        <button type="button" className="w-2/4 mx-1 p-2 font-bold text-white bg-blue-800 rounded focus:outline-none hover:bg-blue-900" style={{ fontSize: '12px' }}> Facebook</button>
                        <button onClick={handleGoogleSignIn} type="button" className="w-2/4 mx-1 p-2 font-bold text-white bg-red-600 rounded focus:outline-none hover:bg-red-800" style={{ fontSize: '12px' }}>Google</button>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Register;