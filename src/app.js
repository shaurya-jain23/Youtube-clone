// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express()

dotenv.config({
    path: './env'
})

connectDB()







/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

Immediately Invoked Async Function Expression (IIAFE) approach
(async () =>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (err) => {
        console.error("Express App Error:", err);
        });
       app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
       })
    }catch(error){
        console.error("Failed to start server:", error);
        process.exit(1);
    }
})()
*/