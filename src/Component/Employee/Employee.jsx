import React, { useEffect, useState } from 'react'

import TableandModel from '../../Shared/EmployeeRegister/TableandModel'
import { Button, useDisclosure } from '@nextui-org/react';
import toast from 'react-hot-toast';

import { apiemployee, deleteemployee, getemployees, updateemployee } from '../../Service/Registerapi/Registerapi';


export default function Employee() {
    const {isOpen, onClose ,onOpen, onOpenChange} = useDisclosure();
    const [data, setData] = useState([]);
    const [keys,setkey]=useState([]);
    const [formdata, setformData] = useState();
    const [bool, setbool] = useState(false);
    const [deletepopup , setdeletepopup] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [type, settype] = useState("password");
    const [deleteid , setdeleteid] = useState();
    const [visible, setVisible] = useState(false);
    
    
    const handleopen = () =>{
      bool==false&&setformData()
      setbool(true)
      onOpen()
    }
  
    const handleChange =async (e) => {
      console.log("hellow")
      setformData({ ...formdata,...{[e.target.name]: e.target.value }});  
    };
  
    // register employee detaill api function
    const register = async (e) => {
      console.log(formdata);
      onClose()
      const res = await apiemployee(formdata)
      console.log(res)
      res.message=="Successfully registered"? sucessreg(res):toast.error( res.message)
      getallEmployeetrackings();  
    }
    
    const sucessreg = (res) =>{
        setformData();
        toast.success(res.message)
    }
  
  
  
    const getallEmployeetrackings = async ()=>{
      const res= await getemployees();
      setData(res)
      setkey([
      { header:"Employee_id",field: "employee_id" },
      { header: "Employee_name",field: "employee_name" },
      { header: "Employee_email",field: "employee_email"  },
      {header:"Password",field:"password"},
      { header: "Date_of_birth",field: "date_of_birth",  },
      { header: "Date_of_joining",field: "date_of_joining",  },
      { header: "Organization_name",field: "organization_name",  },
      { field: "role", header: "Role" },
      { field: "designation", header: "Designation" },
      { field: "team_type", header: "Team_Type" },
      { field: "phone_number", header: "Phone_Number" },
      { field: "work_status", header: "Work_status" },
      { field: "otp_access", header: "Otp_access" },
      { field: "otp_email", header: "Otp_email" },
    ])
   };
  
    useEffect(() => {
      getallEmployeetrackings();
    }, []);


    // function for serial no.
    const sno =(sidata,sirowdata)=>{
     return(  
        <div>
          {sirowdata['rowIndex']+1}.
        </div>)
    }
  
    
  
   
  // Buttons for update and delete
    const Action =(rowdata ,deletedata)=>{
      return( 
        <div className=" flex flex-between ">
          <button onClick={()=>loaddata(rowdata)}><i className="fi fi-rr-edit"></i></button>
          <button onClick={()=>{loaddelete(rowdata._id)}}  className=" px-3 text-red-500 "><i className="fi fi-rr-trash"></i></button>
        </div>)
    }
  
    const loaddata = (datas) =>{
        console.log(datas);
        handleopen();
        setbool(false);
        setformData(datas)  
    }
    // update api function
    const update = async (e) => {
        console.log(formdata);
        onClose()
        const res = await updateemployee(formdata)
        console.log(res)
        res.message=="Successfully updated"? toast.success(res.message):toast.error("failed to updated")
        getallEmployeetrackings();
        
      }
    // delete api function 
    const deletefun = async (id) => {
        const res = await deleteemployee(id)
        console.log(res);
        res.message=="Successfully deleted"? toast.success(res.message):toast.error("failed to updated")
        onClose()
        getallEmployeetrackings();
     }
  
    const loaddelete = (row) =>{
      
      setdeletepopup(true)
      console.log(deletepopup)
      setdeleteid(row)
      // deletefun(row)
      console.log(row);
      
    }
                    
                       
    // password visibility
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
      passwordVisible? settype("password"):settype("text")
     
    };

    const renderHeader = () => {
      return (
          <div className="flex justify-content-between">
              <Button className=" bg-white text-xl" onClick={handleopen}>
                   <i className="fi fi-ss-add"></i>
             </Button>
             <form action="">
                <div className="relative">
                 <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <i className="fi fi-rr-search"></i>
                 </div>
                 <input type="text" placeholder="Search" className="pl-5 pr-2 py-2 border rounded-md w-full focus:outline-none focus:ring-offset-gray-950-500 focus: ring-offset-gray-950-500"/>
                </div>
             </form>
          </div>
      );
  };




  return (
    <div>
       <TableandModel handleChange={handleChange} renderHeader={renderHeader} handleopen={handleopen} togglePasswordVisibility={togglePasswordVisibility} loaddata={loaddata} useDisclosure={useDisclosure} formdata={formdata}
       update={update} deletefun={deletefun} Action={Action} register={register} isOpen={isOpen} onOpenChange={onOpenChange} sno={sno} type={type} data={data} setdeletepopup={setdeletepopup}
        deletepopup={deletepopup} deleteid={deleteid} passwordVisible={passwordVisible}  onClose={onClose} bool={bool} setbool={setbool} key={keys} setkey={setkey} visible={visible} setvisible={setVisible}/>
    </div>
  )
}
