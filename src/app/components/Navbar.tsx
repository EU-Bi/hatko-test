'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const navigation = [
  { name: "Posts", href: "/dashboard/posts" },
  { name: "Profile", href: "/dashboard/profile" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 mx-auto px-2 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
      <div className="flex items-center justify-center sm:items-stretch sm:justify-center w-full">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
