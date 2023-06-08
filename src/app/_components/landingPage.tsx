"use client";

import Link from "next/link";
import { useAuth } from "../_hooks/useAuth";
import LoadingSpinner from "./loadingSpinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("profile");
    }
  }, [user]);

  if (user) {
    return (
      <div className="flex items-center justify-center flex-col gap-16 p-4">
        <h1 className="text-7xl font-extrabold tracking-wide">
          Welcome back, {user.name}
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
