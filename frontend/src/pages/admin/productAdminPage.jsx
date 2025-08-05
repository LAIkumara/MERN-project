import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiEdit, BiPlus, BiTrash } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/loder';

export default function ProductAdminPage(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(isLoading)
            {axios.get(import.meta.env.VITE_BACKEND_URI + "/products")
            .then((response) => {
                setProducts(response.data);
                setIsLoading(false);
            })
        }},
        [isLoading])

    const navigate = useNavigate();

    return(
        <div className=" w-full h-full border-2">
            <div className="w-full h-full border-[3px]">
                {isLoading ? (
                    <Loader />
                ) : (<table>
                    <thead>
                        <tr>
                            
                        <th className="p-2">Image</th>
                            <th className="p-2">Product ID</th>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Alt Names</th>
                            <th className="p-2">Labelled Price</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Stock</th>
                            <th className="p-2">Is Available</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                (product, index) => {
                                    return(
                                    <tr key={index}>
                                        <td>
                                            <img src={product.image[0]} alt={product.name} className="w-[50px] h-[50px]" />
                                        </td>
                                        <td className="p-2">{product.productId}</td>
                                        <td className="p-2">{product.name}</td>
                                        <td className="p-2">{product.altNames}</td>
                                        <td className="p-2">{product.labelledPrice}</td>
                                        <td className="p-2">{product.price}</td>
                                        <td className="p-2">{product.description}</td>
                                        <td className="p-2">{product.stock}</td>
                                        <td className="p-2">{product.isAvailable ? "No" : "Yes"}</td>
                                        <td className="p-2 flex justify-center items-center gap-2">
                                            <BiTrash className='text-2xl cursor-pointer text-red-600' onClick={() => {
                                                const token = localStorage.getItem("token");
                                                if (token == null) {
                                                    navigate("/login");
                                                    return;
                                                }
                                                axios.delete(import.meta.env.VITE_BACKEND_URI + "/products/" + product.productId, {
                                                    headers: {
                                                        Authorization: "Bearer " + token
                                                    }
                                                }).then((response) => {
                                                    console.log("Product deleted successfully:", response.data);
                                                    toast.success("Product deleted successfully!");
                                                    setIsLoading(!isLoading);
                                                }).catch((error) => {
                                                    console.error("Error deleting product:", error);
                                                    toast.error("Failed to delete product. Please try again.");
                                                });
                                            }} />

                                            <BiEdit onClick={()=>
                                                navigate("/admin/updateProduct/", 
                                                    {
                                                        state: product
                                                    })
                                            } className='text-2xl cursor-pointer text-blue-600 ml-3'/>
                                        </td>
                                        
                                    </tr>
                                )})
                        }
                    </tbody>
                </table>)
                    
                }
                
            </div>


            <Link to={"/admin/newProduct"} className=' fixed bottom-[50px] right-[50px]'>
                < BiPlus className=' bg-blue-600 text-7xl rounded-full text-white p-4'/>
            </Link>
            <div className="flex justify-center items-center h-[100px]">
                <h1 className="text-3xl font-bold">Product Management</h1></div>
            
        </div>
    )
}