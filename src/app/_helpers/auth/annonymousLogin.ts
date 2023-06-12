import { account } from "@falcon-z/app/_utils/config";

export default async function AnnonymousLogin() {
  account.createAnonymousSession();
}
