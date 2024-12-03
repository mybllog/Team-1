"use client"; // Client-side rendering
import React from "react"
export default function QuoteRequestDetail({ params }: { params: Promise<{ id: string }>}) {
  const { id } = React.use(params);

  // Dummy data for testing purposes
  const dummyData = [
    {
      id: 1,
      description: 'Roof repair',
      status: 'In Progress',
      dueDate: '2024-12-15',
      details: 'Repairing the roof with high-quality materials.',
    },
    {
      id: 2,
      description: 'Fence installation',
      status: 'Completed',
      dueDate: '2024-11-20',
      details: 'Installing a new fence with premium wood materials.',
    },
    {
      id: 3,
      description: 'Solar panel installation',
      status: 'Pending',
      dueDate: '2024-12-05',
      details: 'Complete solar panel installation, including setup and inspection.',
    },
  ];

  // Find the quote request with the matching id
  const quoteRequest = dummyData.find((request) => request.id === parseInt(id));

  if (!quoteRequest) {
    return <p>Quote Request not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded shadow p-6 bg-white">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Quote Request: {quoteRequest.description}</h1>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-medium">Status: {quoteRequest.status}</h2>
          <p><strong>Due Date:</strong> {quoteRequest.dueDate}</p>
          <p><strong>Details:</strong> {quoteRequest.details}</p>
        </div>
        
      </div>
    </div>
  );
}
