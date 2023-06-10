"use client";

import { useRouter } from "next/navigation";
import LandingPage from "./_components/landingPage";
import WelcomePage from "./_components/welcomePage";
import useUser from "./_queries/useUser";
import { useEffect } from "react";

export default function Home() {
  const { data } = useUser();
  const router = useRouter();
useEffect(() => {
  if (data) {
    router.replace("profile");
  }
}, [data]);

  return (
    <main className="min-h-screen grid place-items-center">
      {data ? <WelcomePage name={data?.name} /> : <LandingPage />}
    </main>
  );
}
