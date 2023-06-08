import { useQuery } from "@tanstack/react-query";
import getCurrentSession from "../_helpers/users/getCurrentSession";

export default function useSession() {
  return useQuery(["session"], getCurrentSession);
}
