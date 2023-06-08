"use client";

import Link from "next/link";
import { useAuth } from "../_hooks/useAuth";
import LoadingSpinner from "./loadingSpinner";
import { dataouter, useRouter } from "next/navigation";
import { useEffect } from "react";
import usedata from "../_queries/useUser";

export default function LandingPage() {
  const { data } = usedata();

  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push("profile");
    }
  }, [data]);

  if (data) {
    return (
      <div className="flex items-center justify-center flex-col gap-16 p-4">
        <h1 className="text-7xl font-extrabold tracking-wide">
          Welcome back, {data.name}
        </h1>
        <LoadingSpinner size={32} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center flex-col gap-16 p-4">
        <h1 className="text-7xl font-extrabold tracking-wide">
          A New Way to Connect
        </h1>

        <Link href={"/auth"} className="login-button max-w-sm w-full">
          Lets Go!
        </Link>
      </div>
    );
  }
}
