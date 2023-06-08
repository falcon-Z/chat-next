"use client";

import Link from "next/link";
import LoadingSpinner from "./loadingSpinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import usedata from "../_queries/useUser";

export default function LandingPage() {
  const { data } = usedata();

  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.replace("profile");
    }
  }, [data]);

  if (data) {
    return (
      <div className="flex items-center justify-center flex-col gap-16 p-4">
        <h1 className="text-7xl font-extrabold tracking-wide">
          Welcome back, {data.name}
        </h1>
        <LoadingSpinner size={16} />
      </div>
    );
  }
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
