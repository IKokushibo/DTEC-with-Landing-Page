import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import NDTC from '../../Images/NDTC.svg'

function UserLoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateLogin = () => {
    window.location.href  = '/user/dashboard';
  }
 

  return (
    <>
     <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="flex min-h-screen bg-green-800">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-1/2  pl-44 text-white">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-yellow-500">DTEC</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed">
            Your gateway to streamlined document management and hassle-free e-clearance solutions.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold  mb-2">For <span className="text-yellow-500">  Document Tracking, </span>  click here:</h2>
            <p className="pl-4 text-lg leading-relaxed">
              Stay on top of your documents effortlessly with our intuitive tracking system. Say goodbye to lost paperwork and hello to efficiency.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold  mb-2">For <span className="text-yellow-500"> E-Clearance Services, </span> click here:</h2>
            <p className="pl-4 text-lg leading-relaxed">
              Experience the convenience of electronic clearance processes. Say farewell to long queues and welcome a smoother, faster clearance experience.
            </p>
            <p className="pl-4 mt-4 text-lg leading-relaxed">
              We're here to make your administrative tasks easier and more efficient. Dive in and discover a world of seamless document management and clearance procedures.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <div className="flex justify-center">
              <img
                src={NDTC}
                alt="School Logo"
                className="w-24 h-24 mb-6"
              />
            </div>
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Document Tracking and E-Clearance</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="ID Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="flex justify-end mb-6">
                <a href="#" className="text-sm text-gray-500 hover:text-green-600">Forgot Password?</a>
              </div>
              <button  
                type="submit"
                onClick={navigateLogin}
                className="w-full p-3 text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLoginPage;