"use client";

import { useAuth } from "@falcon-z/app/_hooks/useAuth";
import IconWrapper from "../wrappers/iconWrapper";
import OAuthLoginButton from "./OAuthLoginButton";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import LoadingSpinner from "../loadingSpinner";

export default function Login() {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("profile");
    }
  }, [user]);

  return (
    <div className="bg-gray-950 bg-opacity-50 border-2 border-gray-800 border-opacity-50  p-4 w-full max-w-md rounded-2xl space-y-8 ">
      <h2 className="text-center text-5xl flex flex-col items-center justify-center gap-4">
        <Icon
          icon={"carbon:login"}
          className={`${loading ? "hidden" : "block"}`}
        />
        <div className={`${loading ? "block" : "hidden"}`}>
          <LoadingSpinner size={16} />
        </div>
        <div>Login</div>
      </h2>
      <OAuthLoginButton provider="github" />
    </div>
  );
}
