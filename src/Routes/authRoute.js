import express from 'express';

import { login } from '../Controller/auth/longinController.js';
import { employeeregister } from '../Controller/auth/employeeregister.js';

const authRouter = express.Router();

authRouter.post('/apilogin',login) 
authRouter.post('/apiemployee',employeeregister)



export default authRouter;