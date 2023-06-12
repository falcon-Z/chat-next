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
  const router = useRouter();

  const user = useUser();
  const session = useSession();
  const prefs = useUserPrefs();

  const addUserInfoToPrefs = useMutation({
    mutationFn: (token: string) =>
      getUserInfoFromGithub(token)
        .then((data) => account.updatePrefs(data))
        .then((data) => data),
    onMutate: () => setLoading(true),
    onSuccess(data) {
      setCurrentUser(data);
      queryClient.invalidateQueries();
    },
  });

  useEffect(() => {
    if (user.isSuccess && session.isSuccess && prefs.isSuccess) {
      if (Object.keys(prefs.data).length > 0) {
        setCurrentUser(user.data);
      } else {
        if (session.data.provider == "github") {
          addUserInfoToPrefs.mutate(session.data.providerAccessToken);
        }
      }
    } else if (user.isLoading || session.isLoading || prefs.isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [
    session.data,
    user.data,
    prefs.data,
    user.isLoading,
    session.isLoading,
    prefs.isLoading,
  ]);

  useEffect(() => {
    if (addUserInfoToPrefs.isSuccess) {
      setCurrentUser(addUserInfoToPrefs.data);
      router.replace("profile");
    }
  }, [addUserInfoToPrefs.isSuccess, addUserInfoToPrefs.data]);

  const OAuthLogin = async (provider: OAuthProvider) => {
    setLoading(true);
    account.createOAuth2Session(
      provider,
      `${process.env.NEXT_PUBLIC_URI}auth?success`,
      `${process.env.NEXT_PUBLIC_URI}auth?failed`
    );
  };

  const Logout = async () => {
    await account.deleteSession("current");
    await queryClient.resetQueries();
    setCurrentUser(null);
    router.replace("auth");
  };

  return (
    <AuthContext.Provider
      value={{ user: currentUser, loading, OAuthLogin, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
