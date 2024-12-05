import Image from "next/image";
import Link from "next/link";
import React from "react";

const menu = [
  { label: "PBB", href: "/menu/pbb", img: "PBB" },
  { label: "Listrik", href: "/menu/listrik", img: "Listrik" },
  { label: "Pulsa", href: "/menu/pulsa", img: "Pulsa" },
  { label: "PDAM", href: "/menu/pdam", img: "PDAM" },
  { label: "PGN", href: "/menu/pgn", img: "PGN" },
  { label: "TV Langganan", href: "/menu/tv-langganan", img: "Televisi" },
  { label: "Musik", href: "/menu/musik", img: "Musik" },
  { label: "Voucher Game", href: "/menu/voucher-game", img: "Game" },
  {
    label: "Voucher Makanan",
    href: "/menu/voucher-makanan",
    img: "Voucher Makanan",
  },
  { label: "Kurban", href: "/menu/kurban", img: "Kurban" },
  { label: "Zakat", href: "/menu/zakat", img: "Zakat" },
  { label: "Paket Data", href: "/menu/paket-data", img: "Paket Data" },
];
const banners = 5;

const DashboardMenu: React.FC = () => {
  console.log("DashboardMenu");
  return (
    <div className="flex flex-col">
      <ul className="flex justify-center flex-wrap 2xl:justify-evenly gap-1 w-full overflow-x-auto">
        {menu.map((item, i) => (
          <li
            key={`menu-${i}`}
            className="min-w-[75px] w-[75px] border border-red-500"
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
              <p className="break-words text-center text-xs leading-none">
                {item.label}
              </p>
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
