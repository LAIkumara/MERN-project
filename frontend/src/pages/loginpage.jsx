import { useState } from "react"
import axios from "axios"
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"

export default function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function login(){
        axios.post(import.meta.env.VITE_BACKEND_URI+"/users/login",{
            email: email,
            password: password
        }).then((response)=>{
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            // const token = localStorage.getItem("token")
 
            toast.success("loging successfull!")

            if(response.data.role=="admin"){
                navigate("/admin/dashbord")
            }

            else if(response.data.role == "user"){
                navigate("/user")
            }

        }).catch((error)=>{
            console.log(error)
            // alert("loging failed!")
            toast.error("logging error")
        })
        console.log(email, password)
    }

    return(
        <div className=" w-full h-screen bg-[url(./loginbg.jpg)] bg-cover bg-center flex justify-center items-center">
            <div className=" relative w-[500px] h-[500px] backdrop-blur-lg shadow-2xl rounded-3xl flex flex-col justify-center items-center">
                <span className=" text-[40px] font-bold  absolute top-[60px]"> Login</span>
                <div className="flex flex-col gap-4">
                    <div className=" flex flex-col">
                        <span className=" text-xl">Email</span>
                        <input onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        } className=" w-[350px] h-[40px] border-1 rounded-2xl p-3" type="text"/>
                    </div>
                    <div className=" flex flex-col">
                        <span className=" text-xl">Password</span>
                        <input onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        } 
                        className=" w-[350px] h-[40px] border-1 rounded-2xl p-3" type="password"/>
                    </div>
                </div>
                <button onClick={login} className=" w-[350px] h-[40px] bg-blue-600 rounded-2xl mt-[40px] text-white">Submit</button>
                <p>Don't have an account? <Link to="/register" className="text-blue-500">Sign up</Link> from here</p>
            </div>
        </div>
    )
}