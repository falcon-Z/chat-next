"use client";

import OAuthLoginButton from "./OAuthLoginButton";
import { Icon } from "@iconify/react";
import useAuth from "@falcon-z/app/_hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("chat");
    }
  }, [router, user]);

  return (
    <div className="backdrop-blur+  card card-bordered flex w-full max-w-md justify-center gap-8 rounded-3xl  p-4  ">
      <h2 className="card-title flex flex-col items-center justify-center gap-4 text-center text-5xl">
        <Icon
          icon={"carbon:login"}
          className={`${loading ? "hidden" : "block"}`}
        />
        <div className={`${loading ? "block" : "hidden"} w-full`}>
          <span className="loading loading-infinity loading-lg" />
        </div>
        <div>Login</div>
      </h2>
      <OAuthLoginButton provider="github" />
    </div>
  );
}
