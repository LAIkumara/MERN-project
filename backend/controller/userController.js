import User from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export function createUser(req, res){

    const passwordHash = bcrypt.hashSync(req.body.password, 10)

    const userData={
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : passwordHash,
        phone : req.body.phone
    }
    const user = new User(userData)
    user.save().then(()=>{
        res.json({
            message: "Successfully create a user"
        })
    }).catch(()=>{
        res.json({
            message: "Faild to user created"
        })
    })
}

export function getUsers(req, res){
    User.find().then((users)=>{
        res.json(users)
            
        console.log("Successfully fetch users")
    }).catch(()=>{
        res.json({
            message: "Failed to fetch users"
        })
    })
}

export function loginUser(req,res){
    const email = req.body.email
    const password = req.body.password

    User.findOne({
        email: email
    }).then((user)=>{
        if(user == null){
            res.status(404).json({
                message : "User not found"
            })
            //return;
        }else{
            const isPasswordCorrect = bcrypt.compareSync(password, user.password)
            if(isPasswordCorrect){
                const token = jwt.sign(
                    {
                        email : user.email,
                        firstname : user.firstname,
                        lastname : user.lastname,
                        role : user.role,
                        isblocked :user.isblocked,
                        isEmailVerified : user.isEmailVerified,
                        image : user.image
                    },
                    process.env.JWT_SECRET
                )
                res.json({
                    token : token,
                    message : "Login successful"
                })

            }else{res.status(403).json({
                message: "Incorrect Password"
            })}
            
        } 
    })
}

export function isAdmin(req){
    if(req.user == null){
        return false
    }
    if(req.user.role == "admin"){
        return true;
    }else{
        return false;
    }
}