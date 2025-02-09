import Link from "next/link";


const Home = () => {
  return (
    <>

      <div className="relative flex   max-w-screen-2xl m-auto">
        <img src='img3.jpg'
          alt="jewaly"
          className="rounded-3xl max-h-screen w-full "
          width={800}
          height={700} />
        <div className=" absolute flex h-screen place-items-center ">
          <div className="flex flex-col p-11">
            <div className=" h-1/3 w-2/3 gap-3 flex flex-col">
              <h1 className="text-5xl text-white  ">Welcome to Qyosk</h1>
              <p className="text-white text-xl italic  ">Make gift-giving effortless and brighten your loved ones' day with our amazing products!</p>
            </div>


            <div className="flex space-x-3 place-items-baseline mt-14 ">
              <button className="px-7 py-2.5 bg-slate-50 rounded-2xl">Shop New</button>
              <button className="px-7 py-2.5 bg-[#ffffff10] border-2 text-white rounded-2xl">Collection</button>
            </div>

          </div>
        </div>
      </div>

      <section className="bg-gradient-to-t from-[#1f150de0] to-[#512f1faa]  from-10% rounded-3xl p-2 mt-7 max-w-screen-2xl m-auto">
        <div className="gap-9 flex  items-center rounded-3xl  mx-auto max-w-screen-2xl">
          <div className="font-light w-full p-2 flex flex-col text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-5xl text-center font-serif underline  text-white"> Votre destination pour l'élégance </h2>
            <p className="mb-7 text-justify "> est une boutique en ligne qui combine luxe et simplicité pour offrir les plus beaux accessoires et cadeaux soigneusement sélectionnés. Nous visons à être votre destination idéale pour toutes les occasions grâce à une large gamme de produits reflétant le raffinement et laissant une impression mémorable. Des cadeaux uniques aux accessoires tendance, nous proposons des options d’emballage élégantes et des services personnalisés pour que chaque cadeau ait une touche spéciale. Chez Luxfinity, nous croyons que chaque petit détail fait toute la différence..</p>
            <p className=" text-4xl font-extrabold italic  text-amber-800 text-center ">" L'élégance dans les détails, l'excellence dans le " geste.</p>
          </div>
          <div className="w-full h-[620px]">
            <img className="rounded-2xl h-full w-full object-cover " src="/5.jpg" alt="office content 1" />
          </div>
        </div>
      </section>

      <main className="h-screen w-full mt-7 rounded-3xl bg-gradient-to-t from-[#1f150de0] to-[#512f1faa]  from-10%  flex items-center justify-center">
        <div className="text-center p-6  mx-auto max-w-screen-2xl">
          <div className="flex justify-center gap-4 m-5">
            <h2 className=" text-5xl text-center italic underline mt-2  text-white ">Collection</h2>
            {/* <button className="px-14 rounded-lg border border-yellow-600 font-serif  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-200">TOUS</button> */}
          </div>

          <div className="grid grid-cols-4 italic gap-4 mb-6">
            <div className="flex flex-col text-2xl  font-serif text-white">
              <img
                src="/bra.jpg"
                alt="Image 1"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2">Brasle</h3>
            </div>
            <div className="flex flex-col text-2xl  font-serif text-white">
              <img
                src="/6.jpg"
                alt="Image 2"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2">Necklace</h3>
            </div>
            <div className="flex flex-col text-2xl  font-serif text-white">
              <img
                src="/8.jpg"
                alt="Image 3"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2">gormat</h3>
            </div>
            <div className="flex flex-col text-2xl  font-serif text-white">
              <img
                src="/ka.jpg"
                alt="Image 4"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2">kabil</h3>
            </div>
            <div className="flex flex-col text-2xl  font-serif text-white">
              <img
                src="/bg.jpg"
                alt="Image 5"
                className="w-full h-48 object-cover bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2">Paror</h3>
            </div>
            <div className="flex flex-col text-2xl  font-serif text-white">
              <img
                src="/k.jpg"
                alt="Image 5"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2">Ring</h3>
            </div>
            <div className="flex flex-col text-2xl  font-serif text-white">
              <img
                src="/rolex.jpg"
                alt="Image 5"
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2">Watch</h3>
            </div>
            {/* <div className="flex justify-center items-center mb-8 bg-[#7c746a71] hover:bg-[#2e2c2ac9] ease-in-out duration-1000 rounded-lg">
              <Link href='/' > 
              <div className="flex justify-center items-center  gap-2 text-2xl w-full h-12 pr-4  font-serif  rounded-r-full  rounded-l-xl   hover:bg-yellow-600 ease-in-out duration-1000 text-white">
                <button className="px-6 py-2 pr-3 text-black text-center "> Click  </button>
                <img className="h-10 w-14 p-1" src="/arrow.png" alt="" />

              </div>
              </Link>
            </div> */}

            <div className="flex gap-2  justify-center items-center mb-5 ">
              <Link href='/' className="flex group gap-2" >

                <span className="text-4xl text-yellow-500 italic underline group-hover:text-yellow-600"> Voir plus</span>
                <svg className="size-12 fill-yellow-500 group-hover:fill-yellow-600 group-hover:translate-x-3 transition-transform duration-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" />
                </svg>

              </Link>
            </div>

          </div>

          {/* <p className="text-white italic text-center text-2xl">
            Chaque pièce d'accessoire raconte une histoire, qu'elle soit inspirée du patrimoine traditionnel ou des dernières tendances de la mode.


          </p> */}
        </div>
      </main>










      <main className="h-screen w-full mt-7 rounded-3xl bg-gradient-to-t from-[#1f150de0] to-[#512f1faa]  from-10%   ">


        <section className="py-7 px-6 text-white">
          <h2 className="   mb-4 text-white text-6xl italic text-center underline  ">Ce qui nous distingue</h2>

          <div className="flex flex-wrap justify-center gap-10 mt-7 m-auto ">

            <div className="w-80  bg-[#7c746a71] p-2 rounded-xl text-center border border-yellow-600 ">
              <img src="/liverison.avif" alt="livrison" className="w-full h-56 hover:scale-105 duration-700 transition-transform object-cover rounded-lg" />
              <h4 className="mt-6 text-black font-extrabold text-2xl underline ">Livraison </h4>
              <p className="mt-2 text-xl italic ">Nous proposons une livraison express et un paiement à moitié prix, ce qui permet d'économiser de l'argent.</p>
            </div>

            <div className="w-80  bg-[#7c746a71] p-2 rounded-xl text-center border border-yellow-600">
              <img src="/exsis.jpg" alt="exsis" className="w-full h-56 hover:scale-105 duration-700 transition-transform object-cover rounded-lg" />
              <h4 className="mt-4 text-black font-extrabold text-2xl underline ">Products</h4>
              <p className="mt-2 text-xl italic ">Nous traitons avec des fournisseurs de confiance et inspectons le produit avant de l'envoyer au client.</p>
            </div>

            <div className="w-80  bg-[#7c746a71] p-2 rounded-xl text-center border border-yellow-600">
              <img src="/box.jpg" alt="box" className="w-full h-56 hover:scale-105 duration-700 transition-transform object-cover rounded-lg" />
              <h4 className="mt-4 text-black font-extrabold text-2xl underline ">Emballage</h4>
              <p className="mt-2 text-xl italic  ">Emballage spécial pour assurer la qualité, l'élégance et la conservation du produit</p>

            </div>

          </div>
        </section>





      </main>




      <div className=" bg-gradient-to-t from-[#1f150de0] to-[#512f1faa]  from-10%  p-4 mt-7 mb-7 rounded-3xl text-center  w-auto  ">

        <h2 className="p-7 pt-3 italic text-white text-6xl text-center underline">Our Services </h2>
        <div className="flex flex-col-3 gap-10 justify-center items-center mx-auto pt-2  mt-2 w-3/1">


          {/* les 3 cart  */}
          <div className=" w-80  border border-yellow-600 rounded-lg flex flex-col bg-[#7c746a71]  m- ">
            <div className="p-3  ">
              <img src="/w.jpg" className="w-full rounded-2xl hover:scale-105 duration-700 transition-transform  " />
            </div>

            <div className="p-4">
              <h3 className="  font-extrabold text-2xl text-black underline">Accessoires pour femmes</h3>
              <p className="mt-2 text-xl italic text-wrap text-gray-300 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                arcu,
                at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                at fermentum dui. Maecenas.
              </p>
              
              <div className="mt-3"><Link href='/' className=" px-5 py-2 rounded-lg  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-1000 ">View </Link></div>
            </div>
          </div>

          <div className=" w-80 border border-yellow-600 rounded-lg flex flex-col bg-[#7c746a71]  m- ">
            <div className="p-3  ">
              <img src="/avon.jpg" className="w-full hover:scale-105 duration-700 transition-transform  rounded-2xl " />
            </div>

            <div className="p-4">
              <h3 className="  font-extrabold text-2xl text-black underline">Vendez avec nous</h3>
              <p className="mt-2 text-xl italic text-wrap text-gray-300 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                arcu,
                at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                at fermentum dui. Maecenas.
              </p>
              <div className="mt-3"><Link href='/' className=" px-5 py-2 rounded-lg  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-1000 ">View </Link></div>
            </div>
          </div>

          <div className=" w-80 border border-yellow-600 rounded-lg flex flex-col bg-[#7c746a71]  m- ">
            <div className="p-3  ">
              <img src="/l.jpg" className="w-full hover:scale-105 duration-700 transition-transform  rounded-2xl " />
            </div>

            <div className="p-4">
              <h3 className="  font-extrabold text-2xl text-black underline">Vendez avec nous</h3>
              <p className="mt-2 text-xl italic text-wrap text-gray-300 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                arcu,
                at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                at fermentum dui. Maecenas.
              </p>
              <div className="mt-3"><Link href='/' className=" px-5 py-2 rounded-lg  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-1000 ">View </Link></div>
            </div>
          </div>

        </div>
      </div>





    </>
  );
}

export default Home;