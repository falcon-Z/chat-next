"use client";

import { useEffect } from "react";
import useAuth from "../_hooks/useAuth";
import { useRouter } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("auth");
    }
  });

  return (
    <div className=" container bg-gray-950 bg-opacity-50 backdrop-blur-md grid place-items-center min-h-full lg:border-2 md:p-8  border-gray-700 p-4 border-opacity-50 rounded-3xl">
      {children}
    </div>
  );
}
