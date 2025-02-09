import Link from "next/link"
export default function filter() {
    return (
        <>
            <ul className="flex gap-2  rounded-lg text-white p-1">
               <Link href='/fpages/product'><li className="border px-2 border-primary rounded-2xl">All Bejoux</li></Link>
               <Link href='/filter/ring'> <li className="border px-2 border-primary rounded-2xl">Ring</li></Link>
                <li className="border px-2 border-primary rounded-2xl">Bracle</li>
                <li className="border px-2 border-primary rounded-2xl">Kabil</li>
                <li className="border px-2 border-primary rounded-2xl">Gormat</li>
                <li className="border px-2 border-primary rounded-2xl">Parer</li>
                <li className="border px-2 border-primary rounded-2xl">Watch famme</li>


            </ul>

        </>

    )

}