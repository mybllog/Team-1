"use client"; // Ensures the component is client-side
import Image from 'next/image';
import { useState} from 'react';
import { motion } from 'framer-motion';
import dummyUsers from "@/app/data/user";

export default function LoginPage () {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: ""});
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
//   <HTMLFormElement>
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = dummyUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password 
    );
    if (user) {
        // Redirect to another page
        window.location.href = "/ContractorDashboard";
    } else {
      setError("Invalid username or password");
    }
  }
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full gap-6">
      {/* Left Image Container */}
      <div className="relative w-[50%] h-screen mr-auto" >
        <Image
          src="/realestate.png"
          alt="Real Estate"
          layout="fill"
          objectFit="cover"
          className=" w-full"
        />
      </div>

      {/* Right Form Container */}
      <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] max-w-md mr-28 h-[500px]">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            {isRegistering ? 'Register' : 'Login'} to Real Estate
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
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                  required
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                  required
                />

                {/* Eye icon */}
                <button
                  type="button"
                  title='Show password'
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
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md">
                    Login
                  </button>
                  <p className="text-sm text-center mt-4 text-blue-500">
                    Dont have an account?{' '}
                    <span
                      className="text-blue-600 cursor-pointer"
                      onClick={() => setIsRegistering(true)}
                    >
                      Register
                    </span>
                  </p>
              </form>
            </motion.div>
          )} 
          {/* Registration Form */}
              {isRegistering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    // name='username'
                    // value={formData.username}
                    // onChange={handleChange}
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    // name='email'
                    // value={formData.email}
                    // onChange={handleChange}
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                    required
                  />
                  <input
                    type={confirmPassword ? 'text' : 'password'}
                    placeholder="Password"
                    // name='password'
                    // value={formData.password}
                    // onChange={handleChange}
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                    required
                  />
                  {/* Eye icon */}
                  <button
                    type="button"
                    title='Show password'
                    onClick={toggleConfirmVisibility}
                    className="relative inset-y-0 right-[11%] left-[92%] top-[-50px] flex items-center"
                  >
                {confirmPassword ? (
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
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    // name='password'
                    // value={formData.password}
                    // onChange={handleChange}
                    className="w-full mb-4 p-3 border border-gray-300 rounded-md outline-none"
                    required
                  />
                  <button type='submit' className="w-full bg-blue-600 text-white py-3 rounded-md">
                    Register
                  </button>
                  <p className="text-sm text-center mt-4 text-blue-400">
                    Already have an account?{' '}
                    <span
                      className="text-blue-600 cursor-pointer"
                      onClick={() => setIsRegistering(false)}
                    >
                      Login
                    </span>
                  </p>
                </motion.div>
              )}
        </motion.div>
      </div>
    </div>
  );
};