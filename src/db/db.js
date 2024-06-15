import mongoose from "mongoose"
const db = mongoose.createConnection("mongodb://localhost:27017/ATPro-Submission");
db.once('open',() => console.log("DB successfully connected"));
db.on('error',(err)=>console.log(`Db not connected:${err.message}`));

export default db;