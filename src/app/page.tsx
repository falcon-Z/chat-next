"use client";

import LandingPage from "./_components/landingPage";
import WelcomePage from "./_components/welcomePage";
import useAuth from "./_hooks/useAuth";

export default function Home() {
  const { user } = useAuth();

  return <>{user ? <WelcomePage name={user.name} /> : <LandingPage />}</>;
}
