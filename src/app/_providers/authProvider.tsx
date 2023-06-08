"use client";

import { Models } from "appwrite";
import React, { use, useEffect, useState } from "react";
import { account } from "../_utils/config";
import { OAuthProvider } from "../_utils/types";
import { AuthContext } from "../_hooks/useAuth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useUser from "../_queries/useUser";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useUser();

  let user: Models.User<Models.Preferences> | null = null;

  if (data?.$id) {
    user = data;
  }

  const loading: boolean = isLoading;

  const login = async (provider: OAuthProvider) => {
    if (provider == "github") {
      account.createOAuth2Session(
        provider,
        `${process.env.NEXT_PUBLIC_URI}auth`,
        `${process.env.NEXT_PUBLIC_URI}auth?failed`
      );
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    queryClient.invalidateQueries();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
