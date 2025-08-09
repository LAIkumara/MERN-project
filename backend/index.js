import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRouter from "./routers/userRouter.js"
import jwt, { decode } from "jsonwebtoken"
import productRouter from "./routers/productRouter.js"
import dotenv from "dotenv"
import cors from "cors"
import orderRouter from "./routers/orderRouter.js"

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(
    (req, res, next)=>{
    const value =req.header("Authorization")
    if(value != null){
        const token = value.replace("Bearer ", "")
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err,decoded)=>{
                if(decoded ==null){
                    res.status(403).json({
                        message : "Unauthorized"
                    })
                }else{
                    req.user =decoded
                    next()
                }
            }
        )
    }else{
        next()
    }

})

const connectionString = process.env.MONGO_URI

mongoose.connect(connectionString).then(()=>{
    console.log("Connected to database")
}).catch(()=>{
    console.log("Database Connection is faild")
})

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/orders", orderRouter)
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
