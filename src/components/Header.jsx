import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const leftPositionForMobileMenu = isOpen ? 'left-0' : 'left-[-150%]';
    useEffect(() =>{
        function handleResize (){
            if(window.innerWidth >= 768){
                setIsOpen(false);
            }
        }
        window.addEventListener('resize',handleResize);

        return () => window.removeEventListener('resize', handleResize);
    },[]);

    useEffect(() =>{
        if(isOpen){
            document.body.classList.add('no-scroll')
        } else{
            document.body.classList.remove('no-scroll')
        }
    }, [isOpen]);


  return <header className="bg-white shadow sticky top-0 z-20">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Resto</h1>
        <nav className="md:flex gap-x-6 hidden">
            <ul className="flex gap-x-6">
                <li>
                    <a className="hover:text-blue-500" href="#home">Home</a>
                </li>
                <li>
                    <a className="hover:text-blue-500" href="#menu">Menu</a>
                </li>
                <li>
                    <a className="hover:text-blue-500" href="#about">About</a>
                </li>
                <li>
                    <a className="hover:text-blue-500" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        {!isOpen && (
            <div onClick={() => setIsOpen(true)} className="flex md:hidden cursor-pointer">
                <GiHamburgerMenu size={30}/>
            </div>
        )}
        {isOpen && (
            <div onClick={() => setIsOpen(false)} className="flex md:hidden z-50 cursor-pointer">
                <IoClose size={30}/>
            </div>
        )}
        <div className={`fixed z-40 top-0 ${leftPositionForMobileMenu} 
            h-screen w-screen duration-1000 bg-black/50 overflow-y-auto `}>
            <div className="bg-blue-900 w-[80%] flex justify-center 
                items-center min-h-screen overflow-y-auto py-3 flex-col gap-4">
                <nav>
                    <ul className="flex flex-col gap-y-5 justify-center items-center text-white ">
                        <li onClick={() => setIsOpen(false)}>
                            <a className="hover:text-blue-500" href="#home">Home</a>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <a className="hover:text-blue-500" href="#menu">Menu</a>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <a className="hover:text-blue-500" href="#about">About</a>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <a className="hover:text-blue-500" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => setIsOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Get Started</button>
            </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 md:block hidden">
            Get Started</button>
    </div>
  </header>
}

export default Header;