import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header className="h-[100px] bg-blue-500 flex justify-center items-center gap-6">

            <Link to="/" className="text-white text-xl cursor-pointer hover:text-blue-300 hover:underline">
                Home
            </Link>
            <Link to="/products" className="text-white text-xl cursor-pointer hover:text-blue-300 hover:underline">
                Products
            </Link>
            <Link to="/reviews" className="text-white text-xl cursor-pointer hover:text-blue-300 hover:underline">
                Reviews
            </Link>
            <Link to="/aboutUs" className="text-white text-xl cursor-pointer hover:text-blue-300 hover:underline">
                About Us
            </Link>
            <Link to="/contactUs" className="text-white text-xl cursor-pointer hover:text-blue-300 hover:underline">
                Contact Us
            </Link>
            
        </header>
    )
}