import { useState } from "react"

export default function TestPage(){

    const [count, setCount] = useState(0)

    function increment(){
        setCount (count+1)
    }

    function decrement(){
        setCount(count-1)
    }


    return(
        <div className=" w-full h-screen bg-blue-600 flex justify-center items-center" >
            <div className=" w-[500px] h-[500px] bg-amber-400 flex flex-col items-center justify-center">
            <h1 className=" text-[90px] font-bold">{count}</h1>
            <div>
                <button onClick={increment} className=" bg-blue-800 px-[50px] py-[10px] mx-[5px] text-white text-[30px]">+</button>
                <button onClick={decrement} className=" bg-blue-800 px-[50px] py-[10px] mx-[5px] text-white text-[30px]">-</button>
            </div>
            </div>


        </div>
    )
}