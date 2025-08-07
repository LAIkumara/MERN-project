import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import uploadFile from "../../utils/mediaUpload";

export default function AddProduct() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [labelledPrice, setLabelledPrice] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState([])
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [isAvailble, setisAvailble] = useState(true);
    const [category, setCategory] = useState("cosmetics");
    const navigate = useNavigate();

    async function handleSubmit(){

        const promisesArray = [];

        for(let i = 0; i < image.length; i++) {

            const promise = uploadFile(image[i])
            promisesArray[i] = promise;
        }

        const responses = await Promise.all(promisesArray);
        console.log(responses);


        const alternateNamesArray = altNames.split(',');
        const productData = {
            productId: productId,
            name: productName,
            altNames: alternateNamesArray,
            labelledPrice: labelledPrice,
            price: price,
            image: responses,
            description: description,
            stock: stock,
            isAvailble: isAvailble,
            category: category
        };
        console.log("Product Data:", productData);

        const token = localStorage.getItem("token");

        if (token==null) {
            window.location.href = "/login";
            return;
        }

        axios.post(import.meta.env.VITE_BACKEND_URI + "/products", productData,
            {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((response) => {
            console.log("Product added successfully:", response.data);
            toast.success("Product added successfully!");
            navigate("/admin/products");


        }).catch((error) => {
            console.error("Error adding product:", error);
            toast.error("Failed to add product. Please try again.");
        });
    }

    


    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full border-2 m-10 p-10 px-[40px] flex flex-wrap justify-between gap-10 rounded-2xl">
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Product ID</label>
                    <input
                        type="text"
                        value={productId}
                        onChange={(e) => { setProductId(e.target.value); }}
                        className="w-[300px] h-[40px] pl-1 text-xl border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Product Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => { setProductName(e.target.value); }}
                        className="w-[300px] h-[40px] pl-1 text-xl border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Alt Names</label>
                    <input
                        type="text"
                        value={altNames}
                        onChange={(e) => { setAltNames(e.target.value); }}
                        className="w-[300px] h-[40px] pl-1 text-xl border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Labelled Price</label>
                    <input
                        type="number"
                        value={labelledPrice}
                        onChange={(e) => { setLabelledPrice(e.target.value); }}
                        className="w-[300px] h-[40px] pl-1 text-xl border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value); }}
                        className="w-[300px] h-[40px] pl-1 text-xl border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Image</label>
                    <input
                        multiple
                        type="file"
                        onChange={(e) => 
                            { setImage(e.target.files); }}
                        className="w-[300px] h-[40px] pl-1 text-xl border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => { setDescription(e.target.value); }}
                        className="w-[800px] h-[100px] text-xl pl-1 border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => { setStock(e.target.value); }}
                        className="w-[300px] h-[40px] pl-1 text-xl border-2 border-black rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Is Available</label>
                    <select
                        value={isAvailble}
                        onChange={(e) => { setisAvailble(e.target.value); }}
                        className="w-[300px] h-[40px] text-xl border-2 pl-1 border-black rounded-lg"
                    >
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">Category</label>
                    <select
                        value={category}
                        onChange={(e) => { setCategory(e.target.value); }}
                        className="w-[300px] h-[40px] text-xl pl-1 border-2 border-black rounded-lg"
                    >
                        <option value="cosmetics">Cosmetics</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                <div className="flex justify-center flex-row w-full">
                    <Link to="/admin/products" className="w-[200px] h-[50px] bg-white text-black border-black border-2 text-xl flex justify-center items-center rounded-lg">
                        Cancel
                    </Link>
                    <button onClick={handleSubmit} className="w-[200px] h-[50px] bg-black text-white border-2 text-xl flex justify-center items-center rounded-lg ml-5 cursor-pointer">
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}
