import ContractorLayout from "../../ContractorLayout";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
export default function WorkOrdersList({ params }) {
  const { id } = params;
  return (
    <ContractorLayout>
      <div className="container mx-auto p-4">
        {/* Back Button */}
        <button className="flex items-center justify-center text-white mb-4 border rounded-lg  px-6 py-2 bg-blue-700">
          <Link href="/ContractorDashboard/workOrders" passHref>
            <div className="flex items-center">
              <IoArrowBack className="mr-2" />
              Back
            </div>
          </Link>
        </button>

        <h1 className="text-2xl font-bold mb-4">Work Order Details</h1>
        <p>
          This is the detail page for work order <strong>{id}</strong>.
        </p>
        {/* Add more details here */}
      </div>
    </ContractorLayout>
  );
}
