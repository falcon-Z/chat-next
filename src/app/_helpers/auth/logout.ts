import { account } from "@falcon-z/app/_utils/config";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Logout() {
  const queryClienet = useQueryClient();

  const router = useRouter();

  account.deleteSession("current");
  queryClienet.invalidateQueries();
  router.replace("auth");
}
