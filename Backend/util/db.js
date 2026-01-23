import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB).then(()=>{
            console.log("Database successfully connected")
        })
    } catch (error) {
        console.log(error)
        setTimeout(DBConnection,5000)
    }
}

export default DBConnection;