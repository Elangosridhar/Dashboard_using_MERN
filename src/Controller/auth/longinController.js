import { Employee } from "../../Models/employeeModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"; 


export const login = async (req,res) =>{
    try{
        console.log(req.body)
        const {employee_email,password} = req.body
        const resdata=await Employee.findOne({});
       if(resdata){
           const checkpassword =await bcrypt.compare(password, resdata.password) 
         if (checkpassword){
            const token = jwt.sign({employee_email:resdata.employee_email,employee_name:resdata.employee_name,role:resdata.role},"ATPRO2024")
            res.send({message:"successfully logged in",token:token})
        }
       else{
            res.send({message:"Invalid email or password"})
       }
    }
    else{
        res.send({message:"Invalid email or password"})
    }
       
    }
    catch(err){
      console.log(err)

    }

}