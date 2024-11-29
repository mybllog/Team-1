"use client";
import Sidebar from '../components/contractorSidebar';
import Header from '../components/header';
import { ReactNode } from 'react';

interface ContractorLayoutProps {
  children: ReactNode; 
}

const ContractorLayout = ({ children }: ContractorLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
        {/* header component */}
        <Header/>
        {/* sidebar component */}
      <Sidebar />
      <main className="flex-1 pt-[60px] ml-[260px] px-6 mt-[50px] bg-[#F3F4F6]">{children}</main>
    </div>
  );
};

export default ContractorLayout;
