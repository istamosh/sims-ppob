import Image from "next/image";
import React from "react";

const AccountForm = () => {
  return (
    <div className="flex flex-col items-center w-1/2 mx-auto">
      <button className="relative my-4">
        <Image
          src="/assets/Profile Photo.png"
          alt=""
          width={100}
          height={100}
        />
        <div className="absolute bottom-0 right-0 flex justify-center items-center rounded-full border border-black bg-white w-6 h-6">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 opacity-90 text-gray-800 dark:text-white"
          >
            <path
              fillRule="evenodd"
              d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      <h1 className="font-bold text-2xl">John Wick</h1>

      <label className="form-control w-full mb-1">
        <div className="label">
          <span className="label-text font-bold">Email</span>
        </div>
        <label className="input input-sm py-5 input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4 opacity-50 text-gray-800 dark:text-white"
          >
            <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
          </svg>
          <input type="email" placeholder="Edit email Anda" className="grow" />
        </label>
      </label>

      <label className="form-control w-full mb-1">
        <div className="label">
          <span className="label-text font-bold">Nama Depan</span>
        </div>
        <label className="input input-sm py-5 input-bordered flex items-center gap-2">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 opacity-70 text-gray-800 dark:text-white"
          >
            <path
              fillRule="evenodd"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Edit nama depan Anda"
            className="grow"
          />
        </label>
      </label>

      <label className="form-control w-full mb-1">
        <div className="label">
          <span className="label-text font-bold">Nama Belakang</span>
        </div>
        <label className="input input-sm py-5 input-bordered flex items-center gap-2">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 opacity-70 text-gray-800 dark:text-white"
          >
            <path
              fillRule="evenodd"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Edit nama belakang Anda"
            className="grow"
          />
        </label>
      </label>

      <button className="btn bg-red-500 text-white w-full my-1">
        Edit Profil
      </button>
      <button className="btn btn-outline text-red-500 w-full my-1 hover:bg-red-500 hover:border-none ">
        Logout
      </button>
    </div>
  );
};

export default AccountForm;

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  className="w-4 h-4 opacity-70 text-gray-800 dark:text-white"
>
  <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
</svg>;
