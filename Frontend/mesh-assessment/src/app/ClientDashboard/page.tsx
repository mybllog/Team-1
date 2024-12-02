"use client"; // Client-side rendering
import { useState, useEffect } from "react";
import AOS from 'aos';
import CreateQuoteForm from "../components/quoteform";

const ClientDashboard = () => {
  const [quotes] = useState([
    { name: "123 Main St", bill: "Pending" },
    { name: "456 Elm St", bill: "Pending" },
    { name: "789 Oak St", bill: "Pending" },
  ]);
  const [workOrders] = useState([
    { job: "Roof repair", status: "In Progress" },
    { job: "Fence installation", status: "Completed" },
    { job: "Solar panel installation", status: "Inprogress" },
  ]);
  const [bills] = useState([
    { bils: "Bill#1", payment: "$1500" },
    { bils: "Bill#2", payment: "$500" },
    { bils: "Bill#3", payment: "$300" },
  ]);
 

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);

  return (
<div className="font-Poppins flex flex-col items-center bg-blue-50 py-10 px-4 sm:px-6">
  {/* CreateQuoteForm Section */}
  <div className="w-full mb-10">
    <div className="rounded-md  shadow-2xl  bg-white p-6 w-full">
      <CreateQuoteForm />
    </div>
  </div>

  {/* Additional Sections */}
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    <div className="shadow-2xl rounded-md bg-white p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 text-[#333333]">View & Respond to Quotes</h2>
      {quotes.length === 0 ? (
        <p>No ongoing work orders</p>
      ) : (
        <ul>
          {quotes.map((quote, index) => (
            <li key={index} className="border-b py-3">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <h2>{quote.name}</h2>
                  <button
                    type="button"
                    className="mt-3 text-xs bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-500"
                  >
                    Accept
                  </button>
                </div>
                <div className="text-sm text-green-600">
                  <p>{quote.bill}</p>
                  <button
                    type="button"
                    className="mt-3 text-xs bg-red-600 text-white rounded-md px-3 py-2 hover:bg-red-500"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Track Work Orders Section */}
    <div className="shadow-2xl rounded-md bg-white p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 text-[#333333]">Track Work Orders</h2>
      {workOrders.length === 0 ? (
        <p>No ongoing work orders</p>
      ) : (
        <ul>
          {workOrders.map((order, index) => (
            <li key={index} className="border-b py-3">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <h2>Job: {order.job}</h2>
                  <button
                    onClick={() => (window.location.href = '/ClientDashboard/work-orders')}
                    className="mt-3 text-xs bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-500"
                  >
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

  {/* Bill & Payments Section */}
  <div className="w-full shadow-2xl rounded-md bg-white p-6">
    <h2 className="text-xl font-semibold mb-4 text-[#333333]">Bill & Payments</h2>
    {bills.length === 0 ? (
      <p>No bills to pay</p>
    ) : (
      <ul>
        {bills.map((bill, index) => (
          <li key={index} className="border-b py-3">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <h2>{bill.bils}</h2>
                <button
                  onClick={() => (window.location.href = '/ClientDashboard/bills')}
                  type="button"
                  className="mt-3 text-xs bg-green-600 text-white rounded-md px-3 py-2 hover:bg-green-500"
                >
                  Pay Now
                </button>
              </div>
              <div className="text-sm text-gray-500">
                <p>{bill.payment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

  
  
  );
};

export default ClientDashboard;
