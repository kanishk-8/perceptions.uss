import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-1 bg-transparent absolute top-0 left-0 w-full z-10 text-white">
      <Link href="/">
        <Image src="/perception wbg.png" alt="logo" width={100} height={100} />
      </Link>
      <ul className="flex gap-6 mr-8">
        <li>
          <Link
            href="/about"
            className="hover:text-gray-300 font-sans font-bold"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="hover:text-gray-300 font-sans font-bold"
          >
            gallery
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className="hover:text-gray-300 font-sans font-bold"
          >
            team
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-gray-300 font-sans font-bold"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
