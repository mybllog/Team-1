"use client"; // Ensures the component is client-side
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye ,EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [confirmPassword, setConfirmPassword] = useState(false); // Toggle confirm password visibility
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "", // For registration
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://nest-mesh.onrender.com/mesh/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();

      if (data.role === "client") {
        window.location.href = "/ClientDashboard";
      } else if (data.role === "contractor") {
        window.location.href = "/ContractorDashboard";
      }
    } catch (err) {
      setError((err as Error).message || "An unknown error occurred");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      alert("Registration successful! Please log in.");
      setIsRegistering(false); // Switch to login
    } catch (err) {
      setError((err as Error).message || "An unknown error occurred");
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmVisibility = () => setConfirmPassword((prev) => !prev);

  const toggleRegistering = () => {
    setError(""); // Clear errors when switching
    setIsRegistering((prev) => !prev);
    setFormData({ email: "", password: "", confirmPassword: "" }); // Reset form
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 shadow-lg w-full gap-6">
      {/* Left Image Container */}
      <div className="relative w-[50%] h-screen mr-auto bg-white shadow-2xl">
        <Image
          src="/est2.jpg"
          alt="Real Estate"
          layout="responsive"
          width={200}
          height={300}
          objectFit="cover"
          className="w-full flex justify-center items-center mt-11"
        />
      </div>

      {/* Right Form Container */}
      <div className="p-6 bg-white shadow-2xl rounded-lg w-[70%] max-w-md mr-[300px] h-[500px]">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            {isRegistering ? "Register" : "Login"} to Real Estate
          </h2>

      

          {/* Registration Form */}
          {isRegistering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <form onSubmit={handleRegister}>
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
                    className="absolute inset-y-0 right-4 top-[50%] transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff/> : <Eye/>}
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={confirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmVisibility}
                    className="absolute inset-y-0 right-4 top-[50%] transform -translate-y-1/2"
                  >
                    {confirmPassword ? "Hide" : "Show"}
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
                >
                  Register
                </button>
              </form>
            </motion.div>
          )}

          {/* Login Form */}
          {!isRegistering && (
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
                    className="absolute inset-y-0 right-4 top-[50%] transform -translate-y-1/2"
                  >
                     {showPassword ? <EyeOff/> : <Eye/>}
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
                >
                  Login
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>
            {/* Toggle Form */}
            <button
            onClick={toggleRegistering}
            className="text-blue-600 text-sm underline mb-4  mt-8 block mx-auto"
          >
            {isRegistering
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
      </div>
      
    </div>
  );
}
