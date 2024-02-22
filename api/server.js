import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from "./routes/user.route"

const app = express()
dotenv.config()

mongoose.set('strictQuery', true)

const connect = async () => {
    //mongodb connection
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connected to mongoDB!')
    } catch (error) {
        console.log(error)
    }
};


app.use("/api/users", userRoute);



app.listen(8800, () => {
    connect()
    console.log(`Server is running`)
})