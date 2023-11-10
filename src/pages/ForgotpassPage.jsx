import React, { useState } from 'react';
import sideImage from '../assets/sideimage.png';
import { Link } from 'react-router-dom';
const ForgotpassPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <div className="w-3/5">
          <img src={sideImage} alt="Log" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 p-10 flex flex-col justify-center items-center">
          <div className="mb-4">
            <h2 className="text-5xl text-gray-600 font-bold mb-5">Password Set-up</h2>
            <h5 className="text-gray-400 mb-10">Receive information by email to set up for 2-factor authentication</h5>
          </div>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️'}
              </span>
            </div>
            <div className="mb-4 relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Confirm Password"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '👁️'}
              </span>
            </div><Link to="/">
            <button className="bg-yellow-600 text-white py-5 px-4 rounded w-full shadow-md mb-4">
            Back to Login
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotpassPage;
