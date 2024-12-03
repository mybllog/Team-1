"use client";

import React, { useState } from 'react';

const CreateRevenueForm = () => {
  // State initialization with correct types
  const [formData, setFormData] = useState<{
    startDate: string;
    endDate: string;
  }>({
    startDate: '',
    endDate: '',
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
    if (!formData.startDate || !formData.endDate) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate clientId is a number and is greater than 0
    // if (typeof formData.clientId === 'string' || isNaN(Number(formData.clientId)) || formData.clientId <= 0) {
    //   setError('Client ID must be a valid positive number.');
    //   return;
    // }

    // setLoading(true);

    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('authToken'); // Assuming the token is stored in localStorage

      if (!token) {
        setError('Unauthorized: No token found.');
        setLoading(false);
        return;
      }

      const response = await fetch('https://mesh-1-1.onrender.com/mesh/api/reports', {
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

      setSuccessMessage('Report created successfully!');
      setFormData({
        startDate: '',
        endDate: '',
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
  <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Generate Report</h2>

  {error && <p className="text-sm text-red-500 text-center mb-4">{error}</p>}
  {successMessage && <p className="text-sm text-green-500 text-center mb-4">{successMessage}</p>}

  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
        Start-Date
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
        End-Date
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

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-md"
      disabled={loading} // Disable button while loading
    >
      {loading ? 'Generating Revenue...' : 'Generate Report'}
    </button>
  </form>
</div>

  );
};

export default CreateRevenueForm;
