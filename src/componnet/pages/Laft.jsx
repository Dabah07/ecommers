import Link from "next/link"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function Laft() {
    const isConnected = useSelector(state => state.user.isConnected)
   
    return (
        <>
            <main className="flex flex-col gap-4 ">
                <div>
                    {isConnected && <Link
                        href="/fpages/product/create"
                        className=" px-4 py-1.5 pb-1 font-serif rounded-lg text-center text-white hover:text-black bg-yellow-500  hover:bg-yellow-600 ease-in-out duration-300"
                    >
                        Add Product
                        <hr className="border border-primary mt-1" />
                    </Link>}
                   
                </div>
                <div className="text-white text-xl ">
                    <ul className="flex flex-col underline pt-5 pl-3 gap-4">
                        <li>* Accessoires</li>
                        <li>* Bijoux</li>
                        <li>* Dachbored</li>
                        <li>* Order</li>

                    </ul>

                </div>
            </main>


        </>
    )
}