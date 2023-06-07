import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-16 p-4">
      <h1 className="text-7xl font-extrabold tracking-wide">
        A New Way to Connect
      </h1>
      <Link href={"/auth"} className="login-button max-w-sm w-full">
        Lets Go!
      </Link>
    </div>
  );
}
