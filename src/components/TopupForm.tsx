"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const TopupForm: React.FC = () => {
  console.log("TopupForm");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col">
        <h1>Silahkan masukkan</h1>
        <p className="font-bold">Nominal Top Up</p>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-7 items-center">
          <label className="col-span-2 sm:col-span-4 input input-sm py-5 input-bordered flex items-center gap-2 ">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="number"
              placeholder="Cth: 10000"
              className="grow w-full"
            />
          </label>
          <button value="10000" className="btn font-normal">
            Rp10.000
          </button>
          <button value="20000" className="btn font-normal">
            Rp20.000
          </button>
          <button value="50000" className="btn font-normal">
            Rp50.000
          </button>
          <button value="100000" className="btn font-normal">
            Rp100.000
          </button>
          <button value="250000" className="btn font-normal">
            Rp250.000
          </button>
          <button value="500000" className="btn font-normal">
            Rp500.000
          </button>
          <button
            onClick={handleButtonClick}
            className="col-span-2 sm:col-span-4 sm:row-start-2 btn bg-red-500 text-white"
          >
            Bayar
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>Pembayaran _ sebesar</p>
        <p className="font-bold">Rp. _</p>
      </Modal>
    </>
  );
};

export default TopupForm;
