import Link from "next/link";
import BackgroundGradient from "./backgroundGradient";

export default function LandingPage() {
  return (
    <>
      <div className=" flex w-full flex-col items-center justify-center gap-16 p-4">
        <h1 className="relative  text-7xl font-extrabold tracking-wide">
          A New Way to Connect
        </h1>
        <Link
          href={"/auth"}
          className="btn btn-circle btn-primary btn-wide relative bg-opacity-75"
        >
          Lets Go!
        </Link>
      </div>
    </>
  );
}
