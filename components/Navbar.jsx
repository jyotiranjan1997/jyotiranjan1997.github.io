"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { navLinks, profile } from "@/data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-white"
        >
          JM<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? "text-accent"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-ink"
        >
          <FaDownload className="text-xs" />
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-ink/95 backdrop-blur-lg px-5 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    active === link.href
                      ? "text-accent bg-surface2/60"
                      : "text-gray-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.resumeFile}
                download
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent2 px-4 py-2.5 text-sm font-semibold text-ink"
              >
                <FaDownload className="text-xs" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
