import { account } from "@falcon-z/app/_utils/config";

export default async function getCurrentSession() {
  const session = await account.getSession("current");

  return session;
}
