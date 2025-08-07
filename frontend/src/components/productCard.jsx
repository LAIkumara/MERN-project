import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const product = props.product;
    return (
        <Link to={"/overview/"+product.productId}  className="w-[300px] h-[400px] shadow-2xl rounded-lg overflow-hidden">
            <img src={product.image[0]} className="w-full h-[275px] object-cover" />
            <div className="p-1 flex flex-col">
                <div className=" text-emerald-700">{product.productId}</div>
                <div className=" text-xl font-bold">
                    {product.name}
                    <span className=" text-[14px] text-gray-500 pl-1">{product.category}</span></div>
                <div>
                    {product.labelledPrice > product.price ? (
                        <p>
                            <span className="text-red-500 text-2xl line-through">{product.labelledPrice}</span>
                            <span className="text-green-500 text-2xl font-bold pl-2">{product.price}</span>
                        </p>
                    ) : (
                        <span className="text-green-500 text-2xl font-bold">{product.price}</span>
                    )}
                </div>
            </div>
            
        </Link>
    )}