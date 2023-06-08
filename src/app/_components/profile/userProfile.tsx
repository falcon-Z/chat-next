"use client";

import { useAuth } from "@falcon-z/app/_hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "../auth/logoutButton";
import useUser from "@falcon-z/app/_queries/useUser";

export default function UserProfile() {
  const { data } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.replace("auth");
    }
  }, [data]);

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
