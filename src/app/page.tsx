"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainPage: React.FC = () => {
  console.log("MainPage");

  const router = useRouter();
  useEffect(() => {
    router.push("/register");
  }, [router]);

  // will implement spinner
  return null;
};

export default MainPage;
