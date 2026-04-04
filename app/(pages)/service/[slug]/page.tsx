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
        // 1. Fetch Service Details
        const response = await fetch(`${CONFIG.getServiceById}/${params.slug}`);
        const data = await response.json();

        if (data.meta.status === "success" && data.data) {
          setCurrentService(data.data);

          // 2. Fetch Related Services using the ID from data.data
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

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
  if (!currentService) return null;

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Breadcrumb Header */}
      <div className="bg-secondary py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-white/70">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/service" className="hover:text-white">Services</Link>
          <span>/</span>
          <span className="text-white font-medium truncate">{currentService.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-secondary/10 lg:flex">
          {/* Gallery (Mapped from galleryImages) */}
          <div className="lg:w-1/2 p-6 bg-slate-100">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-inner">
              <img src={currentService.galleryImages[currentImageIndex]?.image} className="w-full h-full object-contain" alt="Gallery" />
              {currentService.galleryImages.length > 1 && (
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  <button onClick={() => setCurrentImageIndex(i => i === 0 ? currentService.galleryImages.length - 1 : i - 1)} className="w-10 h-10 rounded-full bg-white shadow-md"><span className="material-symbols-outlined mt-1">chevron_left</span></button>
                  <button onClick={() => setCurrentImageIndex(i => i === currentService.galleryImages.length - 1 ? 0 : i + 1)} className="w-10 h-10 rounded-full bg-white shadow-md"><span className="material-symbols-outlined mt-1">chevron_right</span></button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {currentService.galleryImages.map((img: any, idx: number) => (
                <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`aspect-square rounded-lg overflow-hidden border-2 ${idx === currentImageIndex ? "border-primary" : "border-transparent"}`}>
                  <img src={img.image} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Content (Mapped from description, bulletPoints, features) */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-primary mb-4">{currentService.title}</h1>
            <p className="text-lg text-primary/70 mb-8">{currentService.bulletPoints && currentService.bulletPoints.length > 0
              ? currentService.bulletPoints.map((point: string) => point.trim()).join(" • ")
              : "Advanced Engineering Solution"}</p>

            <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-xl mb-10">
              <p className="text-primary font-medium">{currentService.description}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-black flex items-center gap-2">
                <span className="material-symbols-outlined">checklist</span> Key Technical Features
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {currentService.features.map((f: any, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-100 rounded-xl">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="text-secondary/80 font-medium">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://wa.me/971526366779" className="mt-12 w-full py-4 bg-secondary text-white rounded-xl font-bold text-center hover:bg-black transition-all">
              Request Quotation on WhatsApp
            </a>
          </div>
        </div>

        {/* Related Services Section */}
        {relatedServices.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-center mb-12">
              Related <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service) => (
                <Link
                  key={service._id}
                  href={`/service/${service._id}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-primary shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  {/* Service Image Container */}
                  <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                    {service.galleryImages?.[0]?.image ? (
                      <img
                        src={service.galleryImages[0].image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-300 text-4xl">image</span>
                      </div>
                    )}
                    {/* Optional Overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 text-center">
                    <h4 className="font-bold text-primary truncate group-hover:text-secondary transition-colors">
                      {service.title}
                    </h4>

                    {/* Bullet points on related services (Inline dot style) */}
                    {service.bulletPoints?.length > 0 && (
                      <p className="text-[10px] text-slate-500 mt-2 line-clamp-1 italic">
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
    </div>
  );
}