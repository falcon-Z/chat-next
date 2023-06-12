"use client";

import useAuth from "@falcon-z/app/_hooks/useAuth";

export default function AnnonymousLogin() {
  const { loading } = useAuth();

  return (
    <button
      type="button"
      disabled={loading}
      className="login-button w-full"
      onClick={() => {
        AnnonymousLogin;
      }}
    >
      <span>Login With</span>{" "}
      <span className="inline-block first-letter:uppercase">
        Login Annonymously
      </span>
    </button>
  );
}
