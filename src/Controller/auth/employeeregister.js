import { Employee } from "../../Models/employeeModel.js";
import bcrypt from "bcrypt";                  

export const employeeregister = async (req, res) => {
    try {
        console.log(req.body)
        const {employee_email,password} = req.body
        const findperson=await Employee.findOne({employee_email})
        if(!findperson){
            const hashpasswword =await bcrypt.hash(password, 10);
            console.log({...req.body,password:hashpasswword}) 
            const newEmployee = await Employee({...req.body,password:hashpasswword}).save();
            res.send({ message: "Successfully registered", employee: newEmployee });
        }else{
           res.send({message:"Already email exists"})  
        }
    
    } catch (err) {
        console.log(err);
        res.send({ error: "An error occurred during registration." });
    }
};
