"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Port from "@/lib/Port";



export default function ProductForm({ id }) {

    const operation = id ? "edit" : "create";
    const router = useRouter();
    const [product, setPRODUCT] = useState({
        name: "", price: "", image: "", description: "", category: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {

        if (operation === "edit" && id) {
            Port.get(`/product/${id}`)

                .then((res) => setPRODUCT(res.data))
                .catch(err => setError("Failed to load product"));
        }
    }, [id, operation]);

    const change = (e) => {
        setPRODUCT({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const submit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('price', product.price);
            formData.append('description', product.description);
            formData.append('category', product.category);
            if (product.image instanceof File) {
                formData.append('image', product.image);
            }

            const token = localStorage.getItem('token');
            const headers = {
                'Authorization': `Bearer ${token}`
            };


            if (operation === "create") {
                const res = await Port.post('/products', formData, { headers });

            } else {
                const res = await Port.put(`/product/${id}`, formData, { headers });
            }
            router.push('/fpages/product');
        } catch (error) {
            setError(error.response?.data?.message || "Failed to save product");
        }
    }

    const deleteProduct = async () => {
        if (confirm("Are you sure you want to delete this product?")) {
            try {
                const token = localStorage.getItem('token');
                await Port.delete(`/product/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                router.push('/');
            } catch (error) {
                setError("Failed to delete product");
            }
        }
    }

    return (
        <form className="flex flex-col  gap-4 max-w-screen-md mx-auto bg-[#512f1f65] text-white shadow-2xl p-8 rounded-lg border border-primary" onSubmit={submit}>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            <div className="flex  gap-8">
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                        value={product.name}
                        onChange={change}
                        className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="category">Category</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        placeholder="Category"
                        required
                        value={product.category}
                        onChange={change}
                        className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md"
                    />
                </div>
            </div>

            <div className="flex gap-8">
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Price"
                        required
                        value={product.price}
                        onChange={change}
                        className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="image">Image</label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPRODUCT({ ...product, image: e.target.files[0] })}
                        className="border border-primary mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={change}
                    className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md"
                ></textarea>
            </div>

            <div className="text-right space-x-2">
                {id && (
                    <button
                        type="button"
                        className="bg-red-500 text-white px-5 py-1.5 rounded-lg  hover:text-black text-xl hover:bg-yellow-600 ease-in-out duration-300"
                        onClick={deleteProduct}
                    >
                        Delete
                    </button>
                )}
                <button className=" text-white px-5 py-1.5 rounded-lg text-xl  hover:text-black bg-yellow-500 font-bold hover:bg-yellow-600 ease-in-out duration-300">
                    {operation === "create" ? "Create" : "Update"}
                </button>
            </div>
        </form>
    );
}