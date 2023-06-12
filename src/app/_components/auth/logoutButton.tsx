"use client";

import useAuth from "@falcon-z/app/_hooks/useAuth";

export default function LogoutButton() {
  const { Logout } = useAuth();
  return (
    <button
      type="button"
      className="login-button w-full max-w-sm"
      onClick={() => Logout()}
    >
      Logout
    </button>
  );
}
