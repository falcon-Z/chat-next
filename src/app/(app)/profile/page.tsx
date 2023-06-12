import UserProfile from "@falcon-z/app/_components/profile/userProfile";
import useUser from "@falcon-z/app/_queries/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  return <UserProfile />;
}
