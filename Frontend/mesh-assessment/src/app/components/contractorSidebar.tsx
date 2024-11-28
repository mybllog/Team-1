"use client";

import { useState } from "react";
import Link from "next/link";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import WorkIcon from "@mui/icons-material/Work";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar toggle button */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 bg-blue-600 text-white rounded-full p-3 shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-[#1E3A8A] text-white p-6 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-[250px]`}
      >
        <ul className="space-y-12 mt-20">
          <li className="hover:bg-blue-600 rounded-lg py-2 w-full block">
            <Link
              href="/Contractor"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <DashboardIcon />
              Dashboard
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
            href="/Contractor/quoteRequest"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <RequestPageIcon />
              Quote Requests
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
              href="/dashboard/work-orders"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <WorkIcon />
              Work Orders
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
              href="/Contractor/bills"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <PaymentsIcon />
              Bills & Disputes
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
              href="/dashboard/revenue"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <AssessmentIcon />
              Revenue Report
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for smaller screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
