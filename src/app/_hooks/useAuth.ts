import { Models } from "appwrite";
import { createContext, useContext, useState, useEffect } from "react";
import { OAuthProvider } from "../_utils/types";

type AuthContext = {
  user: Models.User<Models.Preferences> | null;
  login: (provider: OAuthProvider) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContext>({
  user: null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  loading: false,
});

export function useAuth() {
  return useContext(AuthContext);
}
