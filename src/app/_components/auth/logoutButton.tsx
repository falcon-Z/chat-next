"use client";

import { account } from "@falcon-z/app/_utils/config";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const queryClienet = useQueryClient();

  async function Logout() {
    await account.deleteSession("current");
    await queryClienet.invalidateQueries();
    await queryClienet.resetQueries();
    router.replace("auth");
  }

  return (
    <button
      type="button"
      className="login-button w-full max-w-sm"
      onClick={() => Logout()}
    >
      Logout
    </button>
  );
}
