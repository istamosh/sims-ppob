import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar: React.FC = () => {
  console.log("Navbar");
  return (
    <div className="flex justify-between py-2 px-4 border border-red-500">
      <Link href="/dashboard">
        <Logo />
      </Link>
      <ul className="flex items-center gap-2 sm:gap-16">
        <li>
          <Link href="/topup">Top Up</Link>
        </li>
        <li>
          <Link href="/transaction">Transaksi</Link>
        </li>
        <li>
          <Link href="/account">Akun</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
