import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Core/Main/Main'
import Home from '../Module/Home'
import Login from '../Component/Login/Login'
import EmployeeRegister from '../Shared/EmployeeRegister/TableandModel'
import Employee from '../Component/Employee/Employee'
import ProtectedRout from '../Shared/component/ProtectedRout/ProtectedRout'



export default function Approuter() {
  return (
    <div>
        <BrowserRouter>
              <Routes>
                 <Route element={<Main/>}>
                       <Route path="/home" element={<ProtectedRout><Home/></ProtectedRout>}></Route>
                       <Route path="/Employee" element={<ProtectedRout><Employee/></ProtectedRout>}></Route>
                       
                       
                      
                 </Route>
                 <Route path="/"  element={<Login/>}></Route>
              </Routes>

        </BrowserRouter>
    </div>
  )
}
