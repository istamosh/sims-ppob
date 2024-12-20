import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage: React.FC = () => {
  console.log("LoginPage");
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
