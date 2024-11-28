'use client'; // Make sure it's rendered on the client side

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-semibold">
            <Link href="/">Driveway Services</Link>
          </div>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/dashboard/contractor" className="hover:text-gray-300">
              Contractor Dashboard
            </Link>
            <Link href="/dashboard/client" className="hover:text-gray-300">
              Client Dashboard
            </Link>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </nav>

          {/* Mobile Navbar Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center space-x-2"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/dashboard/contractor" className="px-4 text-white">
                Contractor Dashboard
              </Link>
              <Link href="/dashboard/client" className="px-4 text-white">
                Client Dashboard
              </Link>
              <Link href="/" className="px-4 text-white">
                Home
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
