"use client";
import Link from "next/link";
import { services } from "@/app/data/service";

export const Footer = () => {
  // 1. Navigation mapping for cleaner JSX
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Businesses", href: "/businesses" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  // 2. Updated Logic: Instead of filtering by slug, 
  // we take the first 4 services automatically to ensure they all show up.
  const footerServices = services.slice(0, 4);

  // 3. Shared class for hover effects
  const hoverClass = "hover:text-[var(--primary-container)] transition-colors duration-300";

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10">
      <div className="container-wrap px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div className="space-y-8">
          <Link href="/" className="inline-block">
            <div className="text-xl font-black tracking-tighter uppercase leading-tight">
              AL RASHIDEEN

            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Crane repairing, heavy engineering and workshop support for mobile and crawler crane systems.   </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--primary-container)] mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3 text-slate-300 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={hoverClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column (Now Dynamic) */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--primary-container)] mb-6">
            Services
          </h4>
          <ul className="space-y-3 text-slate-300 text-sm">
            {footerServices.map((service) => (
              <li key={service.slug || service.title}>
                <Link
                  href={`/services/${service.slug}`}
                  className={hoverClass}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--primary-container)] mb-6">
            Contact
          </h4>
          <div className="space-y-4 text-slate-300 text-sm">
            <p className="">
              Industrial Area, Sajaa, Sharjah, United Arab Emirates
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+971526366779" className={`flex items-center gap-2 ${hoverClass}`}>
                <span className="material-symbols-outlined text-[18px]">call</span>
                +971 52 636 6779
              </a>
              <a href="mailto:ahmadali@alrashideenengg.com" className={`flex items-center gap-2 ${hoverClass}`}>
                <span className="material-symbols-outlined text-[18px]">mail</span>
                ahmadali@alrashideenengg.com
              </a>
              <a
                href="https://wa.me/971526366779"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 font-bold ${hoverClass}`}
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="container-wrap px-6 lg:px-8 mt-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} AL RASHIDEEN Engineering Turning. All rights reserved.
        </p>

      </div>
    </footer>
  );
};