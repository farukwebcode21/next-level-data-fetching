import React from "react";
import Link from "next/link";

const NavbarPages = () => {
  return (
    <div className="w-full mx-auto">
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarPages;
