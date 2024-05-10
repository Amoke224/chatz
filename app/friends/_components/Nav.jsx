"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const currentPath = usePathname();
  return (
    <nav className="center gap-3 px-5 mb-2 mt-16 flex w-full justify-center">
      <div>
        <Button
          className={
            currentPath === "/friends"
              ? "bg-red-500 hover:bg-red-500 transition-all duration-100"
              : " hover:bg-red-500 transition-all duration-300"
          }
        >
          <Link href="/friends">Friends</Link>
        </Button>
      </div>
      <div>
        <Button
          className={
            currentPath === "/friends/requests"
              ? "bg-red-500 hover:bg-red-500 transition-all duration-100"
              : " hover:bg-red-500 transition-all duration-300"
          }
        >
          <Link href="/friends/requests">Recieved Requests</Link>
        </Button>
      </div>
      <div>
        <Button
          className={
            currentPath === "/friends/requests/sent"
              ? "bg-red-500 hover:bg-red-500 transition-all duration-100"
              : " hover:bg-red-500 transition-all duration-300"
          }
        >
          <Link href="/friends/requests/sent">Sent Requests</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
