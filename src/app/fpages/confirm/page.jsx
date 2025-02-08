"use client"
export default function confirm() {

    return (<>
        <section className="bg-gradient-to-t from-[#17100ae0] to-[#512f1faa] max-w-screen-2xl mx-auto h-screen flex justify-center pt-16 text-xl text-white from-10%  rounded-2xl">
            <form className="border border-primary flex flex-col gap-5 p-5 rounded-2xl">
                <h2 className="text-4xl text-center underline italic">confirm la comonde *</h2>
                <hr className="borber border-primary"/>
                <div className="flex justify-around text-start gap-5 ">
                    <label >Number : </label>
                    <input className="text-sm p1 px-14 rounded-md bg-[#ffffff20]" type="number" name="number" placeholder="Enter Youer Number" id="" />
                </div>
                <div className="flex justify-around gap-5">
                    <label>Aderess : </label>
                    <input className="text-sm p1 px-14 rounded-md bg-[#ffffff20]" type="text" name="Aderess" placeholder="Enter Youer Aderess" id="" />
                </div>
                <div className="flex justify-around gap-5">
                    <label >Remarque : </label>
                    <input className="text-sm p1 px-14 rounded-md bg-[#ffffff20]"  type="text" name="" placeholder="Rmurque (optionnel)" id="" />
                </div>
                <div className="text-center mt-3">
                    <button className="bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-300 px-11 rounded-md">Submit</button>
                </div>
            </form>

        </section>
    </>)
}
