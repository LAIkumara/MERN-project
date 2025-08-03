import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function ProductAdminPage(){
    return(
        <div className=" w-full h-full border-2">
            <Link to={"/admin/newProduct"} className=' fixed bottom-[50px] right-[50px]'>
                < BiPlus className=' bg-blue-600 text-7xl rounded-full text-white p-4'/>
            </Link>
            
        </div>
    )
}