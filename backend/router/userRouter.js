import express, { Router } from "express";

// Import Controllers from userControllers by Developer - (Hassan Raza)

// import {
//     // userControllersList
// } from "../controller/filename.js"

const userRouter = express.Router();

userRouter.route("/users").get();

export default userRouter ; 