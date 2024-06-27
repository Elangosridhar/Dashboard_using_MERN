import { Employee } from "../../Models/employeeModel.js";
import jwt from 'jsonwebtoken';
import bcrpt from "bcrypt"; 


export const login = async (req, res) => {
    try{
        console.log(req.body)
        // const {employee_email,password} = req.body;
        const resdata=await Employee.findOne(req.body);
       if(resdata){
        
           const token = jwt.sign({employee_email:resdata.employee_email,employee_name:resdata.employee_name,role:resdata.role},"ATPRO2024")
           return res.send({message:"successfully logged in",token})
       }
       else{
        res.send({message:"Invalid email or password"})
       }
       
    }
    catch(err){
      console.log(err)

    }

};