"use client"; // Ensures the component is client-side
import { useState } from "react";
import { motion } from "framer-motion";
import RegisterForm from "./register"; // Import RegisterForm
import LoginForm from "./login/page";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and registration forms

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 shadow-lg w-[100%] gap-6">
      {/* Left Image Container */}
      <div className="relative w-[50%] h-screen mr-auto bg-blue-600 flex justify-center items-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
        >
          {/* Background Image */}
        </div>

        <div className="z-10 text-white space-y-4">
          <h1 className="text-6xl font-extrabold animate__animated animate__fadeInUp">
            Welcome to <span className="text-yellow-400">Constructly</span>
          </h1>
          <p className="text-2xl font-medium animate__animated animate__fadeInUp animate__delay-1s">
            Building Your Dreams, One Project at a Time
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-600 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Form Container */}
      <div className="p-8 bg-white shadow-xl rounded-lg w-full max-w-md mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {isRegistering ? (
            <RegisterForm />
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                Login to Real Estate
              </h2>

              {/* Login Form */}

              <LoginForm />
            </>
          )}

          {/* Toggle between login and registration */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-blue-600 hover:underline"
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
