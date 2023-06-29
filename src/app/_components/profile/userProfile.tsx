"use client";

import useAuth from "@falcon-z/app/_hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("auth");
    }
  }, [router, user]);

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={user?.prefs.avatar}
          width={122}
          height={120}
          alt={`${user?.name}'s Profile Picture`}
          className="h-auto w-full rounded-full  shadow-inner ring-4 ring-gray-700 ring-opacity-50 ring-offset-4 ring-offset-black"
        />
        <h3 className="text-center text-4xl font-semibold tracking-wide">
          {user?.name}
        </h3>
        <Link
          href={user?.prefs.github_url}
          target="_blank"
          className="login-button text-center text-xl text-gray-300"
        >
          {user?.prefs.username}
        </Link>
        <p>{user?.prefs.bio}</p>
      </div>
    );
  }
}
