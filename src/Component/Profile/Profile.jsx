import React, { useEffect, useState } from 'react';
import useauthendication from '../../hooks/useauthendication';
import Profilepage from '../../Shared/Profilepage/Profilepage';
import { getemployees } from '../../Service/Registerapi/Registerapi';

export default function Profile(props) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [type, setType] = useState('password');
    const [teamMembers, setTeamMembers] = useState([]);
    const {userdetails} = useauthendication();

    const user = userdetails();

    const fetchEmployeeDetails = async () => {
             
            const res = await getemployees();
            if (Array.isArray(res)) {
                const names = res.map(employee => employee.employee_name);
                setTeamMembers(names);
            } else {
                console.error('Unexpected response structure:', res);
            }
        
    };


    useEffect(() => {
           fetchEmployeeDetails();
    }, []);

    console.log(teamMembers)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setType(passwordVisible ? 'password' : 'text');
    };


  return (
    
   <div>
    <Profilepage passwordVisible={passwordVisible} type={type} setType={setType} teamMembers={teamMembers}  
   togglePasswordVisibility={togglePasswordVisibility} setPasswordVisible={setPasswordVisible}  user={user} userdetails={userdetails}/>
   </div>
  )
}
