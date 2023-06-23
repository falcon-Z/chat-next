"use client";

import { use, useEffect, useState } from "react";
import useSession from "../_queries/useSession";
import useUser from "../_queries/useUser";
import useUserPrefs from "../_queries/useUserPrefs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getUserInfoFromGithub from "../_helpers/users/getUserProfileFromGithub";
import { account } from "../_utils/config";
import { Models } from "appwrite";
import { AuthContext } from "../_hooks/useAuth";
import { OAuthProvider } from "../_utils/types";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] =
    useState<Models.User<Models.Preferences> | null>(null);

  const queryClient = useQueryClient();

  const user = useUser();

  useEffect(() => {
    if (user.data) {
      setCurrentUser(user.data);
      setLoading(false);
    } else if (user.isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [user.data, user.isLoading]);

  const OAuthLogin = async (provider: OAuthProvider) => {
    setLoading(true);
    account.createOAuth2Session(
      provider,
      `${process.env.NEXT_PUBLIC_URI}/auth?success`,
      `${process.env.NEXT_PUBLIC_URI}/auth?failed`
    );
  };

  const Logout = async () => {
    await account
      .deleteSession("current")
      .then(() => {
        queryClient.resetQueries();
        setCurrentUser(null);
      })
      .catch(() => {
        setCurrentUser(null);
        queryClient.setQueryData(["user"], () => null);
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthContext.Provider
      value={{ user: currentUser, loading, OAuthLogin, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
