"use client";

import { useRouter } from "next/navigation";
import LandingPage from "./_components/landingPage";
import WelcomePage from "./_components/welcomePage";
import useUser from "./_queries/useUser";
import { useEffect } from "react";
import useAuth from "./_hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.replace("profile");
    }
  }, [user]);

  return (
    <main className="min-h-screen grid place-items-center">
      {user ? <WelcomePage name={user.name} /> : <LandingPage />}
    </main>
  );
}
