import express from 'express';

import authRouter from './authRoute.js';
import employeeRouter from './employeeRoute.js';


const router = express.Router();

router.use('/employees',employeeRouter)
router.use('/auth',authRouter )



export default router;