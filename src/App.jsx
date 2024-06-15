import { useState } from 'react'

import './App.css'
import { PrimeReactProvider } from 'primereact/api';


import Approuter from './router/Approuter';
import EmployeeRegister from './Shared/EmployeeRegister/TableandModel';
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <PrimeReactProvider>
        
            <Approuter></Approuter>
            {/* <EmployeeRegister/> */}
            <Toaster position='top-right'></Toaster>
            
     </PrimeReactProvider>
  )
}

export default App
