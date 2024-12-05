import DashboardLayout from "@/components/DashboardLayout";
import TopupForm from "@/components/TopupForm";
import React from "react";

const TopupPage: React.FC = () => {
  console.log("TopupPage");
  return (
    <DashboardLayout>
      <TopupForm />
    </DashboardLayout>
  );
};

export default TopupPage;
