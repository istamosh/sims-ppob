import Image from "next/image";
import Link from "next/link";
import React from "react";

const menu = [
  { label: "PBB", href: "/pbb", img: "PBB" },
  { label: "Listrik", href: "/listrik", img: "Listrik" },
  { label: "Pulsa", href: "/pulsa", img: "Pulsa" },
  { label: "PDAM", href: "/pdam", img: "PDAM" },
  { label: "PGN", href: "/pgn", img: "PGN" },
  { label: "TV Langganan", href: "/tv-langganan", img: "Televisi" },
  { label: "Musik", href: "/musik", img: "Musik" },
  { label: "Voucher Game", href: "/voucher-game", img: "Game" },
  {
    label: "Voucher Makanan",
    href: "/voucher-makanan",
    img: "Voucher Makanan",
  },
  { label: "Kurban", href: "/kurban", img: "Kurban" },
  { label: "Zakat", href: "/zakat", img: "Zakat" },
  { label: "Paket Data", href: "/paket-data", img: "Paket Data" },
];
const banners = 5;

const DashboardMenu = () => {
  return (
    <div className="flex flex-col">
      <ul className="flex justify-between 2xl:justify-evenly gap-1 w-full overflow-x-auto">
        {menu.map((item, i) => (
          <li
            key={`menu-${i}`}
            className="min-w-[75px] max-w-[100px] border border-red-500"
          >
            <Link
              href={item.href}
              className="flex flex-col items-center h-full"
            >
              <Image
                src={`/assets/${item.img}.png`}
                alt={item.label}
                width={50}
                height={50}
              />
              <p className="break-words text-center text-xs">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <p className="font-bold text-sm">Temukan promo menarik</p>
        <ul className="flex justify-between 2xl:justify-center gap-4 w-full overflow-x-auto">
          {new Array(banners).fill(0).map((_, i) => (
            <li
              key={`banner-${i}`}
              className="min-w-[250px] max-w-[300px] border border-red-500"
            >
              <Link href={`/promo-${i + 1}`}>
                <Image
                  src={`/assets/Banner ${i + 1}.png`}
                  alt={`promo-${i + 1}`}
                  width={270}
                  height={121}
                  quality={100}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;
