import sideImage from '../assets/sideimage.png';
import { useState } from 'react';

const Twostep = () => {
  const [isOtpSent, setIsOtpSent] = useState(false); 
  const [formData, setFormData] = useState({
    otp: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Verifying OTP:', formData.otp);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSendEmail = () => {
    setIsOtpSent(true);
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/5">
        <img src={sideImage} alt="Log" className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 p-10 flex flex-col justify-center items-center">
        <div className="mb-4">
          <h2 className="text-5xl text-gray-600 font-bold mb-5">Set-up Two Factor Authentication</h2>
          <h5 className="text-gray-400 mb-7">Receive information by email to set up two-factor authentication</h5>
        </div>
        {isOtpSent ? ( 
          <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
            <div className="mb-7">
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded mt-10"
                placeholder="Enter OTP"
              />
            </div>
            <div className="text-center mt-2 mb-4 text-gray-600">
            Didn't receive the OTP? <span  className="text-blue-600 cursor-pointer">Resend OTP</span>
          </div>
            <button className="bg-yellow-600 text-white py-5 px-4 rounded w-full shadow-md">
              Verify OTP
            </button>
          </form>
        ) : (
          <form className="w-full max-w-sm">
  <button
    onClick={handleSendEmail}
    className="bg-yellow-600 text-white py-5 px-4 rounded w-full shadow-md mb-12"
  >
    Send Email
  </button>
  <button className="py-5 px-4 border rounded w-full shadow-md mb-2">Cancel</button>
  <p className="text-right text-yellow-600 ">skip</p>
</form>
        )}
      </div>
    </div>
  );
};

export default Twostep;
