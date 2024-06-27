import { Employee } from "../Models/employeeModel.js";


export const getemployees = async (req,res)=>{
    try{
        console.log(req.query)
        const response = await Employee.find({})
        res.send(response);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

export const saveemployees = async (req, res) => {
    try {
        const response = await new Employee(req.body).save();
        res.send(response);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

export const updateemployees = async (req, res) => {
  try{
    const {_id,...otherdata}=req.body;  
    const response=await Employee.findOneAndUpdate({_id},otherdata,{new:true})
    console.log(response)
    res.send({message:"Successfully updated"})
    }
   catch(e){
        console.log(e)
        res.send("error")
          }   
     };




export const deleteEmployee = async (req, res) => {
        try {
          const { _id } = req.query;
          console.log("_id",req.query);
          const response = await Employee.deleteOne({_id});
          console.log(response);
          res.send({ message: "Successfully deleted" });
        } catch (e) {
          console.log(e);
          res.send({ message: "Error deleting employee" });
        }
      };
      
  