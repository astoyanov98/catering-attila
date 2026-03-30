"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/80 backdrop-blur-md">
      <div className="site-shell flex items-center justify-between gap-4 py-2">
        <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Attila Catering"
            width={200}
            height={100}
            priority
          />
        </Link>

        <nav className="hidden items-center justify-end gap-4 text-sm font-medium lg:flex lg:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-primary transition-opacity hover:opacity-80"
              style={{ color: "#5B3F2E" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="relative isolate overflow-hidden rounded-lg border border-primary px-4 py-2 text-primary transition-colors before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:ease-out hover:text-white hover:before:scale-x-100"
          >
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#d8c8bb] bg-white/70 text-[#5B3F2E] transition-colors hover:bg-[#f6eee7] lg:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative h-[14px] w-[14px]">
            <span
              className={`absolute left-0 top-0 h-0.5 w-[14px] rounded-full bg-current transition-all duration-300 ${
                isOpen ? "top-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-[14px] rounded-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-[14px] rounded-full bg-current transition-all duration-300 ${
                isOpen ? "top-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-primary/10 bg-white/92 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="site-shell flex flex-col py-4">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-[#ece0d5] py-3 text-base font-medium text-[#5B3F2E] transition-colors hover:text-[#7a543d]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="relative isolate mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg border border-primary px-4 py-3 text-sm font-medium text-primary transition-colors before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:ease-out hover:text-white hover:before:scale-x-100"
          >
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
