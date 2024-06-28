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
  const [formdata,setformData] = useState({});
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    passwordVisible? settype("password"):settype("text")
   
  };
  
  const handleChange =async (e) => {
    console.log("hellow")
    setformData({ ...formdata,...{[e.target.name]: e.target.value }});  
  };

  const login = async (e) => {
   
    console.log(formdata);
    const res = await apilogin(formdata)
    console.log(res)
    res.message=="successfully logged in"? successlogin(res):toast.error("Invalid email or password")
    
  }
      
       const successlogin =(res)=>{
             settoken(res?.token);
             toast.success(res?.message)
             navigate('/home')
      }

    
  return (
    <div>
        <Loginform setPasswordVisible={setPasswordVisible} togglePasswordVisibility={togglePasswordVisibility} passwordVisible={passwordVisible} formdata={formdata} 
        setformData={setformData} handleChange={handleChange} login={login} type={type} />
    </div>
  )
}
