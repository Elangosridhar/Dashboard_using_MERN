import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Core/Main/Main'
import Home from '../Module/Home'
import Login from '../Component/Login/Login'
import EmployeeRegister from '../Shared/EmployeeRegister/TableandModel'
import Employee from '../Component/Employee/Employee'
import ProtectedRout from '../Shared/component/ProtectedRout/ProtectedRout'
import Profile from '../Component/Profile/Profile'
import EmployeeDashboard from '../Component/EmployeeDashboard/EmployeeDashboard'



export default function Approuter() {
  return (
    <div>
        <BrowserRouter>
              <Routes>
                 <Route element={<Main/>}>
                       <Route path="/home" element={<ProtectedRout><Home/></ProtectedRout>}></Route>
                       <Route path="/Employee" element={<ProtectedRout role={['admin', 'user']}><Employee/></ProtectedRout>}></Route> 
                       <Route path="/profile" element={<Profile/>}></Route>  
                       <Route path="/Employeedashboard" element={<EmployeeDashboard/>}></Route>
                 </Route>
                 <Route path="/"  element={<Login/>}></Route>
              </Routes>

        </BrowserRouter>
    </div>
  )
}
