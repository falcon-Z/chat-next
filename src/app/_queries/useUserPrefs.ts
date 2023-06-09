import { useQuery } from "@tanstack/react-query";
import getUserPreference from "../_helpers/users/getUserPreference";

export default function useUserPrefs() {
  return useQuery(["userPrefs"], getUserPreference);
}
