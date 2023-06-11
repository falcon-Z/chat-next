import { account } from "@falcon-z/app/_utils/config";
import { OAuthProvider } from "@falcon-z/app/_utils/types";

export default function OAuthLogin(provider: OAuthProvider) {
  account.createOAuth2Session(
    provider,
    `${process.env.NEXT_PUBLIC_URI}auth?success`,
    `${process.env.NEXT_PUBLIC_URI}auth?failed`
  );
}
