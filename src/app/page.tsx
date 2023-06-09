"use client";

import { useRouter } from "next/navigation";
import LandingPage from "./_components/landingPage";
import WelcomePage from "./_components/welcomePage";
import useUser from "./_queries/useUser";

export default function Home() {
  const { data } = useUser();
  const router = useRouter();

  if (data) {
    router.replace("profile");
  }

  return (
    <main className="min-h-screen grid place-items-center">
      {data ? <WelcomePage name={data?.name} /> : <LandingPage />}
    </main>
  );
}
