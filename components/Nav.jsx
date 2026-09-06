"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-charcoal shadow-lg shadow-black/20" : "bg-charcoal/95"
      }`}
    >
      <nav className="container-shop flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-baseline gap-2 shrink-0">
          <span className="font-display text-xl md:text-2xl text-paper">
            Everest
          </span>
          <span className="font-body text-xs tracking-wide text-brass uppercase">
            Trading Co.
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-paper/80 hover:text-brass transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={business.phoneHref}
          className="hidden md:inline-flex items-center gap-2 bg-brass hover:bg-brass-light text-charcoal font-medium text-sm px-4 py-2.5 rounded-sm transition-colors"
        >
          <Phone className="w-4 h-4" strokeWidth={2} />
          {business.phone}
        </a>

        <button
          className="md:hidden text-paper p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-charcoal border-t border-paper/10 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-paper/80 hover:text-brass py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={business.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 bg-brass text-charcoal font-medium text-sm px-4 py-3 rounded-sm"
          >
            <Phone className="w-4 h-4" />
            Call {business.phone}
          </a>
        </div>
      )}
    </header>
  );
}
