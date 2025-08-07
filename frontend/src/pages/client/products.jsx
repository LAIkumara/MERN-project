import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/loder";
import ProductCard from "../../components/productCard";
import { Route, Routes } from "react-router-dom";
import ProductOverview from "./productOverview";

export default function Products() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            axios.get(import.meta.env.VITE_BACKEND_URI + "/products")
                .then((response) => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    toast.error("Failed to fetch products");
                    console.error(error);
                });
        }},[isLoading]);
    
    return (
        <div className="w-full h-full  ">
            {
                isLoading? <Loader /> :
                <div className="w-full h-full flex flex-wrap gap-4 p-4 justify-around">
                    {
                        products.map(
                            (product) => {
                            return(
                                    <ProductCard key={product.productId} product={product}/>
                                 )
                            }
                        )
                    }
                    
                </div>
            }
        </div>

        
    );

    
}