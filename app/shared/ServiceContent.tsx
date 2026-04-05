/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONFIG } from "@/config";
import { toast, Toaster } from "react-hot-toast";

export const ServiceContent = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(CONFIG.getAllServices);
        const data = await response.json();

        if (data.meta.status === "success" && data.data) {
          setServices(data.data);
        }
      } catch (err) {
        toast.error("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const getInitials = (title: string) => {
    return title
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <Toaster position="top-right" />

      <section className="relative min-h-[60vh] lg:h-[850px] flex items-center overflow-hidden bg-[#181a30]">
        {/* Background Layer with Consistent Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111936]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/40 via-[#111936]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,.12),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-[1100px]">

              {/* 1. Tagline Badge - Synced with Home Style */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse"></span>
                <span className="text-[#ffd700] text-[10px] md:text-sm font-black uppercase tracking-[0.25em]">
                  Our Capabilities
                </span>
              </div>

              {/* 2. Main Heading - Exact Scaling & Italic Style */}
              <h1 className="text-[44px] leading-[0.92] sm:text-[78px] md:text-[96px] xl:text-[112px] font-black text-white uppercase tracking-[-0.05em] italic">
                Engineering Services<br />
                <span className="text-[#ffd700]">For Crane Systems</span>
              </h1>

              {/* 3. Description - Precise Font Size, Gold Color, and Left Anchor */}
              <p className="mt-8 max-w-[750px] text-[18px] leading-[1.3] md:text-[24px] text-[#ffd700] border-l-[4px] border-[#ffd700] pl-5">
                Advanced crane boom repair, structural reinforcement, and hydraulic restoration
                for mobile and crawler crane systems. Precision engineering for heavy-duty performance.
              </p>

              {/* 4. CTA Buttons - Synced with Home Page Styles */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact#enquiry"
                  className="text-center px-8 py-4 bg-[#ffd700] text-[#221b00] font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform"
                >
                  Request Enquiry
                </Link>
                <a
                  href="https://wa.me/971526366779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-8 py-4 border border-white/30 text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
                >
                  Send Photos On WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f6f7fb] grid-dots">
        <div className="container-wrap px-6 lg:px-14">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {loading ? (
              <div className="col-span-full py-20 text-center text-slate-400 font-black tracking-widest">LOADING CAPABILITIES...</div>
            ) : (
              services.map((service, index) => (
                <article
                  key={service._id}
                  className="group flex flex-col bg-white rounded-[1.75rem] overflow-hidden shadow-[0_20px_55px_rgba(8,15,40,.10)] border border-slate-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <Link href={`/service/${service._id}`} className="block relative h-64 overflow-hidden">
                    {/* Background Image with Ink Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.galleryImages?.[0]?.image || ""})` }}
                    />
                    {/* The "Ink" Gradient: Darkens top and bottom to make text pop */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div className="text-[var(--primary-container)] text-xs font-black uppercase tracking-[0.28em] drop-shadow-md">
                        {service.bulletPoints?.[0] || "Specialized Service"}
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="w-16 h-16 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-black text-xl">
                          {getInitials(service.title)}
                        </div>
                        <div className="text-[var(--primary-container)] text-xs font-black uppercase tracking-[0.28em]">
                          Service {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Text Content Area */}
                  <div className="flex flex-col flex-grow p-8 md:p-9">
                    <span className="text-yellow-700 text-xs font-black uppercase tracking-[0.26em]">Engineering Service</span>
                    <h2 className="mt-4 text-[1.75rem] leading-tight font-black uppercase text-[#0f1738] group-hover:text-yellow-700 transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-slate-600 text-base leading-7 line-clamp-3">
                      {service.description}
                    </p>

                    {/* This pushes the button to the absolute bottom of the card */}
                    <div className="mt-auto pt-8">
                      <Link
                        href={`/service/${service._id}`}
                        className="inline-flex items-center font-bold text-yellow-700 hover:gap-3 transition-all"
                      >
                        Open Detailed Service
                        <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};