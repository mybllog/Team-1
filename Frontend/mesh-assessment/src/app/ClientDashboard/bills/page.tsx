"use client"; // Client-side rendering

import Link from "next/link";

const BillsPage = () => {
  const bills = [
    {
      id: 1,
      amount: 1500,
      status: "Pending",
      dueDate: "2024-12-10",
      details: "Electricity bill for November 2024.",
    },
    {
      id: 2,
      amount: 500,
      status: "Paid",
      dueDate: "2024-11-15",
      details: "Water bill for October 2024.",
    },
    {
      id: 3,
      amount: 300,
      status: "Overdue",
      dueDate: "2024-11-05",
      details: "Internet bill for September 2024.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Bills</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {bills.map((bill) => (
          <div key={bill.id} className="border rounded shadow p-4 bg-white">
            <div className="mb-4">
              <h2 className="text-xl font-medium">Amount: ${bill.amount}</h2>
              <p>
                <strong>Status:</strong> {bill.status}
              </p>
              <p>
                <strong>Due Date:</strong> {bill.dueDate}
              </p>
            </div>
            {/* Corrected Link component */}
            <Link href={`/ClientDashboard/bills/${bill.id}`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsPage;
