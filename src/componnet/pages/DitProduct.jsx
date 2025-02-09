"use client"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Formcart from '@/componnet/pages/Formcart';
import { useSelector } from "react-redux";
import Port from "@/lib/Port";


export default function ProductDetail({ id }) {
    const isConnected = useSelector(state => state.user.isConnected)

    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await Port.get(`/product/${id}`);
                setProduct(res.data);
            } catch (error) {
                setError("Failed to load product");
                console.error("Error fetching product:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (isLoading) {
        return <div className="p-4">Loading...</div>;
    }

    if (error) {
        return (
            <div className="p-4">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            </div>
        );
    }

    if (!product) {
        return <div className="p-4">Product not found</div>;
    }

    return (
        <div className="p-4 bg-gradient-to-t from-[#130d08e0] to-[#512f1faa]  from-25%  rounded-3xl max-w-screen-2xl mx-auto">
            {isEditing ? (
                <>
                    <div className="mb-4 flex justify-end rounded">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-500 text-white px-2 "
                        >
                            x
                        </button>
                    </div>
                    <Formcart id={id} />
                </>
            ) : (
                <div className="bg-gradient-to-t from-[#130d08e0] to-[#512f1faa]  from-25% border border-primary max-w-4xl mx-auto  text-white rounded-lg shadow-lg p-6">
                    <div className="flex  items-start ">

                        {isConnected && <button
                            onClick={() => setIsEditing(true)}
                            className="w-full py-1 rounded-lg text-center text-xl hover:text-black bg-yellow-500 font-bold hover:bg-yellow-600 ease-in-out duration-300"
                        >
                            Edit Product
                        </button>}
                    </div>

                    <div className="flex justify-between gap-5 pt-4">
                        <div className="space-y-4 w-full flex flex-col">

                            <div className="flex flex-col  justify-center  shadow-white ">
                                <h1 className="text-4xl text-center font-extrabold  underline p-2   text-white ">{product.name}</h1>
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover  w-[400] h-full bg-cover rounded-lg m-auto ounded-lg"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="w-full text-justify  items-center">
                            <div className="flex  flex-col text-start  max-w-4xl pt-14 mx-auto">
                                <div className="flex gap-4">
                                    <h2 className="text-xl underline font-semibold mb-2">Price :</h2>
                                    <p className="text-2xl text-blue-600">{product.price} Da</p>
                                </div>

                                <div className="flex gap-4">
                                    <h2 className="text-xl underline font-semibold mb-2">Category :</h2>
                                    <p className="text-xl">{product.category}</p>
                                </div>

                                <div className="rounded-lg">
                                    <h2 className="text-xl underline font-semibold  ">Description</h2>
                                    <p className=" block bg-gray-400 p-2 pt-3 text-black text-xl rounded-md   text-justify ">{product.description}</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 