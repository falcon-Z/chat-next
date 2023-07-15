"use client";

import useAuth from "@falcon-z/app/_hooks/useAuth";
import { OAuthProvider } from "@falcon-z/app/_utils/types";

export default function OAuthLoginButton({
  provider,
}: {
  provider: OAuthProvider;
}) {
  const { loading, OAuthLogin } = useAuth();

  return (
    <button
      type="button"
      disabled={loading}
      className="glass btn-block btn-circle btn "
      onClick={() => {
        OAuthLogin(provider);
      }}
    >
      <span>Login With</span>{" "}
      <span className="inline-block first-letter:uppercase">{provider}</span>
    </button>
  );
}
