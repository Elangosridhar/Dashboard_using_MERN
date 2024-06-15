import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './Routes/index.js';
const app = express();
app.use(cors(
    {origin:["http://localhost:5173","http://localhost:5176", " http://localhost:8000"]}
))
app.use(express.json())
app.use(morgan('tiny'))
app.get('/',(req,res) => res.send("Hello Server!"))
app.use(router) 
      
    


export default app;