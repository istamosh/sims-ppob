import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import UserSection from "./UserSection";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-4">
        <UserSection />
        <div>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
