"use client"; // Client-side rendering
// import { submitQuoteRequest, fetchClientQuotes, fetchClientOrders } from '../utils/api';
import { useState, useEffect } from "react";
import AOS from 'aos';
import Sidebar from "@/app/components/contractorSidebar";

const ClientDashboard = () => {
    const [quotes, setQuotes] = useState([
        { name: "Sandra Clair", bill: "$1200"},
        { name: "John Doe", bill: "$2000" },
        { name: "Mary Dane", bill: "$4000" },
    ]);
    const [workOrders, setWorkOrders] = useState([
        { job: "WO123", status: "In Progress" },
        { job: "WO124", status: "Completed" },
        { job: "WO125", status: "UnCompleted" },
    ]);
    const [bills, setBill] = useState([
        { bils: "Bill#1", payment: "$500" },
        { bils: "Bill#2", payment: "$300" },
        { bils: "Bill#3", payment: "$700" },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once while scrolling
        });
      }, []);
    return (
        <div className="font-Poppins flex justify-center items-center flex-col">
            {/* <Sidebar/> */}
            <div className="flex justify-center items-center mt-[30px] mb-[50px]">
                <h1 className="text-2xl ">Client Dashboard</h1>
            </div>
            <div className="flex w-[90%]" data-aos="fade-down">
                <div className="place-items-center shadow-md rounded-md mr-[30px] w-[33%]">
                    {/* Quote-Form */}
                    <div className="mr-[30px] pl-[30px] py-[30px]">
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
                <div className="mr-[30px] place-items-center shadow-md rounded-md w-[35%]">
                    {/* Work Tracking & Orders */}
                    <h2 className="text-[20px] font-semibold mb-4 text-[#333333]">
                        View & Respond to Quotes
                    </h2>
                    {quotes.length === 0 ? (
                    <p>No ongoing work orders</p>
                    ) : (
                    <ul className="w-[90%]">
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
                <div className="mr-[30px] place-items-center shadow-md rounded-md w-[35%]">
                    {/* Work Tracking & Orders */}
                    <h2 className="text-[20px] font-semibold mb-4 text-[#333333]">
                        Track Work Orders
                    </h2>
                    {workOrders.length === 0 ? (
                    <p>No ongoing work orders</p>
                    ) : (
                    <ul className="w-[90%]">
                        {workOrders.map((order, index) => (
                        <li key={index} className="border-b py-3">
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    <h2>Job: {order.job}</h2>
                                    <button className="mt-[30px] text-[13px] bg-blue-600 text-white rounded-md px-2 py-2 hover:bg-blue-500">
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
            </div>
            <div className="w-[90%]">
                <div className="mr-[30px] place-items-center shadow-md rounded-md mt-[30px] px-[2px] py-[20px]">
                    {/*Bill Payments*/}
                    <h2 className="text-[20px] font-semibold mb-4 text-[#333333]">
                        Bill & Payments
                    </h2>
                    {bills.length === 0 ? (
                    <p>No ongoing work orders</p>
                    ) : (
                    <ul className="w-[90%]">
                        {bills.map((bil, index) => (
                        <li key={index} className="border-b py-3">
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    <h2>{bil.bils}</h2>
                                    <button type="button" className="mt-[30px] text-[13px] bg-green-600 text-white rounded-md px-2 py-2 hover:bg-green-500">
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