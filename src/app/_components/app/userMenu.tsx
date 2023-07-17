"use client";

import useAuth from "@falcon-z/app/_hooks/useAuth";
import useUserPrefs from "@falcon-z/app/_queries/useUserPrefs";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function UserMenu() {
  const { data, isLoading } = useUserPrefs();
  const { user, Logout } = useAuth();

  return (
    <Menu>
      <Menu.Button className=" avatar rounded-full p-0.5 ring-2 ring-primary ring-offset-2 ring-offset-base-100">
        <span
          className={`loading loading-spinner loading-lg  ${
            isLoading ? "block" : "hidden"
          }`}
        ></span>

        <Image
          src={data?.avatar}
          width={48}
          height={48}
          className={`rounded-full ${isLoading ? "hidden" : "block"}`}
          alt="User Menu"
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
            "menu absolute left-2  top-2 z-10 rounded-2xl bg-base-200 focus:outline-none"
          }
        >
          <span
            className={`loading loading-spinner loading-lg ${
              isLoading ? "block" : "hidden"
            }`}
          />
          <div className="flex items-center gap-4 p-2  ">
            <div className=" avatar">
              <Image
                src={data?.avatar}
                width={64}
                height={64}
                alt="UserAvatar"
                className=" rounded-full"
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
