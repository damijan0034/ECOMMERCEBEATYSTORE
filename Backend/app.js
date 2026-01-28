import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";

const app=express();

//cors policy
app.use(cors());

//json body
app.use(express.json());

//cookie-parser
app.use(cookieParser());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

//error middleware
app.use(notFound);
app.use(errorHandler);



export default app;