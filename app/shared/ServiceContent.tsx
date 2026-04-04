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

  return (
    <>
      <Toaster position="top-right" />
      <header className="hero-pattern py-18 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-white font-bold tracking-widest uppercase mb-4 block">
            Our Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Engineering <span className="text-primary">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-6 max-w-2xl leading-relaxed">
            Advanced crane boom repair and structural reinforcement solutions
            engineered for high-capacity lifting equipment. Our facility
            combines state-of-the-art machinery, OEM-grade materials, and expert
            technicians to deliver reliable, safety-compliant structural
            performance.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section
        id="services"
        className="bg-linear-to-b from-[bg-primary] via-white to-gray-200 text-gray-800 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8 sm:mb-16">
            <div className="max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Our Services
              </h3>
              <p className="text-white leading-relaxed">
                Our team combines extensive field experience with advanced
                technical expertise in structural configurations, boom systems,
                and load-bearing assemblies across globally recognized OEM crane
                manufacturers such as Liebherr, Terex, XCMG, Grove, Tadano,
                Zoomlion, SANY, Kobelco, Kato, Manitowoc, and other major heavy
                lifting brands.
              </p>
            </div>

            <a
              href="https://wa.me/971526366779"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-3 rounded-full font-medium
                       hover:bg-black transition shadow-lg"
            >
              Send Photos on WhatsApp
            </a>
          </div>


          <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <div className="col-span-full py-20 text-center text-white">Loading Infrastructure...</div>
            ) : (
              services.map((service) => (
                <div key={service._id} className="group relative rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-[500px] border border-secondary/20 bg-white">
                  <div
                    className="h-1/2 w-full bg-cover bg-center relative transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.galleryImages?.[0]?.image || ""})` }}
                  >
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-all"></div>
                  </div>

                  <div className="h-1/2 p-6 flex flex-col relative z-10">
                    <h4 className="text-xl font-bold text-black mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <div className="text-sm text-secondary/70 mb-4 italic leading-relaxed">
                      {service.bulletPoints && service.bulletPoints.length > 0
                        ? service.bulletPoints.map((point: string) => point.trim()).join(" • ")
                        : "Advanced Engineering Solution"}
                    </div>
                    <div className="text-xs text-secondary/60 border-t border-secondary/10 pt-4 mb-4 italic line-clamp-2">
                      {service.description}
                    </div>
                    <Link
                      href={`/service/${service._id}`}
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-white font-bold text-sm rounded-lg transition-all active:scale-95"
                    >
                      View Details
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};