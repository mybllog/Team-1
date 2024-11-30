"use client"; // Client-side rendering

import Link from 'next/link'

// This would typically come from your backend
const workOrders = [
  {
    id: 1,
    description: 'Roof repair',
    status: 'In Progress',
    dueDate: '2024-12-15',
  },
  {
    id: 2,
    description: 'Fence installation',
    status: 'Completed',
    dueDate: '2024-11-20',
  },
  {
    id: 3,
    description: 'Solar panel installation',
    status: 'Pending',
    dueDate: '2024-12-05',
  },
];

const bills = [
  {
    id: 1,
    amount: 5000,
    status: 'Paid',
    dueDate: '2024-11-30',
  },
  {
    id: 2,
    amount: 3000,
    status: 'Unpaid',
    dueDate: '2024-12-05',
  },
  {
    id: 3,
    amount: 7000,
    status: 'Paid',
    dueDate: '2024-11-25',
  },
];

export default function WorkOrdersAndBills() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Work Orders and Bills</h1>

      {/* Work Orders Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Work Orders</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {workOrders.map((order) => (
            <div key={order.id} className="border rounded shadow p-4">
              <h3 className="text-lg font-medium mb-2">{order.description}</h3>
              <p>Status: <span className="font-bold">{order.status}</span></p>
              <p>Due Date: <span className="font-bold">{order.dueDate}</span></p>
              <Link href={`/ClientDashboard/work-orders/${order.id}`}>
                <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bills Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Bills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {bills.map((bill, id) => (
            <div key={id} className="border rounded shadow p-4">
              <h3 className="text-lg font-medium mb-2">Amount: ${bill.amount}</h3>
              <p>Status: <span className="font-bold">{bill.status}</span></p>
              <p>Due Date: <span className="font-bold">{bill.dueDate}</span></p>
              <Link href={`/ClientDashboard/bills/${bill.id}`}>
                <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
