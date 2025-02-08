"use client"
import { removeCart } from "@/lib/CartSlice"
import Port from "@/lib/Port"
import { useState } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

export default function Cart() {

    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [remarque, setRemarque] = useState('')

const submit =async (e)=>{
    e.preventDefault()
    const items = localStorage.getItem('mycrt')
    const mycrts = JSON.parse(items)
    const totalPrice = mycrts.reduce((old, mycart) => old += (mycart.product.price * mycart.quantity), 0)
 
    const data = {
        address,
        phone,
        remarque,
        totalPrice,
   
        products:mycrts
    }
    try {
        const res = await axios.get('http://localhost:3000/order', data)
       
    } catch (error) {
        console.error('Order error:', error);
    }
}

    const mycrts = useSelector(state => state.cart.products)
    const totalPrice = mycrts.reduce((old, mycart ,livresion) => old += (mycart.product.price * mycart.quantity), 0)
    let livresion = {
        alg: 200,
        beskra: 800,
        jijel: 400,
        tizy: 500,
        medea: 600
    }



    const dispatch = useDispatch()
    return (
        <>
            <section className="bg-gradient-to-t from-[#17100ae0] to-[#512f1faa] max-w-screen-2xl mx-auto  from-10% min-h-full rounded-2xl">

                <h2 className="text-3xl text-white p-3 pt-4 underline ">My Product :</h2>
                <hr className="border border-primary  max-w-screen-lg mx-4" />

                <div className="flex gap-8 max-w-screen-lg mx-8">
                    <div className="text-gray-300 mt-4 pl-3 w-2/3 ronded-3xl">

                        {

                            mycrts.map((mycrt, index) => (

                                <div className="flex justify-between border border-primary rounded-lg bg-gradient-to-t from-[#0f0e0dec] to-[#512f1faa] max-w-screen-sm p-2 m-2" key={mycrt.product.id}>

                                    <div className="flex justify-between  ">
                                        <Link className="rounded-md" href={`/fpages/product/${mycrt.product.id}`}>
                                            <img className="h-44 w-64 bg-cover rounded-lg p-2" src={mycrt.product.image} />
                                        </Link>
                                        <div className="pl-3 pt-2 ">
                                            <span className="text-xl">
                                                category   :  {mycrt.product.category}
                                            </span>
                                            <div className="pt-1.5">
                                                <h3 className="text-xl">
                                                    Product  :  {mycrt.product.name}
                                                </h3>
                                                <h3 className="pt-1.5 text-xl">
                                                    Price  :  {mycrt.product.price} Da
                                                </h3>
                                                <h3 className="pt-1.5 text-xl">Quantité: {mycrt.quantity}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="  rounded-lg  hover:text-black">

                                        <button className="rounded-full border border-primary ease-in-out duration-100 bg-yellow-800 py-1 px-2" onClick={() => dispatch(removeCart(index))}>-1</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-gradient-to-t from-[#17100ae0] to-[#512f1faa] from-10%  max-w-screen-2xl  text-xl text-gray-300  border border-primary mx-auto rounded-lg mt-6">
                        <h2 className="text-4xl text-center underline text-white italic mt-6 mb-8">*Confirm La Comonde *</h2>
                        {
                            mycrts.map(mycrt => (
                                <div key={mycrt.product.id} className="flex justify-between px-5">
                                    <h2>{mycrt.product.name} : </h2>
                                    <span>{mycrt.product.price} DA </span>
                                </div>
                            ))
                        }
                        <div className="text-center flex justify-between px-5">
                            <h2 className="text-center">livresion :</h2>
                            <span className="font-semibold text-2xl">{livresion.beskra} Da</span>
                        </div>
                        <div className="text-center flex justify-between px-5">
                            <h1 className="text-center  text-white  underline">Total Price  :  </h1>
                            <span className="font-semibold text-2xl  text-white  underline">{totalPrice}<b className="text-sm ">DA</b> </span>
                        </div>
                        <section className="flex justify-center  ">
                            <form className=" flex flex-col gap-5 p-5 rounded-2xl">


                                <hr className="borber border-primary" />
                              
                                <div className="flex justify-around gap-4">
                                    <label>Aderess : </label>
                                    <input className="text-sm p1 px-14 rounded-md bg-[#ffffff20]" type="text" name="Aderess" placeholder="Enter Youer Aderess" id="" onChange={(e)=>{setAddress(e.target.value)}}/>
                                </div>
                                <div className="flex justify-around gap-4">
                                    <label >Phone : </label>
                                    <input className="text-sm p1 px-14 rounded-md bg-[#ffffff20]" type="number" name="" placeholder="Enter Number " id=""onChange={(e)=>{setPhone(e.target.value)}} />
                                </div>
                                <div className="flex justify-around gap-4">
                                    <label >Remarque: </label>
                                    <input className="text-sm p1 px-14 rounded-md bg-[#ffffff20]" type="text" name="" placeholder="Rmurque (optionnel)" id="" onChange={(e)=>{setRemarque(e.target.value)}}/>
                                </div>
                                <div className="text-center mt-3">
                                    <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-300 px-11 rounded-md"onClick={submit}>submit</button>
                                </div>
                            </form>

                        </section>
                    </div>
                    {/* <ul class="text-white w-1/3 mt-7 border border-primary h-2/3 p-3 text-xl rounded-md space-y-4">
                        <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">$200.00</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-bold">$2.00</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">$4.00</span></li>
                        <hr class="border-primary" />
                        <h1 className="text-center">Total price  : <span className="font-semibold">{totalPrice}</span> DZD</h1>
                        <div className="text-center">
                            <Link href='/fpages/confirm' className="rounded-lg px-6 py-1.5 bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-1000">Confirm</Link>
                        </div>
                    </ul> */}

                </div>

            </section >

        </>
    )
} 