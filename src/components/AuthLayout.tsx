import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="auth-layout" className="flex justify-between w-screen h-screen">
      <div
        id="auth-form"
        className="flex justify-center grow px-4 overflow-y-scroll"
      >
        {children}
      </div>
      <div id="auth-image" className="hidden sm:block max-w-[50%] max-h-screen">
        <Image
          src="/assets/Illustrasi Login.png"
          alt="Side Image"
          className="max-h-screen max-w-full object-fill"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
