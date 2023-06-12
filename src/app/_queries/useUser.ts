import { useQuery } from "@tanstack/react-query";
import GetCurrentUser from "../_helpers/users/getCurrentUser";

export default function useUser() {
  return useQuery(["user"], GetCurrentUser, {
    retry: false,
    onError: () =>
      console.info("Unabled to locate User, Check if user has logged In"),
  });
}
