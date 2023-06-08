"use client";

import { useAuth } from "@falcon-z/app/_hooks/useAuth";
import { OAuthProvider } from "@falcon-z/app/_utils/types";

export default function OAuthLoginButton({
  provider,
}: {
  provider: OAuthProvider;
}) {
  const { login, loading } = useAuth();

  return (
    <button
      type="button"
      disabled={loading}
      className="login-button w-full"
      onClick={() => login(provider)}
    >
      <span>Login With</span>{" "}
      <span className="inline-block first-letter:uppercase">{provider}</span>
    </button>
  );
}
