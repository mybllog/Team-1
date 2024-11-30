"use client"; // Client-side rendering
import Image from 'next/image';
import React from 'react';
export default function QuoteRequestDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  // Dummy data for testing purposes
  const dummyData = {
    id: id,
    status: 'Pending',
    size: 'Large',
    description: 'This is a detailed description of the quote request.',
    photos: [
      '/est2.jpg', // Add your image URLs here
      '/realestate.png',  // Example photo URL
    ],
    amount: '$5000',
    quoteDescription: 'This is a detailed description of the quote.',
  };

  return (
    <div className="border rounded shadow p-6 bg-white">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Quote Request: {id}</h1>
      </div>
      <div className="space-y-4">
        {/* Displaying the dummy data */}
        <p>
          <strong>Status: {dummyData.status}</strong>
        </p>
        <p>
          <strong>Size:</strong> {dummyData.size}
        </p>
        <p>
          <strong>Description:</strong> {dummyData.description}
        </p>
        <div>
          <h3 className="font-semibold mb-2">Photos:</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Displaying dummy image URLs */}
            {dummyData.photos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt="Property photo"
                width={300}
                height={200}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quote:</h3>
          <p>
            <strong>Amount:</strong> {dummyData.amount}
          </p>
          <p>
            <strong>Description:</strong> {dummyData.quoteDescription}
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Accept Quote
          </button>
        </div>
      </div>
    </div>
  );
}
