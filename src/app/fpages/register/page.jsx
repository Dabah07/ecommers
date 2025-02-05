"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";


export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const router = useRouter();

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register', {
                username,
                email,
                password,
                address,
                phone: phone.toString()
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                router.push('/');
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    return (
        <>
            <div>


                <form className="flex flex-col gap-4 text-white p-5 m-10 w-1/3 border border-primary rounded-md shadow-white mx-auto bg-[#512f1f65] font-extrabold" onSubmit={submit}>
                    <h1 className="text-center rounded pt-3 text-3xl font-serif underline  "><i><b>Register</b></i></h1>
                    <hr className="border-primary"/>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-xl pl-1" htmlFor="username">UserName :</label>
                            <input
                                className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md "
                                type="text"
                                id="username"
                                placeholder="Enter name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-xl pl-1" htmlFor="email"><i>Email :</i></label>
                            <input
                                className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md "
                                type="email"
                                id="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-xl pl-1" htmlFor="password"><i>Password :</i></label>
                            <input
                                className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md "
                                type="Password"
                                id="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-xl  pl-1" htmlFor="phone">Phone :</label>
                            <input
                                className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md "
                                type="text"
                                id="phone"
                                placeholder="Enter Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-medium text-xl pl-1" htmlFor="address">Address :</label>
                            <input
                                className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md "
                                type="text"
                                id="address"
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <hr className="border-primary" />

                    <div className="w-full py-1 rounded-lg text-center text-xl hover:text-black bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-300">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}
