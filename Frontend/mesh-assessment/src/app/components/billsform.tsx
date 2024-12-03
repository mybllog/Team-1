"use client";

import React, { useState } from 'react';

const CreateBillForm = () => {
  // State initialization with correct types
  const [formData, setFormData] = useState<{
    orderId: number | string;
    amount: number | string;
    dueDate: string;
    description: string;
  }>({
    orderId: '',
    amount: '',
    dueDate: '',
    description: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'orderId' || name === 'amount') {
      // Parse orderId to a number
      const orderIdValue = value ? parseInt(value, 10) : ''; // Default to empty string if no value
      const amountIdValue = value ? parseInt(value, 10) : ''; // Default to empty string if no value

      setFormData((prevData) => ({
        ...prevData,
        [name]: orderIdValue,
        [name]: amountIdValue,
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
    if (!formData.orderId || !formData.amount || !formData.dueDate || !formData.description) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate clientId is a number and is greater than 0
    if (typeof formData.orderId === 'string' || isNaN(Number(formData.orderId)) || formData.orderId <= 0) {
      setError('Order ID must be a valid positive number.');
      return;
    }
    else if (typeof formData.amount === 'string' || isNaN(Number(formData.amount)) || formData.amount <= 0) {
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

      const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/bills', {
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
        orderId: '',
        amount: '',
        dueDate: '',
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
      <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
        Order ID
      </label>
      <input
        type="number"
        id="orderId"
        name="orderId"
        value={formData.orderId}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
        Amount
      </label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
        DueDate
      </label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        value={formData.dueDate}
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
      {loading ? 'Creating Bills...' : 'Create Bill'}
    </button>
  </form>
</div>

  );
};

export default CreateBillForm;
