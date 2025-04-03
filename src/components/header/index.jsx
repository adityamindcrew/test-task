
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { headerLogoImg } from '../../assets';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About ASETT" },
        { to: "contact", label: "Contact Us" },
    ];

    return (
        <header className="bg-[#2e6da4] text-white">
            <div>
                <img src={headerLogoImg} className='w-full' alt="Document Icon" />
            </div>
            {/* Desktop View */}
            <div className="container mx-auto hidden md:flex justify-between items-center py-6 px-4">
                <div className="flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to} className="text-white hover:text-yellow-400">
                            {link.label}
                        </NavLink>
                    ))}
                    <div className="relative group">
                        <button className="flex items-center text-white hover:text-yellow-400">
                            Support <span className="ml-1">▼</span>
                        </button>
                        <div className="absolute hidden group-hover:block bg-white mt-1 p-2 rounded shadow-lg">
                            <NavLink to="/support/faq" className="block py-1 px-2 text-black
                            hover:bg-yellow-400 whitespace-nowrap">FAQ</NavLink>
                            <NavLink to="/support/help" className="block py-1 px-2  text-black hover:bg-yellow-400 whitespace-nowrap">Help Center</NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <NavLink to="/register" className="text-white hover:text-yellow-400">
                        🔒 Register
                    </NavLink>
                    <NavLink to="/login" className="text-white hover:text-yellow-400">
                        ➡️ Login
                    </NavLink>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <NavLink to="/" className="text-xl font-bold">ASETT</NavLink>
                    <button onClick={toggleMenu} className="border border-gray-400 rounded p-1" aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="bg-blue-700 shadow-md">
                        <div className="container mx-auto px-4 py-2">
                            {navLinks.map((link) => (
                                <NavLink key={link.to} to={link.to} className="block py-2 text-white hover:text-yellow-400">
                                    {link.label}
                                </NavLink>
                            ))}
                            <div className="py-2">
                                <button
                                    onClick={() => document.getElementById('supportMenu')?.classList.toggle('hidden')}
                                    className="flex items-center text-white hover:text-yellow-400 w-full text-left py-1"
                                >
                                    Support <span className="ml-1">▼</span>
                                </button>
                                <div id="supportMenu" className="hidden pl-4">
                                    <NavLink to="/support/faq" className="block py-2 text-black hover:text-yellow-400">FAQ</NavLink>
                                    <NavLink to="/support/help" className="block py-2 text-black hover:text-yellow-400">Help Center</NavLink>
                                </div>
                            </div>
                            <NavLink to="/register" className="block py-2 text-white hover:text-yellow-400">
                                🔒 Register
                            </NavLink>
                            <NavLink to="/login" className="block py-2 text-white hover:text-yellow-400">
                                ➡️ Login
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
