'use client'; // Make sure it's rendered on the client side

import Link from 'next/link';
import { useState } from 'react';
import RequestPageIcon from "@mui/icons-material/RequestPage";
import WorkIcon from "@mui/icons-material/Work";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
            <Link href="/ContractorDashboard" className="hover:text-gray-300">
              Contractor Dashboard
            </Link>
            <Link href="/ClientDashboard" className="hover:text-gray-300">
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
        {/* {isMenuOpen && (
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
        )} */}
        <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-[#1E3A8A] text-white p-6 z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-[250px]`}
        data-aos="fade-right"
      >
        <ul className="space-y-5 mt-20">
          <li className="hover:bg-blue-600 rounded-lg py-2 w-full block">
            <Link
              href="/ContractorDashboard"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <DashboardIcon />
              Dashboard
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
            href="/ContractorDashboard/quoteRequest"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <RequestPageIcon />
              Quote Requests
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
              href="/ContractorDashboard/workOrders"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <WorkIcon />
              Work Orders
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
              href="/ContractorDashboard/bills"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <PaymentsIcon />
              Bills & Disputes
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
              href="/ContractorDashboard/revenue"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <AssessmentIcon />
              Revenue Report
            </Link>
          </li>
        </ul>
      </div>

      </div>
    </header>
  );
};

export default Navbar;
