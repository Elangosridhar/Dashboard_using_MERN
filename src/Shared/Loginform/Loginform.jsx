import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useauthendication from '../../hooks/useauthendication';




  
export default function Loginform(props) {
  const {IsloggedIn} = useauthendication();
  
 
   const {handleChange,togglePasswordVisibility,login,data,setdata,type,settype,passwordVisible,setpasswordVisibility } = props

  return (
    
    <div className=" bg-[#701a75]  h-screen flex justify-center items-center backdrop-blur">
      <div className=" bg-[#7c3aed] bg-opacity-30  rounded-lg shadow-2xl flex overflow-hidden backdrop-blur">
        <div className="hidden md:block md:w-1/2">
          <img src="src/assets/img/loginimg.avif" alt="login illustration" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-10">
        <div className="flex justify-center">
            <h2 className=" py-3 text-3xl w-16 h-16 bg-[#d946ef] rounded-full text-[#701a75] text-center font-extrabold shadow-2xl">
              AT
            </h2>
            <h1 className=" py-3 text-3xl w-16 h-16  text-[#d946ef] text-center font-extrabold ">
              Pro
            </h1>
          </div>
          <form>
            <div className="mb-4">
              <label  className="block text-[#7dd3fc] mb-2">Email</label>
              <input  name="employee_email"  type="email" autoComplete="email" onChange={handleChange} required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
            <div className="mb-4 relative">
              <label  className="block text-[#7dd3fc] mb-2">Password</label>
              <input  name="password"  type={type} autoComplete="current-password"
                onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 pt-5 cursor-pointer" onClick={togglePasswordVisibility}>
                <i className={`fi ${passwordVisible ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} text-gray-400`}></i>
              </div>
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-[#7dd3fc] hover:underline">Forgot Password?</a>
            </div>
            <button
              type="button"
              onClick={() => login(data)}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#d946ef] border border-transparent rounded-md group hover:bg-[#878a8d]">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

