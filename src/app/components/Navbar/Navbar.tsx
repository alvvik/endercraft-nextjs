"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useOnClickOutside } from "usehooks-ts";
import { Menu, X } from "lucide-react";
import { config } from "@/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false),
  );
  interface navLinkProps {
    name: string;
    href: string;
  }
  const navLinks: navLinkProps[] = [
    { name: "Regulamin", href: "/regulamin" },
    { name: "Discord", href: config.discordInvite },
    { name: "Sklep", href: "/#sklep" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full  backdrop-blur-md  bg-main/80">
      <div ref={menuRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-4 items-center justify-between">
          <Link href="/" className=" text-text-secondary font-bold">
            EnderCraft.pl
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-main transition text-text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-text-secondary"
            aria-label="Otwórz menu"
          >
            {isOpen ? <X className="h-6 w-6 " /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden  py-4">
            <nav className="flex flex-col gap-4 text-base font-medium text-gray-700 dark:text-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className=" hover:text-main transition text-text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
