"use client"

import Laft from "@/componnet/pages/Laft"
import Filter from "@/componnet/Filter"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
export default function page(){
    const cartLength = useSelector(state => state.cart.products).reduce((old, mycart) => old += mycart.quantity, 0)
    return(
        <>
      <main className="bg-gradient-to-t from-[#17100ac4] to-[#512f1faa] from-25% p-4 rounded-2xl max-w-screen-2xl mx-auto flex gap-5">
            <div className=" w-2/8 mt-3 text-start">
                <Laft />
            </div>
            <div className=" ">
                <div className="flex justify-between mt-2">
                    <Filter />
                    <div className="flex mb-1 gap-2 border border-primary rounded-md px-3">

                        <Link className="text-xl  text-white" href='/fpages/cart'> My Product : [ {cartLength} ]</Link>

                    </div>
                </div>
                <hr className="border-primary max-w-screen-lg" />

                <div className="grid grid-cols-4 gap-4  max-w-screen-lg mt-5 ">
                    {

                       
                    }
                </div>
            </div>

        </main>
        </>
    )
}