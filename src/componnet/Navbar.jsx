"use client"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import { loginapp, logoutapp } from "@/lib/userSlice"
import { useEffect } from "react"

import Port from "@/lib/Port"



export default function Navbar() {
    
    const dispatch = useDispatch()
    const isConnected = useSelector(state => state.user.isConnected)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            Port.get('/account', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                dispatch(loginapp(response.data))
            })
        }
    }, [])
    const logout = () => {
        localStorage.removeItem('token')
        dispatch(logoutapp())
    }
    return (
        <>
           

            <header>
                <nav className="flex justify-between items-center bg-gradient-to-t from-[#130d08e0] to-[#512f1faa]  from-25%  mb-3 text-white  rounded-2xl  max-w-screen-2xl mx-auto py-2 px-6">
                {/* <div>
                    {
                        isConnected ?
                            <button className="bg-black text-white px-5 py-1" onClick={logout}>Logout</button> :
                            <Link className="bg-black text-white px-5 py-1" href="/fpages/login">Login</Link>
                    }
                </div> */}
                    <div className="flex justify-start  text-center gap-1">

                        <img
                            className="w-10 h-9"
                            src="/logo.png" alt="" />
                        <Link href='/'> <h1 className="text-2xl font-extrabold  "> Qyosk</h1></Link>
                    </div>

                    <ul className="flex space-x-12 font-serif    max-w-screen mx-28 ">
                        <li>
                            <Link href='/' >Home</Link>
                        </li>
                        <li>
                            <Link href='/fpages/product' >Product</Link>
                        </li>
                        <li>
                            <Link href='/fpages/about' >About</Link>
                        </li>
                        <li>
                            <Link href='/fpages/contact' >Contact</Link>
                        </li>
                    </ul>

                    <div className="flex space-x-4">
                        
                       {
                        !isConnected ?  <Link href='/fpages/register' className="bg-[#ffffff10] border-white px-5 text-white font-medium py-1 rounded-lg">Register</Link> : <div></div>

                       }
                        { isConnected ? <button onClick={logout} className="bg-[#f0f0f0] px-5 font-medium py-1 text-black rounded-lg">Logout</button> : 
                            <Link href='/fpages/login' className="bg-[#f0f0f0] px-5 font-medium py-1 text-black rounded-lg">Login</Link>}
                    </div>
                </nav>
            </header>




        </>
    )
}