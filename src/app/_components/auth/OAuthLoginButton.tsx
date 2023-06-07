import { OAuthProvider } from "@falcon-z/app/_utils/types";

export default function OAuthLoginButton({
  provider,
}: {
  provider: OAuthProvider;
}) {
  return (
    <button type="button" className="login-button w-full">
      <span>Login With</span>{" "}
      <span className="inline-block first-letter:uppercase">{provider}</span>
    </button>
  );
}
