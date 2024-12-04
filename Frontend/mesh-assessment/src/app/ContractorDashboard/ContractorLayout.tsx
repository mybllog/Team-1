"use client";
import HeaderAndSidebar from '../components/contractorHeaderandSidebar';
import { ReactNode } from 'react';

interface ContractorLayoutProps {
  children: ReactNode; 
}

const ContractorLayout = ({ children }: ContractorLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
        {/* Header and Sidebar */}
        <HeaderAndSidebar/>
        
        {/* Main Content */}
        <main className="flex-1 pt-[60px] mt-[50px] px-6 bg-[#F3F4F6] transition-all duration-300 ml-[0px] lg:ml-[260px] w-full">
          {children}
        </main>
    </div>
  );
};

export default ContractorLayout;
