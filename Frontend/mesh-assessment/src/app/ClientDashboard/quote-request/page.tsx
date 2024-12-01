"use client"; // Client-side rendering
import { useState } from 'react'
import Link from 'next/link'

// This would typically come from your backend
const quoteRequests = [
  {
    id: 1,
    address: '123 Main St',
    status: 'Pending',
    size: '2000',
    description: 'Need a new roof installed',
    photos: ['/placeholder.svg', '/placeholder.svg'],
    quote: {
      amount: 5000,
      description: 'New roof installation including materials and labor',
    },
  },
  {
    id: 2,
    address: '456 Elm St',
    status: 'Quoted',
    size: '1500',
    description: 'Fence repair needed',
    photos: ['/placeholder.svg', '/placeholder.svg'],
    quote: {
      amount: 3000,
      description: 'Fence repair with premium materials',
    },
  },
  {
    id: 3,
    address: '789 Oak St',
    status: 'Accepted',
    size: '2500',
    description: 'Install solar panels',
    photos: ['/placeholder.svg', '/placeholder.svg'],
    quote: {
      amount: 7000,
      description: 'Complete solar panel installation including setup and inspection',
    },
  },
];

// Define the type for newQuote state
interface QuoteRequest {
  address: string;
  size: string;
  description: string;
  status: string;
  amount: string;
}

export default function QuoteRequests() {
  const [showForm, setShowForm] = useState(false);
  const [newQuote, setNewQuote] = useState<QuoteRequest>({
    address: '',
    size: '',
    description: '',
    status: 'Pending',
    amount: '',
  });

  // Typing the event parameter as React.FormEvent<HTMLFormElement>
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('New Quote Request:', newQuote);
    setShowForm(false);
    // Add the new quote request logic here (e.g., API call to save the new quote)
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Quote Requests</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          New Quote Request
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 border rounded shadow">
          <h2 className="text-lg font-medium mb-4">New Quote Request</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={newQuote.address}
                onChange={(e) => setNewQuote({ ...newQuote, address: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="size">
                Size (sq ft)
              </label>
              <input
                type="text"
                id="size"
                value={newQuote.size}
                onChange={(e) => setNewQuote({ ...newQuote, size: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                value={newQuote.description}
                onChange={(e) => setNewQuote({ ...newQuote, description: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={newQuote.amount}
                onChange={(e) => setNewQuote({ ...newQuote, amount: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                value={newQuote.status}
                onChange={(e) => setNewQuote({ ...newQuote, status: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Pending">Pending</option>
                <option value="Quoted">Quoted</option>
                <option value="Accepted">Accepted</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {quoteRequests.map((request) => (
          <div key={request.id} className="border rounded shadow p-4">
            <div className="mb-2">
              <h2 className="text-lg font-medium">{request.address}</h2>
            </div>
            <div>
              <p>Status: {request.status}</p>
            </div>
            <Link href={`/ClientDashboard/quote-request/${request.id}`}>
              <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
