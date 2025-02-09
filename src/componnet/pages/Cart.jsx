"use client";
import { addCart } from "@/lib/CartSlice";
import Link from "next/link";
import { useDispatch,useSelector } from "react-redux";





export default function cart({ product }) {
    const isConnected = useSelector(state => state.user.isConnected)
    const dispatch = useDispatch()
    return (
        <div className="rounded-lg shadow-lg bg-[#7c746a71] border border-primary text-white block w-auto h-80 pb-5 text-justify mx-auto">
            <Link href={`/fpages/product/${product.id}`}>
                <img className=" rounded-lg object-cover p-1 w-64  h-2/3" src={product.image} alt={product.name} />
            </Link>
            <div className="p-3">
                <span className="rounded mt-10 text-sm border px-1 text-start  border-primary">
                    category: {product.category}
                </span>
                <div className="mt-1 flex justify-between items-center">
                    <h3 className="text-xl font-serif">
                        {product.name}
                    </h3>
                    <h3 className="text-xl font-serif">
                        {product.price} Da
                    </h3>
                    
                </div>
               
                <div className="flex justify-center  rounded-lg  hover:text-black bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-300">
                    <Link href='/fpages/confirm' className="w-full py-1 font-serif text-center italic px-2">
                        Shop Now
                    </Link>
                    <button className="rounded-full border border-primary hover:px-2 hover:text-xl ease-in-out duration-300 bg-yellow-800 px-1"onClick={()=>dispatch(addCart(product))}>add</button>
                </div>
            </div>
        </div>
    )
}



