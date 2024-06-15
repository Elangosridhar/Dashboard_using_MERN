import express from 'express';
import { deleteEmployee, getemployees, saveemployees, updateemployees } from '../Controller/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.get('/getemployees',getemployees)
employeeRouter.post('/saveemployees',saveemployees)
employeeRouter.put('/updateemployee',updateemployees)
employeeRouter.delete('/deleteemployee',deleteEmployee)
export default employeeRouter