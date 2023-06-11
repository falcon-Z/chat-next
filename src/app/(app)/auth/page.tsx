"use client";

import Login from "@falcon-z/app/_components/auth/login";
import BackgroundGradient from "@falcon-z/app/_components/backgroundGradient";
import getUserInfoFromGithub from "@falcon-z/app/_helpers/users/getUserProfileFromGithub";
import useSession from "@falcon-z/app/_queries/useSession";
import useUser from "@falcon-z/app/_queries/useUser";
import { account } from "@falcon-z/app/_utils/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthPage() {
  const { data, isLoading, isSuccess } = useUser();
  const session = useSession();
  const queryClient = useQueryClient();

  const router = useRouter();
  const searchParams = useSearchParams();

  const setUserInfoFromGithub = useMutation({
    mutationFn: getUserInfoFromGithub,
    onSuccess(data) {
      async () => {
        await account.updatePrefs(data);
        queryClient.invalidateQueries(["user"]);
      };
    },
  });

  useEffect(() => {
    if (data) {
      if (data.prefs && Object.keys(data.prefs).length > 0) {
        router.replace("profile");
      } else {
        if (searchParams.has("success")) {
          if (session.isSuccess) {
            if (session.data.provider == "github") {
              setUserInfoFromGithub.mutate(session.data.providerAccessToken);
            }
          }
        }
      }
    }
  }, [data, session, searchParams]);

  return (
    <>
      <div className="absolute -z-30 inset-0">
        <BackgroundGradient />
      </div>
      <Login isLoading={isLoading} />
    </>
  );
}
