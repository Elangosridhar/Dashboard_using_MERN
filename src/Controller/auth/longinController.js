import { Employee } from "../../Models/employeeModel.js";
import jwt from 'jsonwebtoken';
import bcrpt from "bcrypt"; 


export const login =  async (req, res) => {
    try{
        console.log(req.body)
        const {employee_email,password} = req.body;
        const resdata=await Employee.findOne({employee_email});
       if(resdata){
           const checkpassword = await bcrpt.compare(password, resdata.password)
           console.log(checkpassword)
           if(checkpassword){
               const token = jwt.sign({employee_email:resdata.employee_email,employee_name:resdata.employee_name,role:resdata.role,date_of_birth:resdata.date_of_birth,
                employee_id:resdata.employee_id,password:resdata.password,date_of_joining:resdata.date_of_joining,phone_number:resdata.phone_number,organization_name:resdata.organization_name,
                designation:resdata.designation},"ATPRO2024")
               return res.send({message:"successfully logged in",token})
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

};