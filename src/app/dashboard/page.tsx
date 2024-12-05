import DashboardLayout from "@/components/DashboardLayout";
import DashboardMenu from "@/components/DashboardMenu";
import React from "react";

const DashboardPage: React.FC = () => {
  console.log("DashboardPage");
  return (
    <DashboardLayout>
      <DashboardMenu />
    </DashboardLayout>
  );
};

export default DashboardPage;
