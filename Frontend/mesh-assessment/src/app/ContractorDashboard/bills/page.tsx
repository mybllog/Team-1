"use client"; // Client-side rendering

import { useState } from "react";
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
  const [statusFilter, setStatusFilter] = useState("");
  const [bills, setBills] = useState([
    {
      id: 1,
      client: "John Doe",
      amount: "$500",
      date: "2024-11-20",
      status: "unresolved",
    },
    {
      id: 2,
      client: "Jane Smith",
      amount: "$1200",
      date: "2024-11-18",
      status: "resolved",
    },
    {
      id: 3,
      client: "Mark Lee",
      amount: "$800",
      date: "2024-11-15",
      status: "unresolved",
    },
  ]);

  const filteredBills = bills.filter((bill) => {
    return statusFilter ? bill.status === statusFilter : true;
  });

  const handleRespondClick = (billId: number) => {
    setBills((prevBills) =>
      prevBills.map((bill) =>
        bill.id === billId ? { ...bill, status: "resolved" } : bill
      )
    );
  };

  return (
    <ContractorLayout>
      <h2 className="text-xl font-semibold text-[#1E3A8A]">
        Bills and Client Disputes
      </h2>

      {/* Filter Section */}
      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        displayEmpty
        className="mb-4"
        inputProps={{ "aria-label": "Filter by status" }}
      >
        <MenuItem value="">All Statuses</MenuItem>
        <MenuItem value="resolved">Resolved</MenuItem>
        <MenuItem value="unresolved">Unresolved</MenuItem>
      </Select>

      {/* Bills Table */}
      <TableContainer component={Paper} className="mt-6">
        <Table sx={{ minWidth: 650 }} aria-label="bills and disputes table">
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBills.map((bill) => (
              <TableRow key={bill.id}>
                <TableCell>{bill.client}</TableCell>
                <TableCell align="right">{bill.amount}</TableCell>
                <TableCell align="right">{bill.date}</TableCell>
                <TableCell align="right">{bill.status}</TableCell>
                <TableCell align="right">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleRespondClick(bill.id)}
                    >
                      Respond
                    </Button>
                  </motion.div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContractorLayout>
  );
};

export default BillsAndDisputesPage;
