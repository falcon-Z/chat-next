"use client";

import OAuthLogin from "@falcon-z/app/_helpers/auth/oAuthLogin";
import { OAuthProvider } from "@falcon-z/app/_utils/types";
import { useState } from "react";

export default function OAuthLoginButton({
  provider,
  loading,
}: {
  provider: OAuthProvider;
  loading: boolean;
}) {
  const [isLoading, setIsLoading] = useState(loading);

  return (
    <button
      type="button"
      disabled={loading}
      className="login-button w-full"
      onClick={() => {
        setIsLoading(true);
        OAuthLogin(provider);
      }}
    >
      <span>Login With</span>{" "}
      <span className="inline-block first-letter:uppercase">{provider}</span>
    </button>
  );
}
