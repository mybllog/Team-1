"use client"; // Client-side rendering
import { useState } from 'react';
import { Button, TextField, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ContractorLayout from '../ContractorLayout';

const RevenueReportPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalRevenue, setTotalRevenue] = useState(0);

  // Sample revenue data with single date
  const revenueData = [
    { date: '2024-11-01', revenue: 500 },
    { date: '2024-11-05', revenue: 300 },
    { date: '2024-11-10', revenue: 700 },
    { date: '2024-11-15', revenue: 1200 },
    { date: '2024-11-20', revenue: 400 },
  ];

  // Handle report generation
  const handleGenerateReport = () => {
    if (!startDate || !endDate) {
      alert('Please specify both start and end dates.');
      return;
    }

    const filteredRevenue = revenueData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    });

    const total = filteredRevenue.reduce((acc, item) => acc + item.revenue, 0);
    setTotalRevenue(total);
  };

  return (
    <ContractorLayout>
      <h2 className="text-xl font-semibold text-[#1E3A8A]">Revenue Report</h2>

      {/* Filter Section */}
      <Box className="mt-6" component={Paper} elevation={3} p={3}>
        <div className="mb-4">
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </div>
        <div className="mb-4">
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            onClick={handleGenerateReport}
            fullWidth
            color="primary"
          >
            Generate Report
          </Button>
        </motion.div>
      </Box>

      {/* Total Revenue */}
      {totalRevenue >= 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue:</h3>
          <div className="text-xl font-bold text-green-600">${totalRevenue}</div>
        </div>
      )}
    </ContractorLayout>
  );
};

export default RevenueReportPage;
