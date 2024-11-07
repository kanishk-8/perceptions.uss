import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#292A2C] text-white flex flex-col md:flex-row justify-between items-center p-8">
      <div className="text-primarytext md:w-[50%] mb-6 md:mb-0">
        <p>
          We extend a warm welcome to all of you to the new Perceptions website.
          Explore the societies of the college, read blog articles by our
          editors, or just get up to date with what’s happening. You are sure to
          find something catered to your taste!
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="https://www.instagram.com" passHref>
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={30}
            height={30}
            className="cursor-pointer hover:opacity-75"
          />
        </Link>
        <Link href="https://www.linkedin.com" passHref>
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={30}
            height={30}
            className="cursor-pointer hover:opacity-75"
          />
        </Link>
        <Link href="mailto:info@example.com" passHref>
          <Image
            src="/icons/mail.png"
            alt="Email"
            width={30}
            height={30}
            className="cursor-pointer hover:opacity-75"
          />
        </Link>
      </div>
    </div>
  );
}
