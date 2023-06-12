import { useQuery } from "@tanstack/react-query";
import getUserPreference from "../_helpers/users/getUserPreference";

export default function useUserPrefs() {
  return useQuery(["prefs"], getUserPreference{
    retry: false,
    staleTime: Infinity,
    onError: () =>
      console.info("Unabled to retreive User Preferences, Check if user has logged In"),
  });
}
