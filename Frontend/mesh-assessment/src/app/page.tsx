// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
  

"use client"; // Ensures the component is client-side
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const LoginRegisterPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

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
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-md">
                Login
              </button>
              <p className="text-sm text-center mt-4 text-blue-500">
                Don't have an account?{' '}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsRegistering(true)}
                >
                  Register
                </span>
              </p>
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
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-md">
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

export default LoginRegisterPage;

