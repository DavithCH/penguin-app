import React from 'react';
import icebg from '../photos/backgrounds/iceberg-bg.jpg';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('${icebg}')` }}
    >
      <div className="w-20 absolute flex flex-col pl-2">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/penguin-icon.png'} />
          <h2 className="uppercase font-bold text-yellow-700">penguins</h2>
        </Link>
      </div>
      <div className="w-screen h-screen flex m-auto justify-center items-center">
        <form className="bg-white bg-opacity-50 shadow-xl px-8 py-8 mb-4 rounded-md w-4/5 md:w-3/4 lg:w-1/3">
          <div className="mb-4">
            <label className="block text-dark text-md font-semibold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-dark text-md font-semibold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-dark text-md font-semibold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-dark text-md font-semibold mb-2">
              Comfirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-600 hover:bg-yellow-700  text-white mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign up
            </button>
          </div>
          <div className="flex items-center justify-center pt-2">
            <p className="text-xs text-blue-600">
              Already have an account?
              <span className="text-sm font-semibold cursor-pointer hover:text-yellow-700">
                <Link to="/signin"> sign in here</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
