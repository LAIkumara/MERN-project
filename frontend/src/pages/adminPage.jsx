import { Route, Routes } from "react-router-dom"

export default function AdminPage(){
    return(
        <>
        <div className="w-full h-screen bg-red-900 flex">
            <div className="w-[300px] h-full bg-white"></div>
            <div className="w-[calc(100%-300px)] bg-blue-900 h-full ">
                <Routes path="/*">
                    <Route path="/" element={<h1>Dashbord</h1>}></Route>
                    <Route path="/products" element={<h1>Product</h1>}></Route>
                    <Route path="/orders" element={<h1>Order</h1>}></Route>
                </Routes>
            </div>    
        </div>
        </>
    )
}