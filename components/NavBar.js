import React from 'react';
import { Menu } from '@headlessui/react';
import { signOut, useSession } from 'next-auth/react';
import DropdownLink from './DropdownLink';

export default function NavBar() {
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <nav className="flex justify-between bg-[#337476] shadow-md p-5 w-full">
        <div>
          <h1>Result Predication</h1>
        </div>
        <div className="flex gap-6 uppercase">
          <ul className="flex font-medium justify-between gap-4 ">
            <li className="hover:bg-[#2d6163]">
              <a href="/">Home</a>
            </li>
            <li>
              {status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className="flex gap-3">
                  <span className="text-white uppercase">Welcome</span>
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="text-white uppercase hover:bg-[#2d6163]">
                      {session.user.name}
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <DropdownLink className="dropdown-link" href="/profile">
                          Profile
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          className="dropdown-link"
                          href="/#"
                          onClick={logoutClickHandler}
                        >
                          Logout
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              ) : (
                <a href="/login">Login</a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
