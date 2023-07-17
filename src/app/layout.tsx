import Image from "next/image";
import BackgroundGradient from "./_components/backgroundGradient";
import useAuth from "./_hooks/useAuth";
import AuthProvider from "./_providers/authProvider";
import QueryProvider from "./_utils/queryProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatty Dev",
  description:
    "Looking for some fun and inspiration? Join our random developer chat and meet a new buddy who shares your passion for coding. You can exchange ideas, jokes, tips, or even argue about why Javascript is the best (or worst) language ever. Don't be shy, just say hi and start a conversation with a fellow developer. ",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
  chat: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="black">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <main className="relative grid min-h-screen place-items-center p-2">
              <div className=" absolute inset-0">
                <BackgroundGradient />
              </div>

              {props.children}
            </main>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
