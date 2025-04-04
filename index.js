import express from "express";
const app = express()

import 'dotenv/config';
const PORT = process.env.PORT || 4000;

app.use(express.json())

import todoRoutes from './routes/todos.js'
app.use("/api/v1",todoRoutes)


import dbconnect from "./config/database.js";
dbconnect()
app.listen(PORT,()=>{
    console.log(`server started at ${PORT} port`)
})

app.get("/", (req,res)=>{
    res.send("<h1>This is Homepage</h1>")
})