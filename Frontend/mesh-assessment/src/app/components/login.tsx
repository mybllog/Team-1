"use client"; // Ensures the component is client-side
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import dummyUsers from "@/app/data/user";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Find user by email and password
    const user = dummyUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      // Redirect based on user role
      if (user.role === "client") {
        window.location.href = "/ClientDashboard"; // Redirect to client dashboard
      } else if (user.role === "contractor") {
        window.location.href = "/ContractorDashboard"; // Redirect to contractor dashboard
      }
    } else {
      setError("Invalid username or password");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmVisibility = () => {
    setConfirmPassword((prev) => !prev);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 shadow-lg w-full gap-6">
      {/* Left Image Container */}
      <div className="relative w-[50%] h-screen mr-auto  bg-white shadow-2xl">
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

          {/* Login Form */}
          {!isRegistering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Form-Input */}
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
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                  required
                />

                {/* Eye icon */}
                <button
                  type="button"
                  title="Show password"
                  onClick={togglePasswordVisibility}
                  className="relative inset-y-0 right-[11%] left-[90%] top-[-48px] flex items-center"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600"
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
                      className="w-5 h-5 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.227 8.621a4.746 4.746 0 010 6.758m-3.454-3.379a4.746 4.746 0 016.758 0M7.727 8.621a4.746 4.746 0 000 6.758m3.454-3.379a4.746 4.746 0 00-6.758 0"
                      />
                    </svg>
                  )}
                </button>
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
      </div>
    </div>
  );
}
