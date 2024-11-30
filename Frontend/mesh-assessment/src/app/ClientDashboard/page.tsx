"use client"; // Client-side rendering
// import { submitQuoteRequest, fetchClientQuotes, fetchClientOrders } from '../utils/api';
import { useState, useEffect } from "react";
import AOS from 'aos';
import ClientNavbar from "../components/clientNavbar";
import Link from "next/link";
const ClientDashboard = () => {
    const [quotes, setQuotes] = useState([
        { name: "123 Main St", bill: "Pending"},
        { name: "456 Elm St", bill: "Pending" },
        { name: "789 Oak  St", bill: "Pending" },
    ]);
    const [workOrders, setWorkOrders] = useState([
        { job: "Roof repair", status: "In Progress" },
        { job: "Fence installation", status: "Completed" },
        { job: "Solar panel installation", status: "Inprogress" },
    ]);
    const [bills, setBill] = useState([
        { bils: "Bill#1", payment: "$1500" },
        { bils: "Bill#2", payment: "$500" },
        { bils: "Bill#3", payment: "$300" },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once while scrolling
        });
      }, []);
    return (
       
        <div className="font-Poppins flex justify-center h-[100%] items-center flex-col bg-blue-50">
            {/* <ClientNavbar/> */}
            {/* <Sidebar/> */}
      
            <h1 className="text-2xl text-start mr-auto mt-[10px] mb-[40px] ml-4">Hello, John Doe</h1>


            <div className="grid grid-cols-2 gap-4 pl-[60px] place-items-center  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2" data-aos="fade-down">
                <div className="rounded-md mr-[40px] bg-white shadow-2xl sm:mr-[10px] md:mr-[10px] lg:mr-[40px]">
                    {/* Quote-Form */}
                    <div className="px-[30px] py-[30px]">
                        <h2 className="text-[20px] font-semibold mb-4 text-[#333333]">Submit Quote Request</h2>
                        <form action="">
                            <div className="flex flex-col">
                                <label className="mb-[10px]" htmlFor="property">Property Address</label>
                                <input className="border px-[10px] py-[7px] mb-[20px] rounded-md outline-none" type="email" name="" id="" placeholder="Email address"  required/>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-[10px]" htmlFor="property">Property Size (sq ft)</label>
                                <input className="border px-[10px] py-[7px] mb-[20px] rounded-md outline-none" type="number" name="" id="" placeholder="Enter size"  required/>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-[10px]" htmlFor="property">Upload Photos</label>
                                <input className="border px-[10px] py-[7px] mb-[10px] rounded-md outline-none" type="file" name="" id=""  required/>
                            </div>
                            <button type="submit" className="mt-[30px] text-[13px] bg-blue-600 text-white rounded-md px-2 py-2 hover:bg-blue-500">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
                <div className="shadow-2xl rounded-md bg-white px-[20px] py-[30px] w-[90%] sm:w-[129%] lg:w-[90%]">
                    {/* Work Tracking & Orders */}
                    <h2 className="text-[20px] font-semibold mb-4 text-[#333333]">
                        View & Respond to Quotes
                    </h2>
                    {quotes.length === 0 ? (
                    <p>No ongoing work orders</p>
                    ) : (
                    <ul>
                        {quotes.map((names, index) => (
                        <li key={index} className="border-b py-3">
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    <h2>{names.name}</h2>
                                    <button type="button" className="mt-[30px] text-[13px] bg-blue-600 text-white rounded-md px-2 py-2 hover:bg-blue-500">
                                        Accept
                                    </button>
                                </div>
                                <div className="text-sm text-green-600">
                                    <p>{names.bill}</p>
                                    <button type="button" className="mt-[30px] text-[13px] bg-red-600 text-white rounded-md px-2 py-2 hover:bg-red-500">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
            <div className="mr-[30px] place-items-center shadow-2xl mt-[50px] w-[40%] px-[10px] py-[30px] rounded-md bg-white sm:w-full md:w-full lg:w-[40%] sm:mr-[10px] md:mr-[10px]">
                {/* Work Tracking & Orders */}
                <h2 className="text-[20px] font-semibold mb-4 text-[#333333]">
                    Track Work Orders
                </h2>
                {workOrders.length === 0 ? (
                <p>No ongoing work orders</p>
                ) : (
                <ul className="">
                    {workOrders.map((order, index) => (
                    <li key={index} className="border-b py-3">
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                                <h2>Job: {order.job}</h2>
                                <button onClick={() => window.location.href = '/ClientDashboard/work-orders'} className="mt-[30px] text-[13px] bg-blue-600 text-white rounded-md px-2 py-2 hover:bg-blue-500">
                                    View Details
                                </button>
                            </div>
                            <div className="text-sm text-green-600">
                                <p>{order.status}</p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            <div className="w-[90%] sm:w-full md:w-full lg:w-[90%]">
                <div className="mr-[30px] place-items-center shadow-2xl rounded-md mt-[30px] px-[2px] py-[20px] bg-white sm:px-[10px]">
                    {/*Bill Payments*/}
                    <h2 className="text-[20px] font-semibold mb-4 text-[#333333]">
                        Bill & Payments
                    </h2>
                    {bills.length === 0 ? (
                    <p>No ongoing work orders</p>
                    ) : (
                    <ul className="w-[90%] sm:w-full md:w-full lg:w-[90%]">
                        {bills.map((bil, index) => (
                        <li key={index} className="border-b py-3">
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    <h2>{bil.bils}</h2>
                                    <button onClick={() => window.location.href = '/ClientDashboard/bills'} type="button" className="mt-[30px] text-[13px] bg-green-600 text-white rounded-md px-2 py-2 hover:bg-green-500">
                                        Pay Now
                                    </button>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p>{bil.payment}</p>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
        </div>
       
    )
}
export default ClientDashboard