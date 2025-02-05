"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Formcart from '@/componnet/pages/Formcart';

export default function Create() {
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login?redirect=/fpages/product/create');
        } else {
            setIsConnected(true);
        }
        setIsLoading(false);
    }, [router]);

    if (isLoading) {
        return <div className="p-4">Loading...</div>;
    }

    return (

        <div className="p-4">
            <div className='max-w-screen-lg mx-auto bg-[#512f1f65] p-4 rounded-lg '>
                <div className='flex justify-end'>
                    <button
                        onClick={() => router.push('/fpages/product')}
                        className=" text-white px-2 text-xl items-center bg-primary rounded"
                    >
                        x
                    </button>
                </div>
                <h1 className="text-4xl text-center text-white underline italic font-bold mb-4">Create Product</h1>
                {isConnected ? (
                    <Formcart />
                ) : (
                    <p className="text-red-500">Please log in to create a product.</p>
                )}



            </div>

        </div>
    );
}