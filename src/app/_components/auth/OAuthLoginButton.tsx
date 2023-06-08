"use client";

import OAuthLogin from "@falcon-z/app/_helpers/auth/oAuthLogin";
import { useAuth } from "@falcon-z/app/_hooks/useAuth";
import { OAuthProvider } from "@falcon-z/app/_utils/types";

export default function OAuthLoginButton({
  provider,
  loading,
}: {
  provider: OAuthProvider;
  loading: boolean;
}) {
  return (
    <button
      type="button"
      disabled={loading}
      className="login-button w-full"
      onClick={() => OAuthLogin(provider)}
    >
      <span>Login With</span>{" "}
      <span className="inline-block first-letter:uppercase">{provider}</span>
    </button>
  );
}
