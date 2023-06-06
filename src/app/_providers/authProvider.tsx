import { Models } from "appwrite";
import React, { use, useEffect, useState } from "react";
import { account } from "../_utils/config";
import { OAuthProvider } from "../_utils/types";
import { AuthContext } from "../_hooks/useAuth";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  useEffect(() => {
    try {
      async () => {
        const user = await account.get();

        if (user.$id) {
          setUser(user);
        }
      };
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

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
    await account.deleteSession("current").then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
