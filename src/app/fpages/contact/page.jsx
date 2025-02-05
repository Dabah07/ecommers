export default function Contact() {
    return (
       <section className="bg-[#3A1D1B] max-w-screen-2xl pt-4 pb-4 rounded-3xl border border-primary mx-auto">
         <div className="max-w-4xl mx-auto px-4 py-8 border border-primary w-1/2 h-3/2 text-white rounded-2xl mt-9 mb-9 shadow-2xl  bg-gradient-to-t from-[#0c0b0be0] to-[#512f1f65]  font-extrabold">
            <div className=" rounded-xl ">
                <h1 className="text-3xl font-serif text-center underline  mb-2">
                    Contact Us
                </h1>
                <p className="text-center text-white mb-3">
                    Nous sommes heureux de communiquer avec vous. N'hésitez pas à nous faire part de vos questions ou commentaires !
                </p>

            </div>
            <hr className="border-primary" />
            <form className="space-y-4   p-4 rounded-xl">
                <div>
                    <label
                        htmlFor="name"
                        className=" font-medium text-white"
                    >
                        Nom et Prénom :
                    </label>
                    <input
                        type="text"
                        placeholder="Nom et Prénom "
                        id="name"
                        name="name"
                        className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md "
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className=" font-medium text-white"
                    >
                        E-mail            </label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        id="email"
                        name="email"
                        className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30] rounded-md"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className=" font-medium text-whitee"
                    >
                    </label>
                    Numéro de téléphone
                    <input
                        type="text"
                        placeholder="Numéro de téléphone"
                        id="phone"
                        name="phone"
                        className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30]  rounded-md"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="font-medium text-white"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Message"
                        name="message"
                        rows="4"
                        className="mt-1 w-full py-1 px-3 focus:outline-primary bg-[#ffffff30] rounded-md"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-1 rounded-lg  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-300"
                >
                    Envoyer
                </button>
            </form>
            <hr className="border-primary" />

            <div className="mt-2 pt-6">
                <h2 className="text-xl pl-8 underline mb-2">
                    Coordonnées   </h2>
                <div className="flex justify-between mx-7  ">
                    <p className="text-white">📧 E-mail : Qyosk727@gmail.com</p>
                    <p className="text-white">📞 Phone :  00213783305008</p>
                </div>
            </div>
        </div>
       </section>
    );
}
