
"use client";
import React, { useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To handle mobile menu toggle

  return (
    <div>
      {/* Dashboard Header */}
      <div className="bg-[#1E3A8A] text-white py-6 fixed w-full top-0 z-50">
        <div className="px-6 flex justify-between items-center">
          {/* Left: Title */}
          <h1 className="text-3xl font-semibold font-Roboto">
            Contractor Dashboard
          </h1>

          {/* Right: Navigation Links and Profile */}
          <div className="hidden lg:flex gap-6 items-center ml-auto">
            <a className="text-white hover:text-gray-200">

            <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }} // Hover animation effect
            whileTap={{ scale: 0.95 }} // Tap effect (when clicked)
            transition={{ type: 'spring', stiffness: 300 }}
            
          >
            <button onClick={() => { alert("No Notification")}}> <NotificationsActiveIcon className="h-8 w-8" /></button>
           
          </motion.div>
            
            </a>

            {/* Profile Icon */}
            <div className="relative">
              <Link href='/ContractorDashboard/profile'>
                <button className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-400 hover:text-white font-bold transition-colors duration-300 ease-in-out">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                        fill="#3B82F6"
                      />
                      <path
                        d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 bg-[#1E3A8A] py-4 px-6">
          <a className="text-white hover:text-gray-200">Home</a>
          <a className="text-white hover:text-gray-200">Client Dashboard</a>

          {/* Profile Icon for Mobile */}
          <div className="relative">
            <button className="transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-400 hover:text-white font-bold transition-colors duration-300 ease-in-out">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
