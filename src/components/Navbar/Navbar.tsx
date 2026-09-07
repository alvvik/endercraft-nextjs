"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useOnClickOutside } from "usehooks-ts";
import { Menu, X } from "lucide-react";
import { config } from "@/config";
import { motion, AnimatePresence } from "motion/react";

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full  backdrop-blur-md  bg-main/80"
    >
      <div ref={menuRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-4 items-center justify-between">
          <Link href="/" className=" text-text-secondary font-bold">
            EnderCraft.pl
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className=" transition text-text-secondary hover:text-main"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-text-secondary"
            aria-label="Otwórz menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-4 text-base font-medium text-gray-700 dark:text-gray-200">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className=" hover:text-main transition text-text-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
