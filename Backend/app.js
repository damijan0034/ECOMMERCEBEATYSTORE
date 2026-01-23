import express from "express";
import cors from "cors";

const app=express();

//cors policy
app.use(cors());

//json body
app.use(express.json());

export default app;