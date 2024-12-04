import React from "react";

const UserSection = () => {
  return (
    <div className="flex gap-4">
      <div className="w-2/5 border border-red-500">
        <img src="/assets/Profile Photo.png" alt="" />
        <p>Selamat datang,</p>
        <p className="font-bold text-2xl">John Wick</p>
      </div>
      <div className="w-3/5 bg-red-500 rounded-lg"></div>
    </div>
  );
};

export default UserSection;
