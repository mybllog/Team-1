"use client";

import React, { useState } from 'react';

const CreateOrderForm = () => {
  // State initialization with correct types
  const [formData, setFormData] = useState<{
    quoteId: number | string;
    startDate: string;
    endDate: string;
    totalAmount: number | string;
    description: string;
  }>({
    quoteId: '',
    startDate: '',
    endDate: '',
    totalAmount: '',
    description: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'quoteId' || name === 'totalAmount') {
      // Parse orderId to a number
      const quoteIdValue = value ? parseInt(value, 10) : ''; // Default to empty string if no value
      const totalAmountIdValue = value ? parseInt(value, 10) : ''; // Default to empty string if no value

      setFormData((prevData) => ({
        ...prevData,
        [name]: quoteIdValue,
        [name]: totalAmountIdValue,
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
    if (!formData.quoteId || !formData.startDate || !formData.endDate || !formData.totalAmount || !formData.description) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate clientId is a number and is greater than 0
    if (typeof formData.quoteId === 'string' || isNaN(Number(formData.quoteId)) || formData.quoteId <= 0) {
      setError('Order ID must be a valid positive number.');
      return;
    }
    else if (typeof formData.totalAmount === 'string' || isNaN(Number(formData.totalAmount)) || formData.totalAmount <= 0) {
        setError('Amount must be a valid positive number.');
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

      const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Failed to create bills.');
        setLoading(false);
        return;
      }

      setSuccessMessage('Bils created successfully!');
      setFormData({
        quoteId: '',
        startDate: '',
        endDate: '',
        totalAmount: '',
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
  <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Create a Bill</h2>

  {error && <p className="text-sm text-red-500 text-center mb-4">{error}</p>}
  {successMessage && <p className="text-sm text-green-500 text-center mb-4">{successMessage}</p>}

  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="quoteId" className="block text-sm font-medium text-gray-700">
        Quote ID
      </label>
      <input
        type="number"
        id="quoteId"
        name="quoteId"
        value={formData.quoteId}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
       StartDate
      </label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
        EndDate
      </label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700">
        TotalAmount
      </label>
      <input
        type="number"
        id="totalAmount"
        name="totalAmount"
        value={formData.totalAmount}
        onChange={handleChange}
        required
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
      {loading ? 'Creating Orders...' : 'Create Order'}
    </button>
  </form>
</div>

  );
};

export default CreateOrderForm;
