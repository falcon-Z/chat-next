"use client";

import { useAuth } from "@falcon-z/app/_hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "../auth/logoutButton";
import useUser from "@falcon-z/app/_queries/useUser";
import useSession from "@falcon-z/app/_queries/useSession";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { account } from "@falcon-z/app/_utils/config";
import getUserInfoFromGithub from "@falcon-z/app/_helpers/users/getUserProfileFromGithub";
import Image from "next/image";
import Link from "next/link";

export default function UserProfile() {
  const { data } = useUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const session = useSession();

  const setUserInfoFromGithub = useMutation({
    mutationFn: getUserInfoFromGithub,
    onSuccess(data) {
      account.updatePrefs(data);
      queryClient.invalidateQueries(["user"]);
    },
  });

  useEffect(() => {
    if (!data) {
      router.replace("auth");
    }

    if (data?.prefs && Object.keys(data.prefs).length == 0) {
      if (session.data?.provider == "github") {
        setUserInfoFromGithub.mutate(session.data.providerAccessToken);
      }
    }
  }, [data, session]);

  if (data?.prefs && Object.keys(data.prefs).length > 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={data?.prefs.avatar}
          width={122}
          height={120}
          alt={`${data?.name}'s Profile Picture`}
          className="w-full h-auto rounded-full  shadow-inner ring-4 ring-offset-4 ring-gray-700 ring-opacity-50 ring-offset-black"
        />
        <h3 className="text-center text-4xl font-semibold tracking-wide">
          {data?.name}
        </h3>
        <Link
          href={data.prefs.github_url}
          target="_blank"
          className="text-xl text-gray-300 text-center login-button"
        >
          {data?.prefs.username}
        </Link>
        <LogoutButton />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center text-4xl font-semibold tracking-wide">
          {data?.name}
        </h3>
        <p className="text-xl text-gray-300 text-center">{data?.email}</p>
        <LogoutButton />
      </div>
    );
  }
}
