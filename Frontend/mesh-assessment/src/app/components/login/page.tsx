"use client"; // Ensures the component is client-side
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const LoginForm = () => {
  // State for form data, error handling, and loading state
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors
    setLoading(true); // Set loading to true when the request is in progress

    try {
      const response = await axios.post(
        "https://mesh-1-1.onrender.com/mesh/api/auth/login",
        formData
      );

      if (response.data && response.data.statusCode === 201) {
        // Successfully logged in, response contains the user data and access token
        const { access_token, user } = response.data.data;

        // Store access token (for example, in localStorage or sessionStorage)
        localStorage.setItem("authToken", access_token);

        // Redirect based on user role using window.location
        if (user.role === "client") {
          window.location.href = "/ClientDashboard";
        } else if (user.role === "contractor") {
          window.location.href = "/ContractorDashboard";
        } else {
          setError("Unknown role. Unable to redirect.");
        }
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle error response
      if (error.response) {
        setError(error.response.data.error || "Login failed");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.482a10.971 10.971 0 0116.04 0M2.59 15.953a11.061 11.061 0 0118.82 0M12 6v12m4-6H8"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.227 8.621a4.746 4.746 0 010 6.758m-3.454-3.379a4.746 4.746 0 016.758 0M7.727 8.621a4.746 4.746 0 000 6.758m3.454-3.379a4.746 4.746 0 00-6.758 0"
                />
              </svg>
            )}
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-500 text-center mt-2">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Login"} {/* Change text when loading */}
        </button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
