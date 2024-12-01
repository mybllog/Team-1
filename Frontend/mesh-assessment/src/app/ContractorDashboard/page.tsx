"use client"; // Client-side rendering

import { useState, useEffect } from "react";
import AOS from 'aos';

import Sidebar from "@/app/components/contractorSidebar";
import ChartComponent from "@/app/components/revenueChart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

const ContractorDashboard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);
  // Dummy data for the dashboard
  const [quoteRequests] = useState([
    { property: "123 Elm St", status: "Pending" },
    { property: "456 Oak Rd", status: "Approved" },
    { property: "789 Pine Ave", status: "Pending" },
  ]);

  const [workOrders] = useState([
    { job: "Driveway Sealing", status: "In Progress" },
    { job: "Crack Repair", status: "Completed" },
  ]);

  const [bills] = useState([
    { client: "John Doe", status: "Paid" },
    { client: "Jane Smith", status: "Unpaid" },
  ]);

  const [revenue] = useState(5000); // Example revenue
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#F3F4F6] font-Poppins">
      {/* Dashboard Header */}
      <div className="bg-[#1E3A8A] text-white py-6 fixed w-full top-0 z-50">
        <div className="px-6 flex justify-between items-center">
          {/* Left: Title */}
          <h1 className="text-2xl font-semibold font-Roboto">
            Contractor Dashboard
          </h1>
          {/* Right: Navigation Links and Profile */}
          <div className="hidden lg:flex gap-6 items-center ml-auto">
            <a onClick={() => { alert("No Notification")}} className="cursor-pointer text-white hover:text-gray-200">
              <NotificationsActiveIcon  className="h-8 w-8"/>
            </a>

            {/* Profile Icon */}
            <div className="relative">
              <Link href="/ContractorDashboard/profile" passHref  className="ml-auto">
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
                        fill="#3B82F6 "
                      />
                      <path
                        d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                        fill="#3B82F6 "
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col gap-4 bg-[#1E3A8A] py-4 px-6">
            <a className="text-white hover:text-gray-200">Home</a>
            <a className="text-white hover:text-gray-200">Client Dashboard</a>

            {/* Profile Icon */}
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
                      fill="#3B82F6 "
                    />
                    <path
                      d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                      fill="#3B82F6 "
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="flex-none bg-gray-800 text-white w-1/4 sm:w-1/5 md:w-1/6 p-4">
        <Sidebar />
      </div>

      {/* Dashboard Content */}
      <div className=" flex-1 pt-[70px] ml-[300px] px-6 mt-14 bg-[#F3F4F6]">
        <h1 className="text-2xl text-center text-start mr-auto mb-[40px] ml-4">Hello, David Smith</h1>
        {" "}
        {/* Added mt-24 to push content below the fixed header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full overflow-auto" data-aos="fade-down">
          {/* Quote Requests */}
          <div className="bg-white shadow-2xl rounded-lg p-6">
            <div className="flex">
              <h2 className="text-[34px] font-semibold mb-4 text-[#333333]">
                Incoming Quote Requests
              </h2>
              {/* <Link href="/Contractor/quoteRequest" passHref  className="ml-auto">
                <button>
                  <OpenInFullIcon className="text-black" />
                </button>
              </Link> */}

              <Link href="/ContractorDashboard/quoteRequest" passHref  className="ml-auto">
                <Tooltip title="Expand" arrow>
                  <button className="ml-auto">
                    <OpenInFullIcon className="text-black" />
                  </button>
                </Tooltip>
              </Link>
            </div>

            {quoteRequests.length === 0 ? (
              <p>No new requests</p>
            ) : (
              <ul>
                {quoteRequests.map((request, index) => (
                  <li key={index} className="border-b py-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Property: {request.property}
                      </div>
                      <div className="text-sm text-blue-600 flex gap-4">
                        <span>{request.status}</span>
                        <button className="bg-blue-600 text-white rounded-lg px-2 py-2">
                          Respond
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Work Orders */}
          <div className="bg-white shadow-2xl rounded-lg p-6">
            <h2 className="text-[27px] font-semibold mb-4 text-[#333333]">
              Work Orders
            </h2>
            {workOrders.length === 0 ? (
              <p>No ongoing work orders</p>
            ) : (
              <ul>
                {workOrders.map((order, index) => (
                  <li key={index} className="border-b py-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Job: {order.job}
                      </div>
                      <div className="text-sm text-green-600">
                        {order.status}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Bills */}
          <div className="bg-white shadow-2xl rounded-lg p-6">
            <div className="flex">
              <h2 className="text-[34px] font-semibold mb-4 text-[#333333]">
                Bills & Disputes
              </h2>
              <Link href="/ContractorDashboard/bills" passHref  className="ml-auto">
                <Tooltip title="Expand" arrow>
                  <button className="ml-auto">
                    <OpenInFullIcon className="text-black" />
                  </button>
                </Tooltip>
              </Link>
            </div>

            {bills.length === 0 ? (
              <p>No pending bills</p>
            ) : (
              <ul>
                {bills.map((bill, index) => (
                  <li key={index} className="border-b py-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Client: {bill.client}
                      </div>
                      <div className="text-sm text-red-600">{bill.status}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Work Orders */}
          <div className="bg-white shadow-2xl rounded-lg p-6">
            <h2 className="text-[27px] font-semibold mb-4 text-[#333333]">
              Work Orders
            </h2>
            {workOrders.length === 0 ? (
              <p>No ongoing work orders</p>
            ) : (
              <ul>
                {workOrders.map((order, index) => (
                  <li key={index} className="border-b py-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Job: {order.job}
                      </div>
                      <div className="text-sm text-green-600">
                        {order.status}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Revenue Report */}
        <div className="bg-white shadow-2xl  rounded-lg p-6 mt-8">
          <div className="flex">
            <h2 className="text-[27px] font-semibold mb-4 text-[#333333]">
              Revenue Report
            </h2>

            <div className="flex items-center justify-between ml-auto">
              <button className="bg-[#1E3A8A] text-[15px] text-white px-2 py-2 border rounded-lg">
                Generate Report
              </button>
            </div>
          </div>

          <div className="text-lg text-gray-500">
            <p>
              Total Revenue:{" "}
              <span className="font-semibold text-green-600">${revenue}</span>
            </p>

            <ChartComponent />
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-[27px] font-semibold mb-4 text-[#333333]">
            Recent Activity
          </h2>
          <div className="text-lg text-gray-500">
            <p className="flex justify-between mb-4 p-4 bg-white rounded-lg shadow-sm">
              <span className="font-bold  text-gray-700">John Doe:</span>
              <span className="font-semibold text-green-600 ml-[10px]">
                Submitted a proposal
              </span>
              <span className="font-semibold text-green-600 ml-auto">
                3hrs ago
              </span>
            </p>

            <p className="flex justify-between mb-4 p-4 bg-white rounded-lg shadow-sm">
              <span className="font-bold text-gray-700">John Doe:</span>
              <span className="font-semibold text-green-600 ml-[10px]">
                Submitted a proposal
              </span>
              <span className="font-semibold text-green-600 ml-auto">
                3hrs ago
              </span>
            </p>

            <p className="flex justify-between mb-4 p-4 bg-white rounded-lg shadow-sm">
              <span className="font-bold text-gray-700">John Doe:</span>
              <span className="font-semibold text-green-600 ml-[10px]">
                Submitted a proposal
              </span>
              <span className="font-semibold text-green-600 ml-auto">
                3hrs ago
              </span>
            </p>

            <p className="flex justify-between mb-4 p-4 bg-white rounded-lg shadow-sm">
              <span className="font-bold text-gray-700">John Doe:</span>
              <span className="font-semibold text-green-600 ml-[10px]">
                Submitted a proposal
              </span>
              <span className="font-semibold text-green-600 ml-auto">
                3hrs ago
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorDashboard;
