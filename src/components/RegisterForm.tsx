import Link from "next/link";
import React from "react";

const RegisterForm: React.FC = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        sudah punya akun? login <Link href="/login">di sini</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
