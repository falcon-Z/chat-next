import { account } from "@falcon-z/app/_utils/config";

export default async function GetCurrentUser() {
  const user = await account.get();
  return user;
}
