"use client"; // Client-side rendering

import { useState } from "react";
import Link from "next/link";
import CreateQuoteForm from "@/app/components/quoteform";

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
  Tooltip,
} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { styled } from "@mui/material/styles";
import ContractorLayout from "../ContractorLayout";

const FilterContainer = styled("div")`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const QuoteStatus = styled("span")<{ status: string }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  background-color: ${({ status }) => {
    switch (status) {
      case "approved":
        return "green";
      case "pending":
        return "orange";
      case "rejected":
        return "red";
      default:
        return "gray";
    }
  }};
`;

const QuotesPage = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showForm, setShowForm] = useState(false);


  // Sample quote data
  const quotes = [
    {
      id: 1,
      contractor: "John Doe",
      amount: "$500",
      date: "2024-11-20",
      status: "pending",
    },
    {
      id: 2,
      contractor: "Jane Smith",
      amount: "$1200",
      date: "2024-11-18",
      status: "approved",
    },
    {
      id: 3,
      contractor: "Mark Lee",
      amount: "$800",
      date: "2024-11-15",
      status: "rejected",
    },
  ];

  // Filtered quotes based on the selected filters
  const filteredQuotes = quotes.filter((quote) => {
    const matchesStatus = statusFilter ? quote.status === statusFilter : true;
    const matchesDate = dateFilter ? quote.date.includes(dateFilter) : true;
    return matchesStatus && matchesDate;
  });

  return (
    <ContractorLayout>
      <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Quotes</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Quote  
        </button>
      </div>
      {showForm && (
        <CreateQuoteForm/>
      )}
        {/* Filter Section */}
        <FilterContainer>
          {/* Status Filter */}
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Filter by status" }}
            className="w-1/4"
          >
            <MenuItem value="">All Statuses</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>

          {/* Date Filter */}
          <Select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Filter by date" }}
            className="w-1/4"
          >
            <MenuItem value="">All Dates</MenuItem>
            <MenuItem value="2024-11">November 2024</MenuItem>
            <MenuItem value="lastWeek">Last Week</MenuItem>
            <MenuItem value="lastMonth">Last Month</MenuItem>
          </Select>
        </FilterContainer>

        {/* Quotes Table */}
        <TableContainer component={Paper} className="mt-6">
          <Table sx={{ minWidth: 650 }} aria-label="quotes table">
            <TableHead>
              <TableRow>
                <TableCell>Contractor</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredQuotes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No quotes found
                  </TableCell>
                </TableRow>
              ) : (
                filteredQuotes.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell>{quote.contractor}</TableCell>
                    <TableCell align="right">{quote.amount}</TableCell>
                    <TableCell align="right">{quote.date}</TableCell>
                    <TableCell align="right">
                      <QuoteStatus status={quote.status}>
                        {quote.status}
                      </QuoteStatus>
                    </TableCell>
                    <TableCell align="right">
                      <Link href={`/ContractorDashboard/quoteRequest/${quote.id}`} passHref>
                        <Tooltip title="Expand">
                          <Button>
                            <OpenInFullIcon className="text-black" />
                          </Button>
                        </Tooltip>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ContractorLayout>
  );
};

export default QuotesPage;
