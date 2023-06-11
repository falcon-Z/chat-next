"use client";

import LoadingSpinner from "@falcon-z/app/_components/loadingSpinner";
import UserProfile from "@falcon-z/app/_components/profile/userProfile";
import useUser from "@falcon-z/app/_queries/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data, isSuccess } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      if (Object.keys(data.prefs).length == 0) {
        router.replace("auth");
      }
    }
  }, [data, isSuccess]);

  return <UserProfile data={data!} />;
}
