"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";
import Button from "./ui/UIButton";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <header className="header border_b">
      <nav className="nav-bar">
        <Link href="/" aria-label="Go to homepage">
          <div className="rounded-full" style={{ backgroundColor: "#B88700" }}>
            <Image
              src="/icons/logo.ico"
              alt="Marvellous Olabode logo"
              width={40}
              height={40}
              className="p-[3px] cursor-pointer"
              priority
            />
          </div>
        </Link>

        <div className="hidden lg:flex-center">
          <ul className="flex-center gap-4">
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="link"
                  aria-label={`Go to ${title} section`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button
          className="hidden max-lg:flex-center"
          onClick={toggleShowNav}
          aria-label={showNav ? "Close navigation menu" : "Open navigation menu"}
        >
          {showNav ? (
            <IoMdClose style={{ color: "#7A5A00" }} size={30} />
          ) : (
            <CiMenuFries style={{ color: "#7A5A00" }} size={30} />
          )}
        </Button>
      </nav>

      <MobileNav links={links} show={showNav} onClose={() => setShowNav(false)} />  {/* ← only change */}
    </header>
  );
};

export default Navbar;