import { useState } from "react";

export default function ImageSlider(props){
    
    const [activeInageIndex, setActiveImageIndex] = useState(0);
    const images = props.image;
    return (
        <div className="w-[400px] h-[500px] ">
            <img src={images[activeInageIndex]} className=" w-full h-[400px] object-cover"/>
            <div className="w-full h-[100px] flex flex-row justify-center items-center gap-4">
                {
                    images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            className={`w-[80px] h-[80px] object-cover cursor-pointer ${activeInageIndex === index ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => setActiveImageIndex(index)}
                        />
                    ))
                }
            </div>

        </div>

    )
}