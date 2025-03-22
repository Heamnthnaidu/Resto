import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
        <div className='container mx-auto text-center'>
            <p>&copy; 2025 Resto. All rights reserved.</p>
            <p>Follow Us on:</p>
            <div className='flex flex-row gap-6 mx-auto items-center justify-center my-4 mb-0'>
                <a 
                  href='#' 
                  className='text-2xl text-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110'>
                  <FaFacebook />
                </a>
                <a 
                  href='#' 
                  className='text-2xl text-white hover:text-red-500 transition-all duration-300 ease-in-out transform hover:scale-110'>
                  <FaYoutube />
                </a>
                <a 
                  href='#' 
                  className='text-2xl text-white hover:text-pink-500 transition-all duration-300 ease-in-out transform hover:scale-110'>
                  <FaInstagram />
                </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
