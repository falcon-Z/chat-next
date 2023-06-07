import Login from "@falcon-z/app/_components/auth/login";
import BackgroundGradient from "@falcon-z/app/_components/backgroundGradient";

export default function AuthPage() {
  return (
    <>
      <div className="absolute -z-30 inset-0">
        <BackgroundGradient />
      </div>
      <Login />
    </>
  );
}
