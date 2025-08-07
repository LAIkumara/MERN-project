import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../../components/loder";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview() {

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
                        <div className=" w-[49%] h-full bg-red-500">

                        </div>

                    </div>
                    
                
            }

        </div>
    );
}