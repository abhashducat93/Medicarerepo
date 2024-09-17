import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Function to determine if a route is active
    const isActiveRoute = (route) => location.pathname === route;

    return (
        <nav className="bg-[#195b52] p-3 fixed h-20 w-[100%] z-50">
            <div className="container mx-auto flex flex-row-reverse justify-between items-center">
                {/* Left Side - Menu Items */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-4">
                        <a
                            href="/"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/about') ? 'text-pink-500' : 'text-white'}`}
                        >
                            About Us
                        </a>
                        <a
                            href="/shop"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/shop') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Shop
                        </a>
                        <a
                            href="/contact"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/contact') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Contact
                        </a>
                        <a
                            href="/checkup"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/checkup') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Checkup
                        </a>
                        <div className="flex items-center space-x-2">
                            <FaUserCircle className="text-white" size={24} />
                            <span className="text-white">Username</span>
                        </div>
                    </div>
                    {/* Hamburger Menu for small screens */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <HiMenu size={24} />
                        </button>
                    </div>
                </div>

                {/* Right Side - Logo and Heading */}
                <div className="text-white flex items-center space-x-5">
                    <img src={require('../assets/logo.png')} alt="" className='h-16 w-16 rounded-full' />
                    <div className="text-3xl font-extrabold">Medicare</div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <div className="md:hidden bg-[#195b52] rounded-xl">
                    <div className="flex flex-col space-y-2 mt-1 p-5 ">
                        <a
                            href="/"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/about') ? 'text-pink-500' : 'text-white'}`}
                        >
                            About Us
                        </a>
                        <a
                            href="/shop"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/about') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Shop
                        </a>
                        <a
                            href="/contact"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/contact') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Contact
                        </a>
                        <a
                            href="/checkup"
                            className={`hover:text-pink-500 text-sm font-semibold ${isActiveRoute('/checkup') ? 'text-pink-500' : 'text-white'}`}
                        >
                            Checkup
                        </a>
                        <div className="flex items-center space-x-2">
                            <FaUserCircle className="text-white" size={24} />
                            <span className="text-white">Username</span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
