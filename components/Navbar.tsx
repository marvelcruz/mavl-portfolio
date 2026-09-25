"use client";

import Link from "next/link";
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
        <Link href="/" aria-label="Marvellous Olabode homepage" className="brand-mark">M<span>.</span></Link>

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

        <Link href="#contact" className="nav-contact hidden lg:inline-flex">Start a conversation →</Link>

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

      <MobileNav links={links} show={showNav} onClose={() => setShowNav(false)} />
    </header>
  );
};

export default Navbar;
