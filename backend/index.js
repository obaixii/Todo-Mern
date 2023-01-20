import express from "express";
import bodyParse from "body-parser";
import todoRouter from "../backend/router/todoRouter.js";
import userRouter from "../backend/router/userRouter.js";
import connectDB from "./config/dbConnection.js";
import {errorHandler} from "./middleware/errorHandler.js";
import cors from "cors"


const app = express();
// Backend Running at PORT 8000
const PORT = 8000;
// Connecting Database to Backend
connectDB();
app.use(cors({origin: 'http://localhost:3000'}))

app.use(bodyParse.json()); // Global Middleware for JSon Body parser
app.use('/v1/todos/',todoRouter); // Global Middleware for todos Routing
app.use('/v1/users/',userRouter); // Global Middleware for todos Routing




// Global Middleware for Error Handler at the end of middleware stack
app.use(errorHandler)


app.listen(PORT , ()=>{
    console.log(`The Server is listening at \x1b[33mPort ${PORT}\x1b[0m`);
    // console.log(`The Server is listening at Port ${PORT}`);
});