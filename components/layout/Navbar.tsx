"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Clock,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Clinic" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact & Location" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification / Hours Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 text-teal-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{clinicConfig.hours.days}: {clinicConfig.hours.morningShift} & {clinicConfig.hours.eveningShift}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Confidential & Ethical Consultations</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${clinicConfig.contact.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              aria-label={`Call clinic at ${clinicConfig.contact.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-semibold">{clinicConfig.contact.phoneFormatted}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Amritsar, Punjab</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-800 to-teal-950 flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-xl tracking-wider text-teal-100">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-900 transition-colors">
                  {clinicConfig.name}
                </span>
                <span className="text-[11px] font-medium tracking-wide text-teal-700 uppercase">
                  Healthcare & Wellbeing • Amritsar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-teal-800 ${
                      isActive
                        ? "text-teal-800 font-semibold"
                        : "text-slate-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#appointment-section"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 shadow-sm hover:shadow transition-all duration-150 active:scale-98"
              >
                <CalendarCheck className="w-4 h-4 text-teal-200" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-700"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-900 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/#appointment-section"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 transition-colors shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4 text-teal-200" />
                  <span>Request an Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
