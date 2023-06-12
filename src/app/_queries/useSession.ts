import { useQuery } from "@tanstack/react-query";
import getCurrentSession from "../_helpers/users/getCurrentSession";

export default function useSession() {
  return useQuery(["session"], getCurrentSession, {
    retry: false,
    staleTime: Infinity,
    onError: () =>
      console.info(
        "Unable to retreive session data, Check if user has logged In"
      ),
  });
}
