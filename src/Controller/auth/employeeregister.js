import { Employee } from "../../Models/employeeModel.js";
import bcrypt from "bcrypt";                  

export const employeeregister = async (req, res) => {
    try {
        const {employee_email,password} = req.body
        const findperson=await Employee.findOne({employee_email})
        if(!findperson){
            const hashpasswword =await bcrypt.hash(password, 10);
            console.log(hashpasswword)
            const newEmployee = await Employee(req.body).save();
            res.send({ message: "Successfully registered", employee: newEmployee });
        }else{
           res.send({message:"Already email exists"})  
        }
    
    } catch (err) {
        console.log(err);
        res.send({ error: "An error occurred during registration." });
    }
};
