"use client";

import React, { useState } from 'react';

const CreateQuoteForm = () => {
  // State initialization with correct types
  const [formData, setFormData] = useState<{
    clientId: number | string;
    propertyDetails: string;
    additionalNotes: string;
    description: string;
  }>({
    clientId: '',
    propertyDetails: '',
    additionalNotes: '',
    description: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'clientId') {
      // Parse clientId to a number
      const clientIdValue = value ? parseInt(value, 10) : ''; // Default to empty string if no value

      setFormData((prevData) => ({
        ...prevData,
        [name]: clientIdValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Validate form fields
    if (!formData.clientId || !formData.propertyDetails || !formData.description) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate clientId is a number and is greater than 0
    if (typeof formData.clientId === 'string' || isNaN(Number(formData.clientId)) || formData.clientId <= 0) {
      setError('Client ID must be a valid positive number.');
      return;
    }

    setLoading(true);

    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('authToken'); // Assuming the token is stored in localStorage

      if (!token) {
        setError('Unauthorized: No token found.');
        setLoading(false);
        return;
      }

      const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Failed to create quote.');
        setLoading(false);
        return;
      }

      setSuccessMessage('Quote created successfully!');
      setFormData({
        clientId: '',
        propertyDetails: '',
        additionalNotes: '',
        description: '',
      });
      setLoading(false);
    } catch (error) {
      // Instead of `any`, use `unknown` and narrow the type
      if (error instanceof Error) {
        setError(error.message || 'Something went wrong. Please try again.');
      } else {
        setError('Something went wrong. Please try again.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl p-6 rounded-lg   justify-start items-start">
  <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Create a Quote</h2>

  {error && <p className="text-sm text-red-500 text-center mb-4">{error}</p>}
  {successMessage && <p className="text-sm text-green-500 text-center mb-4">{successMessage}</p>}

  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">
        Client ID
      </label>
      <input
        type="number"
        id="clientId"
        name="clientId"
        value={formData.clientId}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="propertyDetails" className="block text-sm font-medium text-gray-700">
        Property Details
      </label>
      <input
        type="text"
        id="propertyDetails"
        name="propertyDetails"
        value={formData.propertyDetails}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
        Additional Notes (optional)
      </label>
      <textarea
        id="additionalNotes"
        name="additionalNotes"
        value={formData.additionalNotes}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md"
      disabled={loading} // Disable button while loading
    >
      {loading ? 'Creating Quote...' : 'Create Quote'}
    </button>
  </form>
</div>

  );
};

export default CreateQuoteForm;
