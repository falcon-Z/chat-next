import { useEffect, useState } from "react";
import useSession from "../_queries/useSession";
import useUser from "../_queries/useUser";
import useUserPrefs from "../_queries/useUserPrefs";
import { useRouter, useSearchParams } from "next/navigation";
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
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] =
    useState<Models.User<Models.Preferences> | null>(null);

  const searchparams = useSearchParams();
  const queryClient = useQueryClient();
  const router = useRouter();

  const user = useUser();
  const session = useSession();
  const prefs = useUserPrefs();

  const addUserInfoToPrefs = useMutation({
    mutationFn: (data: any) => account.updatePrefs(data),
    onMutate: () => setLoading(true),
    onSuccess: () =>
      queryClient.invalidateQueries(["user", "session", "prefs"]),
  });

  useEffect(() => {
    if (user.isLoading || session.isLoading || prefs.isLoading) {
      setLoading(true);
    }

    if (user.isSuccess && session.isSuccess && prefs.isSuccess) {
      const token = session.data.providerAccessToken;

      if (searchparams.has("success") && Object.keys(prefs.data).length == 0) {
        setLoading(true);
        if (session.data.provider == "github") {
          const getGithubProfile = useQuery({
            queryKey: ["githubProfile", token],
            queryFn: () => getUserInfoFromGithub(token),
            onSuccess(data) {
              () => addUserInfoToPrefs.mutate(data);
            },
          });
          if (getGithubProfile.isLoading) {
            setLoading(true);
          }
        }
      } else {
        setCurrentUser(user.data);
        setLoading(false);
      }
    }
  }, [user, session, prefs]);

  const OAuthLogin = async (provider: OAuthProvider) => {
    setLoading(true);
    account.createOAuth2Session(
      provider,
      `${process.env.NEXT_PUBLIC_URI}auth?success`,
      `${process.env.NEXT_PUBLIC_URI}auth?failed`
    );
  };

  const Logout = async () => {
    account.deleteSession("current");
    queryClient.invalidateQueries();
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
