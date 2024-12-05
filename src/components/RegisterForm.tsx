"use client";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import Logo from "./Logo";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { registerUser } from "@/store/userSlice";

const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [retypePassword, setRetypePassword] = useState("");
  const [retypePasswordError, setRetypePasswordError] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setRetypePasswordError(password !== retypePassword ? true : false);
  }, [password, retypePassword]);

  const validateName = (val: string) => {
    const re = /^[A-Za-z]{4,}$/g;
    setFirstName(val);
    setFirstNameError(!re.test(val) ? true : false);
  };
  const validateLastName = (val: string) => {
    const re = /^[A-Za-z]*$/g;
    setLastName(val);
    setLastNameError(!re.test(val) ? true : false);
  };
  const validateEmail = (val: string) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    setEmail(val.toLowerCase());
    setEmailError(!re.test(val.toLowerCase()) ? true : false);
  };
  const validatePassword = (val: string) => {
    const re = /^.{8,}$/g;
    setPassword(val);
    setPasswordError(!re.test(val) ? true : false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      retypePasswordError
    ) {
      return;
    }
    console.log("HEHE");

    // dispatch(registerUser({ firstName, lastName, email, password }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <Logo />
        <h1 className="font-bold text-xl text-center">
          Lengkapi data untuk membuat akun
        </h1>

        <label className="form-control w-full">
          <label
            className={`input input-sm py-5 input-bordered flex items-center gap-2 ${
              emailError && `input-error`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`h-4 w-4 opacity-70 ${emailError && `text-red-500`}`}
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              className="grow"
              required
            />
          </label>
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt text-error">
              {emailError && `Format email tidak sesuai`}
            </span>
          </div>
        </label>

        <label className="form-control w-full">
          <label
            className={`input input-sm py-5 input-bordered flex items-center gap-2 ${
              firstNameError && `input-error`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`h-4 w-4 opacity-70 ${
                firstNameError && `text-red-500`
              }`}
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              value={firstName}
              onChange={(e) => validateName(e.target.value)}
              placeholder="Nama depan"
              className="grow"
              required
            />
          </label>
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt text-error">
              {firstNameError && `Nama minimal 4 huruf`}
            </span>
          </div>
        </label>

        <label className="form-control w-full">
          <label
            className={`input input-sm py-5 input-bordered flex items-center gap-2 ${
              lastNameError && `input-error`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`h-4 w-4 opacity-70 ${
                lastNameError && `text-red-500`
              }`}
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              value={lastName}
              onChange={(e) => validateLastName(e.target.value)}
              placeholder="Nama belakang"
              className="grow"
            />
          </label>
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt text-error">
              {lastNameError && `Hanya boleh menggunakan huruf`}
            </span>
          </div>
        </label>

        <label className="form-control w-full">
          <label
            className={`input input-sm py-5 input-bordered flex items-center gap-2 ${
              passwordError && `input-error`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`h-4 w-4 opacity-70 ${
                passwordError && `text-red-500`
              }`}
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              placeholder="Buat password"
              className="grow"
              required
            />
          </label>
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt text-error">
              {passwordError && `Password minimal 8 karakter`}
            </span>
          </div>
        </label>

        <label className="form-control w-full">
          <label
            className={`input input-sm py-5 input-bordered flex items-center gap-2 ${
              retypePasswordError && `input-error`
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className={`h-4 w-4 opacity-70 ${
                retypePasswordError && `text-red-500`
              }`}
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              placeholder="Verifikasi password"
              className="grow"
              required
            />
          </label>
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt text-error">
              {retypePasswordError && `Password harus sesuai`}
            </span>
          </div>
        </label>

        <button type="submit" className="btn bg-red-500 text-white mt-4">
          Registrasi
        </button>
      </form>
      <p className="text-sm text-center pt-5">
        Sudah punya akun? login{" "}
        <Link href="/login" className="text-red-500 font-bold">
          di sini.
        </Link>
      </p>
      debug
      {userState.status === "loading" && <p>Loading...</p>}
      {userState.status === "failed" && <p>Error: {userState.error}</p>}
    </div>
  );
};

export default RegisterForm;
