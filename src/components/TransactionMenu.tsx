import React from "react";

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const TransactionMenu: React.FC = () => {
  console.log("TransactionMenu");
  return (
    <div className="flex flex-col">
      <h2 className="font-bold">Semua Transaksi</h2>
      <ul className="flex flex-row gap-2 flex-wrap">
        {months.map((month) => (
          <li key={month}>
            <button className="opacity-50 hover:opacity-100 hover:font-bold">
              {month}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionMenu;
