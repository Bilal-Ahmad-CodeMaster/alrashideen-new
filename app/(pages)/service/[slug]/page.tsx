/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { CONFIG } from "@/config";
import toast from "react-hot-toast";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [currentService, setCurrentService] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedServices, setRelatedServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFullData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${CONFIG.getServiceById}/${params.slug}`);
        const data = await response.json();

        if (data.meta.status === "success" && data.data) {
          setCurrentService(data.data);
          const relatedRes = await fetch(`${CONFIG.getAllRelatedServices}/${data.data._id}`);
          const relatedData = await relatedRes.json();
          if (relatedData.data) setRelatedServices(relatedData.data);
        } else {
          router.push("/service");
        }
      } catch (err) {
        toast.error("Error loading service data.");
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) fetchFullData();
  }, [params.slug, router]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === currentService.galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentService.galleryImages.length - 1 : prev - 1));
  };

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!currentService) return null;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* --- SECTION 1: HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[var(--ink)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,.14),transparent_28%),linear-gradient(90deg,rgba(24,26,48,.98),rgba(24,26,48,.92),rgba(24,26,48,.86))]"></div>
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.1)_49.5%,rgba(255,255,255,.1)_50.5%,transparent_50.5%,transparent_100%)]"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-14 py-12 md:py-24 lg:py-28 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--primary-container)]/25 rounded-lg bg-white/5 mb-6 md:mb-8">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[var(--primary-container)]"></span>
              <span className="text-[var(--primary-container)] text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.28em]">
                {currentService.bulletPoints?.[0] || "Professional Service"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] text-white">
              {currentService.title}
            </h1>
            <p className="mt-6 md:mt-8 max-w-3xl text-sm md:text-lg lg:text-xl leading-7 md:leading-9 text-[var(--primary-container)]">
              {currentService.description}
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/971526366779" className="text-center px-6 md:px-8 py-3 md:py-4 bg-[var(--primary-container)] text-[var(--on-primary-container)] font-black text-[12px] md:text-sm uppercase tracking-[0.18em]">
                Request Service
              </a>
              <a href="https://wa.me/971526366779" className="text-center px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white font-black text-[12px] md:text-sm uppercase tracking-[0.18em]">
                Send Photos On WhatsApp
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -top-3 md:-top-5 left-0 h-16 w-16 md:h-28 md:w-28 border-t-4 md:border-t-[10px] border-l-4 md:border-l-[10px] border-[var(--primary-container)]/25"></div>
            <div className="absolute -bottom-3 md:-bottom-5 right-0 h-20 w-20 md:h-32 md:w-32 border-b-4 md:border-b-[10px] border-r-4 md:border-r-[10px] border-[var(--primary-container)]/12"></div>
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,.24),transparent_30%),linear-gradient(135deg,#181a30,#22243a_58%,#181a30)] shadow-soft border border-white/10 min-h-[350px] md:min-h-[480px] flex items-end">
              {currentService.galleryImages?.[0] && (
                <img src={currentService.galleryImages[0].image} className="absolute inset-0 w-full h-full object-cover" alt="Hero Featured" />
              )}
              <div className="p-6 md:p-10 lg:p-12 relative w-full bg-gradient-to-t from-[var(--ink)] to-transparent">
                <p className="text-[var(--primary-container)] text-[10px] md:text-sm font-black uppercase tracking-[0.28em]">Technical Showcase</p>
                <p className="mt-2 md:mt-4 text-slate-300 text-sm md:text-lg leading-6 md:leading-8 max-w-xl">
                  {currentService.galleryImages?.[0]?.description || "Detailed inspection and overhaul view of our specialized equipment handling."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: MAIN PAGE CONTENT --- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 grid lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-10 items-start">
          <div className="bg-white rounded-2xl md:rounded-[2rem] border border-slate-200 shadow-soft overflow-hidden">
            <div className="bg-[var(--ink)] px-6 md:px-10 py-6 md:py-8">
              <p className="text-[var(--primary-container)] text-[10px] md:text-sm font-black uppercase tracking-[0.28em] mb-2 md:mb-3">Service Overview</p>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">{currentService.title}</h2>
            </div>
            <div className="p-6 md:p-10">
              <p className="text-slate-700 text-sm md:text-lg leading-7 md:leading-9">
                {currentService.description}
              </p>

              {/* Practical Steps Row */}
              <div className="mt-8 md:mt-10 grid sm:grid-cols-2 gap-4 md:gap-5">
                {currentService.practicalSteps?.map((step: any, idx: number) => (
                  <div key={idx} className="rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 p-5 md:p-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--primary)]">Step 0{idx + 1}</p>
                    <h3 className="mt-2 md:mt-3 text-lg md:text-xl font-black uppercase leading-tight text-slate-900">{step.practicalStepHeading}</h3>
                    <p className="mt-2 md:mt-3 text-slate-600 text-xs md:text-base leading-6 md:leading-7">{step.practicalStepDescription}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[var(--ink)] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-soft">
            <div className="relative aspect-video w-full bg-black/20 group">
              {currentService.galleryImages?.[currentImageIndex] && (
                <img
                  src={currentService.galleryImages[currentImageIndex].image}
                  className="w-full h-full object-cover"
                  alt="Gallery Swiper"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-[10px] md:text-xs italic">{currentService.galleryImages?.[currentImageIndex]?.description}</p>
              </div>
              <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 text-white backdrop-blur-md flex items-center justify-center">
                <span className="material-symbols-outlined text-sm md:text-base">chevron_left</span>
              </button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 text-white backdrop-blur-md flex items-center justify-center">
                <span className="material-symbols-outlined text-sm md:text-base">chevron_right</span>
              </button>
            </div>

            <div className="p-6 md:p-10 border-b border-white/10">
              <p className="text-[var(--primary-container)] text-[10px] md:text-sm font-black uppercase tracking-[0.28em] mb-3 md:mb-4">Technical Specs</p>
              <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight text-white">Features & Highlights</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {currentService.bulletPoints?.map((bp: string, i: number) => (
                  <span key={i} className="text-[9px] md:text-[10px] text-white/60 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-widest font-bold">
                    {bp}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-10 space-y-4 md:space-y-5">
              {currentService.features?.map((f: any, i: number) => (
                <div key={i} className="flex gap-3 md:gap-4 items-start">
                  <span className="material-symbols-outlined text-[var(--primary-container)] text-sm md:text-base">verified</span>
                  <p className="text-white/90 text-xs md:text-base">{f.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CTA SECTION --- */}
      <section className="py-12 md:py-20 bg-[#f6f8ff] grid-dots">
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="rounded-2xl md:rounded-[2rem] bg-[var(--ink)] px-6 md:px-12 py-10 md:py-14 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[var(--primary-container)] text-[10px] md:text-sm font-black uppercase tracking-[0.28em] mb-3 md:mb-4">Next Step</p>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">Need The Same Type Of Work?</h2>
              <p className="mt-4 md:mt-5 text-slate-300 text-sm md:text-lg leading-7 md:leading-8">
                Send your equipment model, photos and problem details. We can review the scope and guide you toward the right workshop support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/971526366779" className="text-center px-6 md:px-7 py-3 md:py-4 bg-[var(--primary-container)] text-[var(--on-primary-container)] font-black text-[12px] md:text-sm uppercase tracking-[0.18em]">
                Request Quotation
              </a>
              <Link href="/service" className="text-center px-6 md:px-7 py-3 md:py-4 border border-white/20 text-white font-black text-[12px] md:text-sm uppercase tracking-[0.18em]">
                Back To Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: RELATED SERVICES --- */}
      {relatedServices.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 text-[var(--ink)]">
            Related <span className="text-[var(--primary)]">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service._id}
                href={`/service/${service._id}`}
                className="group bg-white border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden hover:border-[var(--primary-container)] shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  {service.galleryImages?.[0]?.image ? (
                    <img
                      src={service.galleryImages[0].image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-300 text-3xl md:text-4xl">image</span>
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-5 text-center bg-white">
                  <h4 className="font-bold text-sm md:text-base text-[var(--ink)] truncate group-hover:text-[var(--primary)] transition-colors">
                    {service.title}
                  </h4>
                  {service.bulletPoints?.length > 0 && (
                    <p className="text-[9px] md:text-[10px] text-slate-500 mt-2 line-clamp-1 italic">
                      {service.bulletPoints.map((bp: string) => bp.trim()).join(" • ")}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}