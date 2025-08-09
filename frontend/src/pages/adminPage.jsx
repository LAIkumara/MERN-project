import { Link, Route, Routes } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import ProductAdminPage from "./admin/productAdminPage";
import AddProduct from "./admin/addProduct";
import UpdateProduct from "./admin/updateProduct";
import OrdersPageAdmin from "./admin/ordersPageAdmin";

export default function AdminPage(){
    return(
        
        <div className="w-full h-screen flex">
            
            <div className="w-[300px] h-full bg-white flex flex-col items-center text-xl">
                <span className=" text-3xl font-bold m-8">Admin</span>
                <Link  className="flex gap-4 pl-[70px] items-center w-full h-[70px] text-xl border-1 " to = "/admin/products"><FiShoppingBag />products</Link>
                <Link className="flex gap-4 pl-[70px] items-center w-full h-[70px] text-xl border-1 " to = "/admin/orders"><FaCartShopping />orders</Link>
                <Link className="flex gap-4 pl-[70px] items-center w-full h-[70px] text-xl border-1 " to = "/admin/users"><FaUser />users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full">
                 <Routes path="/*">
                    <Route path="/" element={<h1>Dashbord</h1>}></Route>
                    <Route path="/products" element={<ProductAdminPage/>}/>
                    <Route path="/newProduct" element={<AddProduct/>}/>
                    <Route path="/updateProduct" element={<UpdateProduct/>}/>
                    <Route path="/orders" element={<OrdersPageAdmin/>}/>
                </Routes>
            </div>
                    
                    
                
        </div>
    )
}