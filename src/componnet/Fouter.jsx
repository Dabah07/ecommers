import React from 'react';
import Rizo from './Rizo';



const Footer = () => {
  return (
    <>

      <div className=' flex flex-col  bg-gradient-to-t from-[#1f150de0] to-[#512f1faa]  from-10% rounded-3xl mt-4 h-2/3 w-full   text-center '>
        <div className='p-7'>
          <Rizo />
        </div>    
        <footer className="flex justify-around items-center text-wrap  text-white p-7">
          <nav className='flex flex-col text-start'>
            <h6 className="text-2xl font-bold underline mb-2">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className='flex text-start flex-col'>
            <h6 className="text-2xl  font-bold underline mb-2">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>

          <div className='flex flex-col text-start'>
            <h6 className="text-2xl font-bold underline mb-2">Newsletter</h6>
            <form className="flex flex-col mb-2 w-80">
              <label className="Email">
                <span className="text-xl ">Enter your email address</span>
              </label>
              <div className="w-80 flex gap-3 ">
                <input
                  type="text"
                  placeholder="Entrez votre email "
                  className="text-xl  rounded-md mt-4 px-4" />
                <button className="mt-4 rounded-lg px-6  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-1000 ">Subscribe</button>
              </div>
            </form>
          </div>
        </footer>

        <div className='p-7'>
          <p className="text-gray-500 ">&copy; <b className='text-2xl'>2025 Qyosk. </b> tous Droits Réservé.</p>
        </div>

      </div>







    </>

  );
};

export default Footer;