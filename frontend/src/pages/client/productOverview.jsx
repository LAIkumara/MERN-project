import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loder";
import ImageSlider from "../../components/imageSlider";
import { addToCart, getCart } from "../../utils/cart";

export default function ProductOverview() {
const Navigate = useNavigate();
const params = useParams();
const [product, setProduct] = useState(null);
const [status, setStatus] = useState("loading");



useEffect(
    ()=>{
        if(status === "loading") {
            const token = localStorage.getItem("token");
            axios.get(import.meta.env.VITE_BACKEND_URI + `/products/${params.productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}` // Replace with your actual token
                }
            })
            .then(response => {
                setProduct(response.data);
                setStatus("success");
            })
            .catch(error => {
                setStatus("error");
                toast.error("Failed to fetch product details");
            });
            
    }
    },[status]
)



    return (
        <div className="w-full h-full flex justify-center items-center">
            {
                status == "loding" && <Loader />
            }
            {
                status == "success" && 
                    <div className="w-full h-full flex flex-row">
                        <div className="w-[49%] h-full flex flrx-col justify-center items-center">
                            <ImageSlider image={product.image}/>
                        </div>
                        <div className=" w-[49%] h-full flex flex-col items-center pt-[50px]">
                            <h1 className="text-2xl font-bold">{product.name} 
                                <span className="font-light">{product.altNames.join(" | ")}</span>
                            </h1>
                            <p className="text-lg mt-[20px]">{product.description}</p>
                            <div className="w-full flex flex-col items-center mt-[20px]">
                                {
                                    product.labelledPrice > product.price? 
                                    <div>
                                        <span className="text-red-500 text-2xl line-through">
                                            {product.labelledPrice.toFixed(2)}
                                        </span>
                                        <span className="text-green-500 text-2xl font-bold pl-2">
                                            {product.price.toLocalString}
                                        </span>
                                    </div>
                                    : <span className="text-green-500 text-2xl font-bold">
                                        {product.price.toFixed(2)}
                                        </span>
                                    
                                }
                            </div>
                            <div className="w-full flex justify-center  items-center mt-[20px] gap-[10px]">

                                <button 
                                onClick={()=>{
                                    Navigate("/checkout", { state: { items: 
                                        [{
                                            productId: product.productId,
                                            quantity: 1,
                                            name: product.name,
                                            image: product.image[0],
                                            price: product.price
                                        }]
                                     } });
                                    }
                                }className="w-[200px] h-[50px] bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer">
                                    Buy Now
                                </button>
                                
                                <button className="w-[200px] h-[50px] cursor-pointer rounded-xl shadow-2xl text-white bg-blue-600 border-[3px] border-blue-600 hover:bg-white hover:text-blue-600" onClick={
                                ()=>{
                                    addToCart(product,1)
                                    toast.success("Product added to cart")
                                    console.log(getCart())
                                }
                            } >Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                    
                
            }

        </div>
    );
}