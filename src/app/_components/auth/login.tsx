"use client";

import OAuthLoginButton from "./OAuthLoginButton";
import { Icon } from "@iconify/react";
import LoadingSpinner from "../loadingSpinner";
import AnnonymousLogin from "./annonymousLogin";
import useAuth from "@falcon-z/app/_hooks/useAuth";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { loading } = useAuth();


  return (
    <div className="bg-gray-950 bg-opacity-50 border-2 border-gray-800 border-opacity-50  p-4 w-full max-w-md rounded-2xl space-y-8 ">
      <h2 className="text-center text-5xl flex flex-col items-center justify-center gap-4">
        <Icon
          icon={"carbon:login"}
          className={`${loading ? "hidden" : "block"}`}
        />
        <div className={`${loading ? "block" : "hidden"} w-full`}>
          <LoadingSpinner size={8} />
        </div>
        <div>Login</div>
      </h2>
      <OAuthLoginButton provider="github" />
      <AnnonymousLogin />
    </div>
  );
}
