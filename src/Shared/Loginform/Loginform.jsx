import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useauthendication from '../../hooks/useauthendication';



  
export default function Loginform(props) {
  const {IsloggedIn} = useauthendication();
  
 
   const {handleChange,togglePasswordVisibility,login,data,setdata,type,settype,passwordVisible,setpasswordVisibility } = props

  return (
    
    <div className="min-h-screen bg-cover bg-center bg-[#495057]" >
      <div className="flex items-center justify-center min-h-screen bg-opacity-50">
        <div className="w-full max-w-md p-8 space-y-8 rounded-lg bg-[#adb5bd]  shadow-2xl">
          <div className="flex justify-center">
            <h2 className="mt-6 py-3 text-3xl w-16 h-16 bg-[#495057] rounded-full text-[#adb5bd] text-center font-extrabold shadow-2xl">
              AT
            </h2>
            <h1 className="mt-6 py-3 text-3xl w-16 h-16  text-[#495057] text-center font-extrabold ">
              Pro
            </h1>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <div className="relative">
                <label  className="sr-only">
                  Email address
                </label>
                <input   name="employee_email" type="email" autoComplete="email" onChange={handleChange} required
                  className="relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500  rounded-t-md  sm:text-sm hover:border-[#495057]"
                  placeholder="Email address"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fi fi-rr-envelope"></i>
                </div>
              </div>
              <div className="relative">
                <label  className=" sr-only">
                  Password
                </label>
                <input  name="password" type={type}  autoComplete="current-password" onChange={handleChange} required
                  className="relative  w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500  rounded-b-md   sm:text-sm hover:border-[#495057]"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fi fi-rr-key"></i>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                  <i className={`fi ${passwordVisible ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} text-gray-400`}></i>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input name="remember-me" type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label  className="block ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#495057] ">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type='button' onClick={()=>login(data)} className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#495057] border border-transparent rounded-md group hover:bg-[#878a8d]">
                Sign in
              </button>
            </div>
            <div className="text-sm text-center">
             <Link to={'/'}  className="font-medium text-[#495057] ">
                Don't have an account? Sign up
              </Link> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

