import { Models } from "appwrite";
import { createContext, useContext } from "react";
import { OAuthProvider } from "../_utils/types";
import Logout from "../_helpers/auth/logout";

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
  Logout: async () => {},
});

export default function useAuth() {
  return useContext(AuthContext);
}
