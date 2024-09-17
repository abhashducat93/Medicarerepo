import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#195b52] text-white p-6 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left section */}
                <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="text-lg font-bold">Medicare</div>
                    <div className="text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Medicare. All rights reserved.</p>
                        <p>Your trusted online medical store.</p>
                    </div>
                </div>

                {/* Right section - Social Media Icons */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={28} className="hover:text-pink-800 text-pink-500" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={28} className="hover:text-blue-400 text-blue-200" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={28} className="hover:text-blue-600 text-blue-400" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
