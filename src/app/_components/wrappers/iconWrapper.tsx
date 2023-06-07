"use client";

import { Icon } from "@iconify/react";

export default function IconWrapper({
  icon,
  className,
}: {
  icon: string;
  className?: string | undefined;
}) {
  return <Icon icon={icon} className={className} />;
}
