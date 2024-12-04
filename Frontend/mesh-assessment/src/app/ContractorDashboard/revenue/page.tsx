// "use client"; // Client-side rendering

// import { Button, TextField, Box, Paper } from '@mui/material';
// import { motion } from 'framer-motion';
import ContractorLayout from '../ContractorLayout';
import CreateRevenueForm from '@/app/components/revenue';


const RevenueReportPage = () => {
  return (
    <ContractorLayout>
      <h2 className="text-xl font-semibold text-[#1E3A8A]">Revenue Report</h2>
      <CreateRevenueForm />
    </ContractorLayout>
  );
};

export default RevenueReportPage;
