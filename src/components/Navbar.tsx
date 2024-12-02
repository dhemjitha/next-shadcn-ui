import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="flex max-w-full fixed top-0 inset-x-0 mx-auto mix-blend-difference backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-between space-x-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <a className="logo font-alt" href="/">
          <h1 className="text-2xl font-bold">Synolux</h1>
        </a>

        {/* Navigation Links */}
        <nav
          aria-label="Main"
          className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:block"
        >
          <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
            <li>
              <a
                className="group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-background/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                href="/#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-background/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                href="/careers"
              >
                Careers
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        {/* "Let's Talk" Shadcn Button */}
        <Button
          variant="outline"
          className="h-11 px-4 py-2 text-sm font-medium rounded-xl"
          asChild
        >
          <a href="/contact">Let&apos;s talk</a>
        </Button>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-11 w-10 shrink-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
