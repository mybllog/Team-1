"use client"; // Client-side rendering
import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);

  // Dummy user data for demonstration
  useEffect(() => {
    const fetchUserData = () => {
      setUserData({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 8901',
        address: '123 Main St, Springfield, IL',
        profilePicture: '/est1.jpg',
      });
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Display loading while fetching data
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>

      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
          <img
            src={userData.profilePicture}
            alt="Profile Picture"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <div className="mt-4 space-y-2">
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Address:</strong> {userData.address}</p>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => alert('Edit profile functionality')}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
        <button
          onClick={() => alert('Logout functionality')}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
