import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import useauthendication from '../../hooks/useauthendication'


export default function() {
  const {IsloggedIn} = useauthendication();
  const navigate = useNavigate();

  
 
  return (
    <div>
      <>
       <Header/>
        
           <main>
               
               <Outlet></Outlet>
           </main>
       </>
    </div>
  )
}
