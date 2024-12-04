"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import WorkIcon from "@mui/icons-material/Work";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import { motion } from "framer-motion";

const HeaderAndSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Dashboard Header */}
      <div className="bg-[#1E3A8A] text-white py-6 fixed w-full top-0 z-50">
        <div className="px-6 flex justify-between items-center">
          {/* Left: Title */}
          <h1 className="text-3xl font-semibold font-Roboto sm:text-xl ml-10 lg:ml-0">
            Contractor Dashboard
          </h1>

          {/* Right: Profile and Notifications (Visible only on large screens, hidden on mobile) */}
          <div className="hidden lg:flex gap-12 items-center ml-auto">
            {/* Notification Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => {
                  alert("No Notification");
                }}
              >
                <NotificationsActiveIcon className="h-8 w-8" />
              </button>
            </motion.div>

            {/* Profile Icon */}
            <div className="relative">
              <Link href="/ContractorDashboard/profile">
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

          {/* Sidebar toggle button for small screens */}
          <button
            className="lg:hidden fixed top-3 left-2 z-50 bg-blue-600 text-white rounded-md p-3 shadow-md"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] sm:w-[200px] bg-[#1E3A8A] text-white p-6 z-40 transition-all ease-in-out duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
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
              href="/ContractorDashboard/payments"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <PaymentsIcon />
              Payments
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link
              href="/ContractorDashboard/reports"
              className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200"
            >
              <AssessmentIcon />
              Reports
            </Link>
          </li>
          <li className="hover:bg-blue-600 rounded-lg w-full block py-2">
            <Link href="/ContractorDashboard/profile" className="flex gap-4 px-4 py-2 text-white rounded-lg hover:text-gray-200">
             
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                      fill="#ffffff"
                    />
                  </svg>
             
              Profile
            </Link>
          </li>

          <li>
            <button
              onClick={() => {
                alert("No Notification");
              }}
            >
              <NotificationsActiveIcon className="h-8 w-8" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderAndSidebar;
