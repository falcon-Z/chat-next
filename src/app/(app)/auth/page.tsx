"use client";

import Login from "@falcon-z/app/_components/auth/login";
import BackgroundGradient from "@falcon-z/app/_components/backgroundGradient";
import useUser from "@falcon-z/app/_queries/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
  const { data, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (data) {
      router.replace("profile");
    }
  }, [data]);

  return (
    <>
      <div className="absolute -z-30 inset-0">
        <BackgroundGradient />
      </div>
      <Login isLoading={isLoading} />
    </>
  );
}
