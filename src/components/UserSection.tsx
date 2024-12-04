import Image from "next/image";
import React from "react";

const UserSection = () => {
  return (
    <div className="flex gap-4">
      <div className="w-2/5 border border-red-500">
        <img src="/assets/Profile Photo.png" alt="" />
        <p>Selamat datang,</p>
        <p className="font-bold text-2xl">John Wick</p>
      </div>
      <div className="w-3/5 border border-red-500 relative">
        <Image
          src="/assets/Background Saldo.png"
          alt="bg-saldo"
          width={670}
          height={161}
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 text-white p-4 h-full flex flex-col justify-between">
          <p>Saldo Anda</p>
          <p className="font-bold text-2xl">Rp. 0</p>
          <button className="text-sm">Tutup Saldo</button>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
