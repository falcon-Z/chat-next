import { account } from "@falcon-z/app/_utils/config";

export default async function getUserPreference() {
  const prefs = await account.getPrefs();

  return prefs;
}
