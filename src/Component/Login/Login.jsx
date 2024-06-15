import React, { useState } from 'react'
import Loginform from '../../Shared/Loginform/Loginform';
import { useNavigate } from 'react-router-dom';
import { apilogin } from '../../Service/Loginapi/Loginapi';
import toast from 'react-hot-toast';
import useauthendication from '../../hooks/useauthendication';

export default function Login() {
  const {settoken} = useauthendication();
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [type, settype] = useState("password");
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    passwordVisible? settype("password"):settype("text")
   
  };
  const [data,setdata] = useState("")
  const handleChange = (e) => {
    setdata({...data,[e.target.name]:e.target.value});
  }
  const login = async (e) => {
   
    console.log(data);
    const res = await apilogin(data)
    console.log(res)
    res.message=="successfully logged in"? successlogin(res):toast.error("failed to registered")
    
  }
      
       const successlogin =(res)=>{
             settoken(res?.token);
             toast.success(res?.message)
             navigate('/home')
      }

    
  return (
    <div>
        <Loginform setPasswordVisible={setPasswordVisible} togglePasswordVisibility={togglePasswordVisibility} passwordVisible={passwordVisible} data={data} 
        setdata={setdata} handelchange={handleChange} login={login} type={type} />
    </div>
  )
}
