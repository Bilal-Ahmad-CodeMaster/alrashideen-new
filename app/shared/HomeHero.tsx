"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface Banner {
    _id: string;
    title: string;
    desktopImage: string;
    mobileImage: string;
}

interface HomeHeroProps {
    banners: Banner[];
}

function HomeHero({ banners }: HomeHeroProps) {
    // Encodes spaces in URLs (e.g., "WhatsApp Image" -> "WhatsApp%20Image")
    const formatUrl = (url: string) => {
        if (!url) return "";
        return url.replace(/ /g, '%20');
    };

    return (
        <header className="relative h-[85vh] lg:h-[880px] bg-[#181a30] overflow-hidden">

            {/* 1. BACKGROUND LAYER (Swiper) - Z-INDEX 0 */}
            <div className="absolute inset-0 z-0">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={1500}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                    {banners && banners.length > 0 ? (
                        banners.map((banner) => (
                            <SwiperSlide key={banner._id} className="relative w-full h-full">
                                {/* Desktop Background */}
                                <div
                                    className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] scale-105 swiper-slide-active:scale-100"
                                    style={{ backgroundImage: `url("${formatUrl(banner.desktopImage)}")` }}
                                />

                                {/* Mobile Background */}
                                <div
                                    className="block md:hidden absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url("${formatUrl(banner.mobileImage)}")` }}
                                />

                                {/* Dark Overlays for Text Contrast */}
                                <div className="absolute inset-0 bg-[#111936]/60" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/15 via-[#111936]/10 to-transparent" />
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <div className="absolute inset-0 bg-[#181a30]" />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

            {/* 2. CONTENT LAYER - Z-INDEX 10 (Higher than Swiper) */}
            <div className="relative z-10 w-full h-full pointer-events-none">
                <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24 flex items-center h-full">
                    <div className="max-w-[750px] pointer-events-auto">
                        {/* Tagline */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm">
                            <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse"></span>
                            <span className="text-[#ffd700] text-[10px] md:text-sm font-black uppercase tracking-[0.25em]">
                                Certified Engineering Firm
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="mt-8 text-[44px] leading-[0.92] sm:text-[78px] md:text-[96px] xl:text-[112px] font-black text-white uppercase tracking-[-0.05em] italic">
                            Crane<br />Repairing<br /><span className="text-[#ffd700]">Company</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-[560px] text-[18px] leading-[1.3] md:text-[24px] text-[#ffd700] border-l-[4px] border-[#ffd700] pl-5">
                            Professional crane repairing and maintenance services providing precision engineering solutions for heavy machinery.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a href="/services" className="text-center px-8 py-4 bg-[#ffd700] text-[#221b00] font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform">
                                Our Services
                            </a>
                            <a href="/contact" className="text-center px-8 py-4 border border-white/30 text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. STATS LAYER - Z-INDEX 20 (Top layer) */}
            <div className="absolute bottom-10 right-8 md:right-12 xl:right-16 hidden xl:flex flex-col gap-8 text-right z-20">
                <div>
                    <div className="text-6xl font-black text-[#ffd700] leading-none">25+</div>
                    <div className="mt-2 text-white/65 text-xs uppercase tracking-[0.35em]">Years of Expertise</div>
                </div>
                <div>
                    <div className="text-6xl font-black text-[#ffd700] leading-none">5000+</div>
                    <div className="mt-2 text-white/65 text-xs uppercase tracking-[0.35em]">Projects Completed</div>
                </div>
            </div>

            {/* Custom Styles for Pagination */}
            <style jsx global>{`
        .swiper-pagination-bullet { 
          background: white !important; 
          opacity: 0.5; 
        }
        .swiper-pagination-bullet-active { 
          background: #ffd700 !important; 
          opacity: 1; 
          width: 30px; 
          border-radius: 4px; 
        }
        .swiper-pagination { 
          text-align: left !important; 
          padding-left: 24px; 
          bottom: 40px !important;
          z-index: 30 !important;
        }
        @media (min-width: 1280px) { 
          .swiper-pagination { padding-left: 64px; } 
        }
      `}</style>
        </header>
    );
}

export default HomeHero;