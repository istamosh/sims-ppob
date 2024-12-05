import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center gap-x-1">
      <img src="/assets/Logo.png" alt="logo sims-ppob" />
      <p className="flex items-center font-bold">SIMS PPOB</p>
    </div>
  );
};

export default Logo;
