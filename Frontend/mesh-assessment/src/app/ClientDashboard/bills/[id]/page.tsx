"use client"; // Client-side rendering

import Image from 'next/image';

export default function BillDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // Dummy data for testing purposes
  const dummyBills = [
    {
      id: 1,
      amount: 1500,
      status: 'Pending',
      dueDate: '2024-12-10',
      details: 'Electricity bill for November 2024.',
    },
    {
      id: 2,
      amount: 500,
      status: 'Paid',
      dueDate: '2024-11-15',
      details: 'Water bill for October 2024.',
    },
    {
      id: 3,
      amount: 300,
      status: 'Overdue',
      dueDate: '2024-11-05',
      details: 'Internet bill for September 2024.',
    },
  ];

  // Find the bill with the matching id
  const bill = dummyBills.find((bill) => bill.id === parseInt(id));

  if (!bill) {
    return <p>Bill not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded shadow p-6 bg-white">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Bill Details</h1>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-medium">Amount: ${bill.amount}</h2>
          <p><strong>Status:</strong> {bill.status}</p>
          <p><strong>Due Date:</strong> {bill.dueDate}</p>
          <p><strong>Details:</strong> {bill.details}</p>
        </div>

        {/* Optional: You can display images or receipts here */}
        <div className="mb-4">
          <h3 className="font-medium">Receipt:</h3>
          <div className="flex gap-4">
            <Image src="/placeholder.svg" alt="Placeholder" width={100} height={100} />
            <Image src="/placeholder.svg" alt="Placeholder" width={100} height={100} />
          </div>
        </div>

        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => alert(`Bill ${bill.id} marked as paid`)}
        >
          Mark as Paid
        </button>
      </div>
    </div>
  );
}
