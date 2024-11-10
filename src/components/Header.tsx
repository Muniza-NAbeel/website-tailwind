'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-primary text-white">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="nav-logo">
                    <h2 className="text-2xl font-bold logo-text">☕ Coffee</h2>
                </Link>
                
                {/* Hamburger Icon for mobile screens */}
                <div className="lg:hidden" onClick={toggleMenu}>
                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className={`flex flex-col space-y-4 sm:space-y-0 sm:space-x-10 sm:flex-row ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}>
                    <li className="nav-item">
                        <Link href="/" className="nav-link text-base sm:text-lg hover:text-secondary transition-colors">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/About" className="nav-link text-base sm:text-lg hover:text-secondary transition-colors">About</Link>
                    </li>  
                    <li className="nav-item">
                        <Link href="/Contact" className="nav-link text-base sm:text-lg hover:text-secondary transition-colors">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}




