"use client"; // Client-side rendering
import Link from 'next/link';
import { Home, FileText, ClipboardList, CreditCard} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Dashboard', href: '/ClientDashboard', icon: Home },
  { name: 'Quote Requests', href: '/ClientDashboard/quote-request', icon: FileText },
  { name: 'Work Orders', href: '/ClientDashboard/work-orders', icon: ClipboardList },
  { name: 'Bills', href: '/ClientDashboard/bills', icon: CreditCard },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Menu Toggle Button */}
      <button
        className="hidden md:block"  
        // onClick={() => setIsOpen(!isOpen)}
        // aria-label="Toggle Sidebar"
      >
        {/* {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-[#1E3A8A] w-64 h-full text-white pt-[100px] py-6 px-2 fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}
      >
        <nav className="space-y-[40px]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              <item.icon className="inline-block w-5 h-5 mr-2" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile View */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
