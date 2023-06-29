"use client";

import { Icon } from "@iconify/react";

export default function ConnectRandomlyButton() {
  return (
    <button
      type="button"
      className="big-button w-full flex items-center justify-center gap-4"
    >
      <Icon icon={"carbon:shuffle"} />
      <span>Find Someone</span>
    </button>
  );
}
