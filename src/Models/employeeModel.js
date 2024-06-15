// models/Employee.js
import mongoose from "mongoose";
import db from "../db/db.js";

const EmployeeSchema = new mongoose.Schema({
  employee_id: String,
  employee_name:String,
  employee_email: String,
  password:String,
  date_of_birth:String,
  date_of_joining:String, 
  organization_name: String,
  role: String,
  designation: String,
  team_type: String,
  phone_number: String,
  work_status:String,
  otp_access: String,
  otp_email: String
},{timestamps:true});

export const Employee = db.model('Employee', EmployeeSchema);
