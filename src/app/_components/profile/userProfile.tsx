import LogoutButton from "../auth/logoutButton";
import Image from "next/image";
import Link from "next/link";
import { Models } from "appwrite";

export default function UserProfile({
  data,
}: {
  data: Models.User<Models.Preferences>;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image
        src={data.prefs.avatar}
        width={122}
        height={120}
        alt={`${data.name}'s Profile Picture`}
        className="w-full h-auto rounded-full  shadow-inner ring-4 ring-offset-4 ring-gray-700 ring-opacity-50 ring-offset-black"
      />
      <h3 className="text-center text-4xl font-semibold tracking-wide">
        {data.name}
      </h3>
      <Link
        href={data.prefs.github_url}
        target="_blank"
        className="text-xl text-gray-300 text-center login-button"
      >
        {data.prefs.username}
      </Link>
      <p>{data.prefs.bio}</p>
      <LogoutButton />
    </div>
  );
}
