"use client";

import { useAuth } from "@falcon-z/app/_hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "../auth/logoutButton";

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("auth");
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-center text-4xl font-semibold tracking-wide">
        {user?.name}
      </h3>
      <p className="text-xl text-gray-300 text-center">{user?.email}</p>
      <LogoutButton />
    </div>
  );
}
