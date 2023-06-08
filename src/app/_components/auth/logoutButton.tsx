"use client";

import { useAuth } from "@falcon-z/app/_hooks/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      type="button"
      className="login-button w-full max-w-sm"
      onClick={() => logout()}
    >
      Logout
    </button>
  );
}
