"use client"; // Client-side rendering
import { useState } from 'react';
import Link from 'next/link';

const ClientNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1E3A8A] text-white w-full p-4">
      <div className="flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">Client Dashboard</div>

        {/* Navigation Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/ClientDashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/ClientDashboard/profile" className="hover:text-gray-300">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/ClientDashboard/work-orders" className="hover:text-gray-300">
                Work orders
              </Link>
            </li>
            <li>
              <Link href="/ClientDashboard/bills" className="hover:text-gray-300">
                Bills/payment
              </Link>
            </li>
          </ul>
          {/* Logout Button */}
          <Link href="/" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
            Logout
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4">
            <li>
              <Link href="/ClientDashboard" className="block hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/ClientDashboard/profile" className="block hover:text-gray-300">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/ClientDashboard/work-orders" className="block hover:text-gray-300">
                Work orders
              </Link>
            </li>
            <li>
              <Link href="/ClientDashboard/bills" className="block hover:text-gray-300">
                Bills/payment
              </Link>
            </li>
            <li>
              <Link href="/" className="block bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ClientNavbar;
