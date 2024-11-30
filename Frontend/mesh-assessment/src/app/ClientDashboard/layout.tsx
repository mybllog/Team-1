
import ClientNavbar from '../components/clientNavbar'
import Sidebar from '@/app/components/clientSidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ClientNavbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-2 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

