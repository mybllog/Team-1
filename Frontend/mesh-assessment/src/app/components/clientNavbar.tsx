// ClientNavbar.tsx
import Link from 'next/link';
const ClientNavbar = () => {
    return (
      <nav className="bg-[#1E3A8A] text-white w-full p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Client Dashboard</div>
          <ul className="flex space-x-6 justify-end ml-auto gap-12">
            <li>
              <a href="/ClientDashboard" className="hover:text-gray-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/ClientDashboard/profile" className="hover:text-gray-300">
                Profile
              </a>
            </li>
            <li>
              <a href="/ClientDashboard/work-orders" className="hover:text-gray-300">
                Work orders
              </a>
            </li>
            <li>
              <a href="/ClientDashboard/bills" className="hover:text-gray-300 mr-4">
                Bills/payment
              </a>
            </li>
          </ul>
          <button className="bg-blue-600 px-4 py-2 mr-4 rounded hover:bg-blue-500">
            <Link href="/"> Logout</Link>
          </button>
        </div>
      </nav>
    );
  };
  
  export default ClientNavbar;
  