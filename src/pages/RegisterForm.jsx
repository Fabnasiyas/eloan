import sideImage from '../assets/sideimage.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../utils/axios';
const RegisterForm = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault(); 
    try {
      console.log(formData,'ftgyhjkldfghjk');
    
      const response = await axios.post('/registerData', formData); 
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="flex h-screen">
      <div className="w-3/5">
        <img src={sideImage} alt="Log" className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 p-10 flex flex-col justify-center items-center">
        <div className="mb-4">
          <h2 className="text-5xl text-gray-600 font-bold mb-2">
            {isOtpSent ? 'OTP Verification' : 'Register Your Account'}
          </h2>
          <h5 className="text-gray-400 mb-4">
            {isOtpSent ? 'Enter the OTP sent to your phone' : 'See what is going on with your business'}
          </h5>
        </div>
        {isOtpSent ? (
          <form className="w-full max-w-sm">
          <div className="mb-5">
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded"
              placeholder="Enter OTP"
            />
          </div>
          <div className="text-center mt-2 mb-4 text-gray-600">
            Didn't receive the OTP? <span  className="text-blue-600 cursor-pointer">Resend OTP</span>
          </div>
          <button className="bg-yellow-600 text-white py-5 px-4 rounded w-full shadow-md">
            <Link to='/twostepverification'>Verify OTP</Link>
          </button>
          
        </form>
        ) : (
          <form className="w-full max-w-sm"   onSubmit={handleFormSubmit} >
            <div className="mb-7">
              <input
                type="text"
                name='name'
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-7">
              <input
                type="email"
                name='email'
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Email"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-7">
              <input
                type="tel"
                name='phoneNumber'
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-7">
              <input
                type="password"
                name='password'
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Password"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <button
              onClick={() => setIsOtpSent(true)}
              className="bg-yellow-600 text-white py-5 px-4 rounded w-full shadow-md"
            >
              Send OTP
            </button> 
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
