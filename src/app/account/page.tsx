import AccountForm from "@/components/AccountForm";
import Navbar from "@/components/Navbar";
import React from "react";

const AccountPage: React.FC = () => {
  console.log("AccountPage");
  return (
    <>
      <Navbar />
      <AccountForm />
    </>
  );
};

export default AccountPage;
