'use client'; // This marks the component as a client component
import Link from 'next/link';
import { useState } from 'react';
import ContractorLayout from '../ContractorLayout';

const WorkOrdersList = () => {
  // Dummy data for orders with status
  const [orders, setOrders] = useState([
    { id: 'WO123', name: 'Repair Electrical Wiring', status: 'In Progress' },
    { id: 'WO124', name: 'Install Plumbing', status: 'Completed' },
    { id: 'WO125', name: 'Inspect HVAC System', status: 'Pending' },
  ]);

  // Function to handle status change
  const handleStatusChange = (id: string, newStatus: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <ContractorLayout>
    <div className="container mx-auto p-6">

      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Work Orders</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border-b border-gray-300 px-6 py-3 text-left">Order ID</th>
              <th className="border-b border-gray-300 px-6 py-3 text-left">Order Name</th>
              <th className="border-b border-gray-300 px-6 py-3 text-left">Status</th>
              <th className="border-b border-gray-300 px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-6 py-4">{order.id}</td>
                <td className="border-b border-gray-300 px-6 py-4">{order.name}</td>
                <td className="border-b border-gray-300 px-6 py-4">
                  {/* Displaying status with dynamic colors */}
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="border-b border-gray-300 px-6 py-4">
                  <Link
                    href={`/ContractorDashboard/workOrders/${order.id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View Details
                  </Link>
                  {/* Button to change status */}
                  <button
                    onClick={() =>
                      handleStatusChange(order.id, order.status === 'In Progress' ? 'Completed' : 'In Progress')
                    }
                    className="ml-4  gap-12 text-sm bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                  >
                    {order.status === 'In Progress' ? 'Mark as Completed' : 'Mark as In Progress'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </ContractorLayout>
  );
};

export default WorkOrdersList;
