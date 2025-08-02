import { Link, Route, Routes } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

export default function AdminPage(){
    return(
        
        <div className="w-full h-screen flex">
            
            <div className="w-[300px] h-full bg-white border-r flex flex-col items-center text-xl gap-8">
                <span className=" text-3xl font-bold">Admin</span>
                    <Link  className="flex gap-4 pl-[70px] items-center w-full h-[50px] border-1 " to = "/admin/products"><FiShoppingBag />products</Link>
                    <Link className="flex gap-4 pl-[70px] items-center w-full h-[50px] border-1 " to = "/admin/orders"><FaCartShopping />orders</Link>
                    <Link className="flex gap-4 pl-[70px] items-center w-full h-[50px] border-1 " to = "/admin/users"><FaUser />users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full">
                    <Routes path="/*">
                            <Route path="/" element={<h1>Dashbord</h1>}></Route>
                            <Route path="/products" element={<h1>Product</h1>}> </Route>
                            <Route path="/orders" element={<h1>Order</h1>}></Route>
                            <Route path="/users" element={<h1>Users</h1>}></Route>
                    </Routes>
            </div>
                    
                    
                
        </div>
    )
}