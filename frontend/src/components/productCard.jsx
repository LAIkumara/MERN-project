import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const product = props.product;

    const labelledPrice = parseFloat(product.labelledPrice);
    const price = parseFloat(product.price);

    return (
        <Link to={"/overview/"+product.productId}  className="w-[300px] h-[400px] shadow-2xl rounded-lg overflow-hidden">
            <img src={product.image[0]} className="w-full h-[275px] object-cover" />
            <div className="p-1 flex flex-col">
                <div className=" text-emerald-700">{product.productId}</div>
                <div className=" text-xl font-bold">
                    {product.name}
                    <span className=" text-[14px] text-gray-500 pl-1">{product.category}</span></div>
                <div>
                    {labelledPrice > price ? 
                        <p>
                            <span className="text-red-500 text-2xl line-through">
                                {labelledPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                            <span className="text-green-500 text-2xl font-bold pl-2">
                                {price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </p>
                    : 
                        <span className="text-green-500 text-2xl font-bold">
                            {price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    }
                </div>
            </div>
            
        </Link>
    )}