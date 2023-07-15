import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 p-4">
      <h1 className="text-7xl font-extrabold tracking-wide">
        A New Way to Connect
      </h1>
      <Link href={"/auth"}>
        <button type="button" className="  glass btn-wide btn-circle btn ">
          Lets Go!
        </button>
      </Link>
    </div>
  );
}
