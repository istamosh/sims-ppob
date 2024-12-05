import DashboardLayout from "@/components/DashboardLayout";
import TransactionMenu from "@/components/TransactionMenu";
import React from "react";

const TransactionPage = () => {
  return (
    <DashboardLayout>
      <TransactionMenu />
    </DashboardLayout>
  );
};

export default TransactionPage;
