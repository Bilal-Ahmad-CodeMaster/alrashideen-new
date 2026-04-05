"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/service' },
    { name: 'Businesses', href: '/businesses' },
    { name: 'Projects', href: '/project' },
    { name: 'Careers', href: '/career' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 z-[100] border-b border-slate-100 bg-white/90  shadow-sm">
        <div className="container-wrap px-4 md:px-6 lg:px-14 py-3 md:py-4 flex items-center justify-between gap-4">

          {/* Logo Section */}
          <Link href="/" className="flex items-start text-lg md:text-3xl font-black  uppercase text-slate-900 z-[110]">
            <img src="https://www.alrashideenengg.com/img/logo.alrashideen.png" alt="Logo" className="w-12 h-12 md:w-20 md:h-20 mr-2 -mt-1 md:-mt-4" />
            <div className="flex flex-col leading-tight">
              AL RASHIDEEN
              <span className="text-[10px] md:text-xl font-bold">ENGINEERING TURNING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-tight transition-all duration-200 ${isActive
                    ? "text-yellow-600 border-b-2 border-yellow-500 pb-1 font-bold"
                    : "text-slate-600 hover:text-slate-900 font-medium"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons & Hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden sm:flex items-center gap-2 md:gap-3">
              <Link href="/contact#inquiry" className="px-4 py-2 rounded-lg bg-[#ffd700] text-[#221b00] text-sm font-bold hover:bg-[#e6c200] transition-colors">Enquiry</Link>
              <Link href="/contact" className="px-4 py-2 rounded-lg border border-[#d0c6ab] text-sm font-bold text-[#181a30]">Contact</Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-900 z-[110] hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE SIDENAV --- */}
        {/* Dark Background Overlay */}
        <div
          className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[101] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel - Solid White Background */}
        <div className={`fixed top-0 right-0 h-full w-[300px] bg-white/85 z-[105] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex flex-col h-full bg-white/85 p-6 pt-24">
            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-8 border-b pb-2">Navigation</p>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xl py-3 px-4 rounded-lg transition-all ${isActive
                      ? "bg-yellow-50 text-yellow-600 font-bold border-r-4 border-yellow-500"
                      : "text-slate-800 font-semibold hover:bg-slate-50"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto flex flex-col gap-3 pb-6">
              <Link href="/contact#inquiry" className="w-full text-center py-4 rounded-lg bg-[#ffd700] text-[#221b00] font-black uppercase text-xs tracking-widest">Enquiry Now</Link>
              <Link href="/contact" className="w-full text-center py-4 rounded-lg border border-slate-200 font-black uppercase text-xs tracking-widest text-[#181a30]">Contact Support</Link>
            </div>
          </div>
        </div>
      </nav>


    </>
  );
}