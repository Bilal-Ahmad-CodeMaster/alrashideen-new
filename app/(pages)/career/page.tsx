"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CONFIG } from "@/config";
import toast from "react-hot-toast";

const CareersPage = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(CONFIG.careerData); // Assuming CONFIG.getAllJobs points to your API
        const data = await response.json();
        if (data.meta.status === "success") {
          setJobs(data.data);
        }
      } catch (err) {
        toast.error("Failed to load job openings.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* ================= COMPACT HERO SECTION ================= */}
      <section className="relative min-h-[35vh] lg:h-[320px] flex items-center overflow-hidden bg-[#181a30] py-12 lg:py-0">
        {/* Background Layer with Consistent Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111936]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/40 via-[#111936]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,.08),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-[1100px]">

              {/* 1. Tagline Badge - Compact */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse"></span>
                <span className="text-[#ffd700] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                  Careers
                </span>
              </div>

              {/* 2. Main Heading - Scaled & Professional */}
              <h1 className="text-[36px] leading-[0.95] sm:text-[54px] md:text-[64px] xl:text-[72px] font-black text-white uppercase tracking-[-0.04em] italic">
                Join Our <span className="text-[#ffd700]">Expert Team</span>
              </h1>

              {/* 3. Description - Original Text with Tightened Spacing */}
              <p className="mt-4 max-w-[750px] text-[14px] leading-[1.4] md:text-[18px] text-[#ffd700]/90 border-l-[3px] border-[#ffd700] pl-4 font-medium">
                We are looking for skilled technicians and engineers to support our heavy lifting
                and engineering operations in the UAE. Join a legacy of engineering excellence.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= JOBS LISTING ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[1680px] mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Side: Job Listings */}
          <div className="lg:col-span-7 space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="w-10 h-10 border-4 border-[#ffd700] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job._id} className="rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="text-[#ffd700] text-xs font-black uppercase tracking-[0.25em]">
                          {job.isUrgent ? "Urgent Hiring" : "Open Position"}
                        </p>
                        {job.location && (
                          <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                            {job.location}
                          </span>
                        )}
                      </div>
                      <h2 className="mt-2 text-lg md:text-2xl font-black uppercase text-[#181a30]">
                        {job.title}
                      </h2>
                    </div>
                    <Link
                      href="/contact#job"
                      className="whitespace-nowrap px-5 py-3 bg-[#ffd700] text-[#181a30] font-bold rounded-lg hover:bg-[#181a30] hover:text-white transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <p className="mt-5 text-slate-500 leading-8 text-lg">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded uppercase tracking-tighter">
                      Exp: {job.experience} Years
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded uppercase tracking-tighter">
                      {job.employmentType}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-slate-100 rounded-2xl">
                <p className="text-slate-400">No open positions at the moment. Check back later!</p>
              </div>
            )}
          </div>

          {/* Right Side: Sidebar */}
          <aside className="lg:col-span-5 h-fit sticky top-24">
            <div className="rounded-2xl bg-[#f8f9fc] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black uppercase text-[#181a30]">How to Apply</h3>
              <p className="mt-5 text-slate-600 leading-8">
                Send your CV, trade details, visa status and contact number through the enquiry form or WhatsApp.
                Our HR team will review your application and get back to you shortly.
              </p>
              <a
                href="https://wa.me/971526366779"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-bold text-[#ffd700] bg-[#181a30] px-6 py-3 rounded-lg hover:bg-black transition-colors"
              >
                WhatsApp CV →
              </a>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
};

export default CareersPage;