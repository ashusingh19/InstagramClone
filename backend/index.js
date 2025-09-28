import express from "express";
import { connectDB } from "./src/db/connectdb.js";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
dotenv.config();
const app = express();
const PORT = 3000
app.use(express.json());
app.use('/api/auth',authRoutes);
const start = async() => {
try {
    await connectDB()
    app.listen(PORT,"0.0.0.0",(err,addr)=>{
        if(err){
            console.warn(err)
        }else{
            console.log(`server connected: http://localhost:${PORT}`)
        }
    })
} catch (error) {
    console.error("error,restart server",error)
}
}
app.get('/',(req,res)=>{
    res.send("hello")
})
start();