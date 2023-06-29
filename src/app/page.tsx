"use client";

import { useRouter } from "next/navigation";
import LandingPage from "./_components/landingPage";
import useAuth from "./_hooks/useAuth";
import { useEffect } from "react";

export default function HomePage() {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("chat");
    }
  }, [router, user]);

  return <LandingPage />;
}
