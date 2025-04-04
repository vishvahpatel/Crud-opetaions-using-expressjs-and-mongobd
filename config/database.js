import mongoose from "mongoose";

import 'dotenv/config';
const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Database connected successfully"))
    .catch((error)=>{
        console.log("Error in connecting Database")
        console.log(error.message)
        process.exit(1)
    })
};

 export default dbconnect;