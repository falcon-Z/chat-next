import { Models } from "appwrite";
import { createContext, useContext } from "react";
import { OAuthProvider } from "../_utils/types";

type AuthContextType = {
  user: Models.User<Models.Preferences> | null;
  loading: boolean;
  OAuthLogin: (provider: OAuthProvider) => Promise<void>;
  Logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  OAuthLogin: async () => {},
  annonymousLogin: async ()=>{},
  Logout: async () => {},
});

export default function useAuth() {
  return useContext(AuthContext);
}
