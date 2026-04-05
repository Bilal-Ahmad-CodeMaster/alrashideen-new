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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,.16),transparent_30%),linear-gradient(90deg,rgba(10,18,48,.96),rgba(10,18,48,.90),rgba(10,18,48,.84))]"></div>
        <div className="relative container-wrap px-6 lg:px-8 py-24 lg:py-32 text-white">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--primary-container)]/40 rounded-lg bg-primary-container/10 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary-container)]"></span>
              <span className="text-[var(--primary-container)] text-xs md:text-sm font-black uppercase tracking-[0.28em]">Our Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">Engineering Services <br /><span className="text-[var(--primary-container)]">For Crane Systems</span></h1>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-[var(--primary-container)]">Advanced crane boom repair, structural reinforcement, and hydraulic restoration for mobile and crawler crane systems.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact#enquiry" className="px-8 py-4 bg-[var(--primary-container)] text-black font-black text-sm uppercase tracking-[0.18em] transition-transform active:scale-95">Request Enquiry</Link>
              <a href="https://wa.me/971526366779" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-white font-black text-sm uppercase tracking-[0.18em] hover:bg-white/5">Send Photos On WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f6f7fb] grid-dots">
        <div className="container-wrap px-6 lg:px-8">
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