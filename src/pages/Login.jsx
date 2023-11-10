import React from 'react';
import sideImage from '../assets/sideimage.png';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="flex h-screen">
            <div className="w-3/5">
                <img
                    src={sideImage}
                    alt="Log"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex-1 p-10 flex flex-col justify-center items-center">
                <div className=" mb-4">
                    <h2 className="text-5xl text-gray-600 font-bold mb-3">Login to Your account</h2>
                    <h5 className=" text-gray-400  mb-5">See what is going on with your business </h5>
                </div>
                <div className="mb-4">
                    <button className="bg-white text-gray-400 py-3 font-bold px-4 border border-gray-300 rounded shadow-md mb-7 w-full">
                        Continue with Google
                    </button>
                    <button className="bg-white text-gray-400 py-3 px-4 border border-gray-300 rounded mb-7 shadow-md w-full font-bold">
                        Continue with Facebook
                    </button>
                </div>
                <p className="text-center text-gray-400 mb-7">---------- or sign up with email ----------</p>
                <form className="w-full max-w-sm">
                    <div className="mb-7">
                        <input
                            type="email"
                            className="w-full p-4  border border-gray-300 rounded "
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            type="password"
                            className="w-full p-4 border border-gray-300 rounded mb-5 "
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <Link to='/forgotpassword' className='text-yellow-600 '>Forgot Password?</Link>
                    </div>
                    <button className="bg-yellow-600 text-white py-5 px-4 rounded w-full shadow-md">
                        Login
                    </button>

                </form>
                <div className="mt-4 text-center">
                    Don't have an account? <Link to='/register'>Create an account</Link>
                </div>
            </div>

        </div>
    );
};

export default Login;
