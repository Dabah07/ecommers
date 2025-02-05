
"use client"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Cart from '@/componnet/pages/Cart'
import { useDispatch } from "react-redux";
import Filter from "@/componnet/Filter";
import Link from "next/link";

const Page = () => {
    const isConnected = useSelector(state => state.user.isConnected)
    const cartLength = useSelector(state => state.cart.products).length
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((response) => setProducts(response.data))
    }, [])
    return (<>
        <div className=" bg-gradient-to-t from-[#17100ae0] to-[#512f1faa]  from-10% p-4  rounded-2xl max-w-screen-2xl mx-auto">
            <div className="flex justify-end mt-4   gap-9 items-center "> 
              
                <div>
                    <Link className="text-2xl text-white" href='/fpages/cart'>Cart({cartLength})</Link>
                 
                </div>
            </div>

            <div className="mb-4 max-w-screen-lg mx-auto">
                {isConnected && <Link
                    href="/fpages/product/create"
                    className="w-full px-4 py-2 ml-32  font-serif rounded-lg text-center text-white hover:text-black bg-yellow-500  hover:bg-yellow-600 ease-in-out duration-300"
                >Add Product
                </Link>}

            </div>
            <div className="flex ml-52">
                <Filter />
            </div>
            <hr className="border-primary max-w-screen-lg ml-52" />

            <div className="grid grid-cols-4 gap-4  max-w-screen-lg mt-5 ml-52">
                {

                    products.map(product => (
                        <Cart key={product.id} product={product} />
                    ))
                }
            </div>
        </div>


    </>);
}

export default Page;