"use client";

import useAuth from "@falcon-z/app/_hooks/useAuth";
import useUserPrefs from "@falcon-z/app/_queries/useUserPrefs";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function UserMenu() {
  const { data } = useUserPrefs();
  const { user, Logout } = useAuth();

  return (
    <Menu>
      <Menu.Button className="  rounded-full p-0.5 ">
        <Image
          src={data?.avatar}
          width={48}
          height={48}
          alt="User Menu"
          className="  h-full w-full rounded-full object-cover object-center shadow-inner "
        />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-in"
        enterFrom="transform scale-75 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-75 opacity-0"
      >
        <Menu.Items
          className={
            "absolute left-2 top-2  z-30 w-full max-w-screen-sm space-y-4 rounded-2xl border-2 border-gray-600 border-opacity-80 bg-gray-900 bg-opacity-75 p-2 backdrop-blur-md focus:outline-none"
          }
        >
          <div className="flex items-center gap-4 p-2">
            <div>
              <Image
                src={data?.avatar}
                width={64}
                height={64}
                alt="UserAvatar"
                className="h-full w-full border-spacing-4 rounded-full border-2 border-gray-700 border-opacity-50 object-cover object-center shadow-inner"
              />
            </div>
            <div>
              <h4 className="text-2xl font-semibold tracking-wide first-letter:uppercase">
                {user?.name}
              </h4>
              <p className="text-sm text-gray-300">{user?.email}</p>
            </div>
          </div>

          <Menu.Item>
            <Link
              href={"/settings"}
              className="m-1 flex w-full items-center gap-2  rounded-xl p-2  text-xl ring-gray-500 ring-opacity-50 ui-active:bg-gray-700/50 ui-active:shadow-sm ui-active:ring-2 "
            >
              <Icon icon={"carbon:settings"} />
              <span>Settings</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              type="button"
              onClick={() => Logout()}
              className="m-1 flex w-full items-center gap-2  rounded-xl p-2  text-xl ring-gray-500 ring-opacity-50 ui-active:bg-gray-700/50 ui-active:shadow-sm ui-active:ring-2 "
            >
              <Icon icon={"carbon:logout"} />
              <span>Logout</span>
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
