"use client"
import { removeCart } from "@/lib/CartSlice"
import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    return (
        <>

            <ul className="text-white bg-gradient-to-t from-[#130d08e0] to-[#512f1faa]  from-25%  justify-center grid grid-cols-4 ronded-3xl">
                <h2>les prodact</h2>
                {

                    products.map(product => (

                        <div className="flex flex-col gap-4 m-2 bg-gradient-to-t from-[#130d08e0] to-[#512f1faa]  from-25%" key={product.id}>
                            <div>
                                <img className="w-56 h-44 rounded-2xl" src={product.image} alt="" />
                            </div>
                            <div className="flex flex-col gap-3 text-start">
                                <h3>Name : {product.name}</h3>
                                <h3>Product : {product.price} </h3>
                                <button className="text-xs rounded-full bg-red-400 text-white py-0.5 px-2" onClick={() => dispatch(removeCart(product.id))}>Remove</button>
                            </div>
                        </div>





                    ))
                }
            </ul>
        </>
    )
}