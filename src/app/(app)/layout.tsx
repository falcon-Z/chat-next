"use client";

import useAuth from "../_hooks/useAuth";

export default function AppLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
  chat: React.ReactNode;
}) {
  const { user } = useAuth();
  return <>{user ? props.chat : props.auth}</>;
}
