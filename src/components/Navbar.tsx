"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent absolute top-0 left-0 w-full z-20 text-white">
      <div className="hidden md:flex">
        <Link href="/">
          <Image
            src="/perception wbg.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="md:hidden">
        <Link href="/">
          <Image src="/perception wbg.png" alt="logo" width={50} height={50} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 mr-8">
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
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className="hover:text-gray-300 font-sans font-bold"
          >
            Team
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

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden mr-4 z-30">
        <button onClick={toggleSidebar} aria-label="Toggle sidebar">
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primarycolor text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white"
        >
          <FiX size={24} />
        </button>
        <ul className="mt-16 space-y-6 text-center">
          <li>
            <Link
              href="/about"
              className="hover:text-gray-300 font-sans font-bold"
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="hover:text-gray-300 font-sans font-bold"
              onClick={toggleSidebar}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="hover:text-gray-300 font-sans font-bold"
              onClick={toggleSidebar}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 font-sans font-bold"
              onClick={toggleSidebar}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay (optional, to close sidebar on clicking outside) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
        />
      )}
    </nav>
  );
};

export default Navbar;
