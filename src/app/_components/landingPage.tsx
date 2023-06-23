import OAuthLoginButton from "./auth/OAuthLoginButton";
import BackgroundGradient from "./backgroundGradient";

export default function LandingPage() {
  return (
    <div className="flex w-full items-center justify-center flex-col gap-16 p-4">
      <h1 className="text-7xl font-extrabold tracking-wide">
        A New Way to Connect
      </h1>
      <div className="flex flex-wrap  items-center justify-center gap-4">
        <OAuthLoginButton provider="github" />
      </div>
    </div>
  );
}
