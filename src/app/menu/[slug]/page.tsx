"use client";
import DashboardLayout from "@/components/DashboardLayout";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const captions = {
  pbb: { img: "PBB", caption: "Pajak Bumi dan Bangunan" },
  listrik: { img: "Listrik", caption: "Listrik Prabayar" },
  pulsa: { img: "Pulsa", caption: "Pulsa" },
  pdam: { img: "PDAM", caption: "PDAM" },
  pgn: { img: "PGN", caption: "PGN" },
  "tv-langganan": { img: "Televisi", caption: "TV Berlangganan" },
  musik: { img: "Musik", caption: "Musik" },
  "voucher-game": { img: "Game", caption: "Voucher Game" },
  "voucher-makanan": { img: "Voucher Makanan", caption: "Voucher Makanan" },
  kurban: { img: "Kurban", caption: "Kurban" },
  zakat: { img: "Zakat", caption: "Zakat" },
  "paket-data": { img: "Paket Data", caption: "Paket Data" },
};

type SlugType = keyof typeof captions;

const MenuPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = useParams() as { slug: SlugType };

  useEffect(() => {
    const modal = document.getElementById(
      "confirm-payment"
    ) as HTMLDialogElement;
    if (isModalOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isModalOpen]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <h1>Pembayaran</h1>
        <div className="flex flex-row items-center">
          <Image
            src={`/assets/${
              typeof captions[slug] === "object"
                ? captions[slug].img
                : captions[slug]
            }.png`}
            alt=""
            width={30}
            height={30}
            className="mr-4"
          />
          <p className="font-bold">
            {typeof captions[slug] === "object"
              ? captions[slug].caption
              : captions[slug]}
          </p>
        </div>
        <label className="input input-sm py-5 input-bordered flex items-center gap-2">
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
          <input type="number" placeholder="Cth: 10000" className="grow" />
        </label>
        <button
          onClick={handleButtonClick}
          className="btn bg-red-500 text-white my-4"
        >
          Bayar
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>Pembayaran _ sebesar</p>
        <p className="font-bold">Rp. _</p>
      </Modal>
    </DashboardLayout>
  );
};

export default MenuPage;
