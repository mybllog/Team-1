import Link from 'next/link'
import { Home, FileText, ClipboardList, CreditCard } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/ClientDashboard', icon: Home },
  { name: 'Quote Requests', href: '/ClientDashboard/quote-request', icon: FileText },
  { name: 'Work Orders', href: '/ClientDashboard/work-orders', icon: ClipboardList },
  { name: 'Bills', href: '/ClientDashboard/bills', icon: CreditCard },
]

export default function Sidebar() {
  return (
    <div className="bg-[#1E3A8A] w-[17%] text-white w-64 pt-[100px] py-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav className='space-y-[40px]'>
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            <item.icon className="inline-block w-5 h-5 mr-2" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

