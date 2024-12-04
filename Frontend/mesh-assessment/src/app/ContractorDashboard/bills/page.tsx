"use client"; // Client-side rendering

import { useState, useEffect } from "react";
import CreateBillForm from "@/app/components/billsform";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import ContractorLayout from "../ContractorLayout";

const BillsAndDisputesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState(""); // status filter
  const [bills, setBills] = useState<any[]>([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch("https://nest-mesh.onrender.com/mesh/api/bills", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Ensure you retrieve the token from localStorage or cookies
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bills");
        }

        const result = await response.json();
        console.log("Fetched Result:", result); // Log the entire response

        if (result && Array.isArray(result.data)) {
          setBills(result.data); // Access 'data' property and set it as bills if it's an array
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  // Debugging: Check the status filter and the available bills
  console.log("Status Filter:", statusFilter);
  console.log("Bills Data:", bills);

  const filteredBills = statusFilter
    ? bills.filter((bill) => bill.status === statusFilter)
    : bills;

  // Debugging: Check the filtered bills
  console.log("Filtered Bills:", filteredBills);

  const handleRespondClick = (billId: number) => {
    setBills((prevBills) =>
      prevBills.map((bill) =>
        bill.id === billId ? { ...bill, status: "paid" } : bill
      )
    );
  };

  return (
    <ContractorLayout>
      <h2 className="text-xl font-semibold text-[#1E3A8A]">
        Bills and Client Disputes
      </h2>

     
      <div className="flex justify-between items-center mb-4">
  {/* Filter Section */}
  <Select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    displayEmpty
    className="mb-4"
    inputProps={{ "aria-label": "Filter by status" }}
  >
    <MenuItem value="">All Statuses</MenuItem>
    <MenuItem value="paid">Paid</MenuItem>
    <MenuItem value="unpaid">Unpaid</MenuItem>
    {/* You can add other status options if needed */}
  </Select>

  {/* New Bills Button */}
  <button
    onClick={() => setShowForm(true)}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    New Bills
  </button>
</div>

      {showForm && <CreateBillForm />}

      {/* Loading/Error States */}
      {loading && <p>Loading bills...</p>}
      {error && <p>Error: {error}</p>}

      {/* Bills Table */}
      <TableContainer component={Paper} className="mt-6">
        <Table sx={{ minWidth: 650 }} aria-label="bills and disputes table">
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Due Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBills.length > 0 ? (
              filteredBills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell>{bill.orderId}</TableCell>
                  <TableCell align="right">{bill.amount}</TableCell>
                  <TableCell align="right">{bill.dueDate}</TableCell>
                  <TableCell align="right">{bill.status}</TableCell>
                  <TableCell align="right">{bill.description}</TableCell>
             
                  <TableCell align="right">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="contained" onClick={() => handleRespondClick(bill.id)}>
                        Respond
                      </Button>
                    </motion.div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No bills available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ContractorLayout>
  );
};

export default BillsAndDisputesPage;
