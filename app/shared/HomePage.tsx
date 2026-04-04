/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { CONFIG } from "@/config";
import HomeHero from "./HomeHero";

interface Banner {
  _id: string;
  title: string;
  desktopImage: string;
  mobileImage: string;
}

export const HomePage = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [coreService, setCoreService] = useState<any[]>([]);
  const [recentProjects, setRecentProjects] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const [bannerRes, serviceRes, projectRes] = await Promise.all([
        fetch(CONFIG.banners).then(res => res.json()),
        fetch(CONFIG.coreService).then(res => res.json()),
        fetch(CONFIG.recentProjects).then(res => res.json())
      ]);
      setBanners(bannerRes.data || []);
      setCoreService(serviceRes.data[0]?.serviceIds || []);
      setRecentProjects(projectRes.data[0]?.projectIds || []);
    } catch (error) {
      console.error("Failed to fetch page data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const steps = [
    { step: "01", title: "Inquiry", icon: "mail", desc: "Initial requirement analysis and documentation gathering." },
    { step: "02", title: "Inspection", icon: "search", desc: "On-site or workshop technical assessment and NDT testing." },
    { step: "03", title: "Scope + Quote", icon: "description", desc: "Detailed repair methodology and commercial proposal." },
    { step: "04", title: "Repair & Testing", icon: "build", desc: "Execution of engineering works followed by load tests." },
    { step: "05", title: "Handover", icon: "handshake", desc: "Final certification and delivery of the restored asset." },
  ];

  const partners = [
    "Al Rashideen Engineering Turning", "Lucky Star Heavy Equipment & Spare Parts",
    "Al Rushed Hydromechanical Equipment", "Najmat Al Rashideen Transport LLC",
    "Tareeq Al Etefaq Construction Equipment", "ARG LUBE"
  ];

  return (
    <>
   <HomeHero banners={banners}/>
      {/* ================= CORE EXPERTISE ================= */}
      <section className="py-24 bg-grid-pattern">
        <div className="container-wrap px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 items-end mb-14">
            <div>
              <p className="text-[#ffd700] text-sm font-black uppercase tracking-[0.3em] mb-3">
                Precision Services
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
                Our Core Expertise
              </h2>
            </div>
            <p className="max-w-md text-slate-600">
              We specialize in crane structural repair, dismantling work, component restoration and precision workshop support for heavy lifting equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreService.length > 0 ? (
              coreService.map((service) => (
                <Link
                  key={service._id}
                  href={`/service/${service._id}`}
                  className="group relative overflow-hidden bg-[#181a30] aspect-[4/4] block shadow-xl"
                >
                  {/* Background Image - Priority: icon or first gallery image */}
                  <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center group-hover:scale-110 transition duration-700"
                    style={{
                      backgroundImage: `url('${service.galleryImages?.[0]?.image || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80'}')`
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111936] via-[#111936]/60 to-transparent z-10" />

                  <div className="relative h-full flex flex-col justify-end p-8 z-20">
                    {/* Icon fallback using a default industrial icon if null */}
                    <span className="material-symbols-outlined text-[#ffd700] text-4xl mb-5">
                      {service.icon || 'engineering'}
                    </span>

                    <h3 className="text-white text-2xl font-black uppercase leading-tight group-hover:text-[#ffd700] transition-colors">
                      {service.title}
                    </h3>

                    <div className="w-12 h-1 bg-[#ffd700] my-5 group-hover:w-full transition-all duration-500"></div>

                    <p className="text-white/80 text-sm line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              /* Skeleton Loader or Nothing if data hasn't arrived */
              <div className="col-span-full py-20 text-center text-slate-400">
                Loading Expertise...
              </div>
            )}
          </div>
        </div>
      </section>
      {/* ================= ADVANTAGE SECTION ================= */}
      <section className="py-24 bg-(--ink) text-white overflow-hidden">
        <div className="container-wrap px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[var(--primary-container)] text-sm font-black uppercase tracking-[0.3em] mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">The Al Rashideen Advantage</h2>
            <p className="mt-8 text-white/75 text-lg leading-8">We combine workshop capability, field experience and practical repair workflow to support crane owners, contractors and industrial clients across the UAE.</p>
            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[var(--primary-container)] text-4xl">verified</span>
                <div><h3 className="font-black uppercase text-sm">Quality Focused</h3><p className="text-white/60 text-sm mt-2">Clear inspection, repair planning and workshop execution.</p></div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[var(--primary-container)] text-4xl">speed</span>
                <div><h3 className="font-black uppercase text-sm">Fast Communication</h3><p className="text-white/60 text-sm mt-2">WhatsApp-friendly workflow for quicker technical review.</p></div>
              </div>
            </div>
            <Link href="/about" className="inline-block mt-10 px-8 py-4 bg-[var(--primary-container)] text-[var(--on-primary-container)] font-black text-sm uppercase tracking-[0.2em]">About Company</Link>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-28 h-28 border-t-8 border-l-8 border-[var(--primary-container)]/20"></div>
            <div className="relative z-10 w-full h-[520px]">
              <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80" alt="Workshop" fill className="object-cover shadow-card" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-[var(--primary-container)]/10"></div>
          </div>
        </div>
      </section>

      {/* ================= RECENT PROJECTS (BENTO GRID) ================= */}
      <section className="py-24 bg-white">
        <div className="container-wrap px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[var(--primary)] text-sm font-black uppercase tracking-[0.38em] mb-4">Showcase</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Recent Projects</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:h-[760px]">
            {/* Map first 3 projects to match bento layout */}
            {recentProjects.slice(0, 3).map((project, idx) => (
              <Link
                key={project._id}
                href="/project"
                className={`${idx === 0 ? 'lg:col-span-3 lg:row-span-2' : 'lg:col-span-2'} relative rounded-[12px] overflow-hidden group bg-ink min-h-[300px]`}
              >
                <Image src={project.image || "/assets/placeholder.webp"} alt={project.title} fill className="object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111936]/88 via-[#111936]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <div className="text-[var(--primary-container)] text-xs font-black uppercase tracking-[0.22em] mb-4">Industrial Support</div>
                  <h3 className={`text-white font-black uppercase leading-none ${idx === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING PROCESS ================= */}
      <section className="py-24 bg-surface">
        <div className="container-wrap px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20">
            <h3 className="text-4xl font-black text-ink uppercase tracking-tight mb-4 md:mb-0">OUR ENGINEERING PROCESS</h3>
            <div className="flex items-center gap-4 text-[var(--primary)] font-black uppercase tracking-[0.22em] text-sm">
              <span>Workflow</span>
              <div className="w-12 h-[2px] bg-[var(--primary)]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 border-b-2 border-transparent hover:border-[var(--primary-container)] transition-all min-h-[290px] shadow-soft">
                <div className="text-6xl md:text-7xl font-black text-slate-100 mb-8">{step.step}</div>
                <div className="text-[var(--primary)] mb-8">
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <h4 className="text-ink font-black uppercase text-2xl md:text-[28px] tracking-tight mb-4">{step.title}</h4>
                <p className="text-[var(--muted)] text-lg leading-8">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="py-16 bg-[var(--surface-2)] border-y border-[var(--outline)]/30">
        <div className="container-wrap px-6 lg:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--muted)] italic mb-10">Our Strategic Partners & Businesses</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, i) => (
              <div key={i} className="bg-white rounded-xl px-4 py-6 font-bold text-sm shadow-soft flex items-center justify-center min-h-[80px]">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-surface">
        <div className="container-wrap px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[var(--primary)] text-sm font-black uppercase tracking-[0.3em] mb-3">Ready to Talk</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Need Help With Your Crane Repair Job?</h2>
            <p className="mt-6 text-[var(--muted)] leading-8 max-w-2xl">Send machine details, photos or repair requirements and our team will review the job and guide you with the right repair support.</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a href="https://wa.me/971526366779" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[var(--primary-container)] text-[var(--on-primary-container)] font-black text-sm uppercase tracking-[0.2em]">WhatsApp Now</a>
            <Link href="/contact#inquiry" className="px-8 py-4 border border-[var(--outline)] text-ink font-black text-sm uppercase tracking-[0.2em]">Send Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
};