import express from "express"
import { loginUser, registerUser,logoutUser } from "../controller/auth.controller.js"

const router=express.Router()

//REGISTER USER ROUTE
router.post("/register",registerUser)

//LOGIN USER ROUTE
router.post("/login", loginUser)

//LOGOUT USER ROUTE
router.get("/logout", logoutUser)

export default router