"use client";

import useAuth from "@falcon-z/app/_hooks/useAuth";
import useUserPrefs from "@falcon-z/app/_queries/useUserPrefs";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function UserMenu() {
  const { data } = useUserPrefs();
  const { user, Logout } = useAuth();

  return (
    <Menu>
      <Menu.Button className=" ring-opacity-50 ring-gray-500  p-0.5 rounded-full focus:outline-none hover:ring-2 focus:ring-2 active:ring-0">
        <Image
          src={data?.avatar}
          width={48}
          height={48}
          alt="User Menu"
          className=" ring-opacity-50 ring-gray-500 ring-offset-4 ring-offset-transparent object-center object-cover w-full h-full rounded-full shadow-inner hover:ring-2 focus:ring-2 active:ring-2"
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
            "rounded-2xl p-2 bg-gray-900 bg-opacity-75 border-2 border-gray-600 border-opacity-50 focus:outline-none "
          }
        >
          <div className="flex gap-4 items-center p-4">
            <Menu.Item>
              <Image
                src={data?.avatar}
                width={64}
                height={64}
                alt="UserAvatar"
                className="border-2 border-opacity-50 border-gray-700 border-spacing-4 object-center object-cover w-full h-full rounded-full shadow-inner"
              />
            </Menu.Item>
            <div>
              <h4 className="text-2xl first-letter:uppercase font-semibold tracking-wide">
                {user?.name}
              </h4>
              <p className="text-sm text-gray-300">{user?.email}</p>
            </div>
          </div>

          <Menu.Item>
            <button
              type="button"
              onClick={() => Logout()}
              className="flex text-xl items-center gap-2 p-2  m-1 rounded-xl  ring-gray-500 ring-opacity-50 w-full focus:outline-none hover:ring-2 focus:ring-2 hover:bg-gray-700/50 focus:bg-gray-700/50 hover:shadow-sm focus:shadow-sm"
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
