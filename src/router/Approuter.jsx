import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Core/Main/Main'
import Home from '../Module/Home'
import Login from '../Component/Login/Login'
import EmployeeRegister from '../Shared/EmployeeRegister/TableandModel'
import Employee from '../Component/Employee/Employee'



export default function Approuter() {
  return (
    <div>
        <BrowserRouter>
              <Routes>
                 <Route element={<Main/>}>
                       <Route path="/home" element={<Home/>}></Route>
                       <Route path="/Employee" element={<Employee/>}></Route>
                       <Route path="/"  element={<Login/>}></Route>
                       
                      
                 </Route>
              </Routes>

        </BrowserRouter>
    </div>
  )
}
