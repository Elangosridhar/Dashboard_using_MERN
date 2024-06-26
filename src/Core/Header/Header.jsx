import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useauthendication from '../../hooks/useauthendication';
import Home from '../../Module/Home';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar, User} from "@nextui-org/react";

export default function Header() {
    const [selectUser, setSelectedUser] = useState(null);
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const [sign, setsign] = useState(true);
    const {IsloggedIn,gettoken,userdetails} = useauthendication();
    

    const user = userdetails();
    const employeeName = user ? user.employee_name : 'Default Name';

    // console.log(employeeName);
    console.log(userdetails());
    
    const options = [
        { name: employeeName, code:'RN'},
        { name: 'Signout', code: 'RM' },
    ]; 
   

    const handleDropdownChange = (e) => {
        // setSelectedUser(e.value);
        gettoken()
        navigate('/');
       
    };

    const handleprofileChange = (e) => {
        navigate('/profile');
    }
//   console.log(IsloggedIn)
    return (
<div>
 <header className={`${IsloggedIn?"flex":"hidden"} sticky  flex-wrap justify-start   bg-black text-sm py-4 overflow-x-hidden`}>
   <nav className="w-full mx-auto px-4 lg:flex items-center lg:justify-between" aria-label="Global">
        <div className="w-full flex justify-between items-center">
            <a className="text-xl font-semibold text-white" href="#">Research Dashboard</a>
            <div className="flex items-center lg:hidden">
                <button onClick={() => setToggle(!toggle)} aria-label="Toggle Menu" className="text-lg text-white">
                    <i className={`${toggle ? 'fi fi-br-cross-small' : 'fi fi-br-bars-staggered'}`}></i>
                </button>
            </div>
        </div>
        <div className={`${toggle? 'block' : 'hidden'} lg:flex justify-center`}>
            <ul className="flex flex-col lg:flex-row gap-9 mt-5 items-center justify-center sm:mt-0 sm:ps-5">
            <li><button className="px-4 py-1 rounded mb-1 bg-blue-500 text-white hover:bg-blue-600">Checkin</button></li>
            <li><Link to="/home"><i className="fi fi-sr-home text-white"></i></Link></li>
            <li><a href="#"><i className="fi fi-tr-circle-half-stroke text-white"></i></a></li>
            <li><a href="#"><i className="fi fi-rr-expand text-white"></i></a></li>
            <div className="flex items-center gap-4">
               <Dropdown> 
               <DropdownTrigger> 
                       <Button variant="bordered" className='text-white'>  <i className="fi fi-tr-circle-user "></i> {employeeName} </Button> 
                </DropdownTrigger>
                <DropdownMenu aria-label="Action event example" >
                     <DropdownItem onClick={handleprofileChange}>{employeeName}</DropdownItem>
                     <DropdownItem  onClick={handleDropdownChange}>LOGOUT</DropdownItem>
                </DropdownMenu>
               </Dropdown>
            </div>
                    </ul>
                </div>
            </nav>
        </header>        
        </div>
        
       
    );
}
