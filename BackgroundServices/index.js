import express from "express";
import dotenv from "dotenv";
import DBConnection from "./utils/db.js";
import cron from "node-cron";

dotenv.config();

const app=express()

const PORT=process.env.PORT || 8001;

//SCHEDULED SERVICES HERE
const services=()=>{
     cron.schedule("* * * * * ",()=>{
       
    })
}
services()

app.listen(PORT,()=>{
    console.log(`Background Services running on port ${PORT}`);
    DBConnection();
})