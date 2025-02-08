"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginapp } from "@/lib/userSlice";
import Port from "@/lib/Port";

export default function login() {

    const [email, setEMAIL] = useState('')
    const [password, setPASSWORD] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/';

    const dispatch = useDispatch()

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);



        if (!email || !password) {
            setError('Please fill in all fields');
            setIsLoading(false);
            return;
        }

        try {
            const res = await Port.post('/login', { email, password });


            localStorage.setItem('token', res.data.token);
            dispatch(loginapp(res.data.user));

            router.push(redirect);

        } catch (error) {
            console.error('Login error:', error);
            setError(error.response?.data?.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>

            <form onSubmit={submit} className='flex flex-col text-white gap-4 p-5 bg-[#512f1f65] m-5 rounded-md border border-primary shadow-[#512f1f65] max-w-96 shadow-2xl mx-auto'>
                <h1 className='text-center text-3xl font-serif font-extrabold  p-2'>Qyosk</h1>
                <hr className="border-primary" />

                {error && (
                    <div className='text-red-500 text-center p-2 bg-red-50 rounded'>{error}</div>
                )}

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-start font-bold'><i><b>Email :</b></i></label>
                    <input
                        id="email"
                        className='mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md'
                        type="email"
                        placeholder='enter your email'
                        value={email}
                        onChange={(e) => setEMAIL(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='text-start font-bold'><i><b>Password :</b></i></label>
                    <input
                        id="password"
                        className='mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md'
                        type="password"
                        placeholder='*********'
                        value={password}
                        onChange={(e) => setPASSWORD(e.target.value)}
                        required
                        disabled={isLoading}
                        minLength={6}
                    />
                </div>

                <div className='text-center'>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-1 rounded-lg text-xl hover:text-black bg-yellow-500 font-bold hover:bg-yellow-600 ease-in-out duration-300"

                    >
                        <i>{isLoading ? 'Logging in...' : 'Login'}</i>
                    </button>
                </div>
            </form>
        </div>
    );
}