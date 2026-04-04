import React from 'react';
import Link from 'next/link';

const CareersPage = () => {
  return (
    <main className="min-h-screen  bg-white">
      {/* ================= COMPACT HERO SECTION (Max 40% Height) ================= */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden bg-[#0a1230]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,.12),transparent_40%),linear-gradient(90deg,rgba(10,18,48,.96),rgba(10,18,48,.90))]"></div>
        <div className="relative container-wrap px-6 lg:px-8 mt-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-[#ffd700]/30 rounded-full bg-[#ffd700]/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse"></span>
              <span className="text-[#ffd700] text-[10px] font-black uppercase tracking-[0.3em]">Careers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              Join Our <span className="text-[#ffd700]">Expert Team</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-300 text-sm md:text-base border-l-2 border-[#ffd700] pl-4">
              We are looking for skilled technicians and engineers to support our heavy lifting and engineering operations in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOBS LISTING ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[1680px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Side: Job Listings (Takes up 7 of 12 columns) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Job 01 */}
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  <p className="text-[#ffd700] text-xs font-black uppercase tracking-[0.25em]">Open Position</p>
                  <h2 className="mt-2 text-lg md:text-2xl font-black uppercase text-[#181a30]">Crane Electrician / Diagnostic Technician</h2>
                </div>
                <Link
                  href="/contact#job"
                  className="whitespace-nowrap px-5 py-3 bg-[#ffd700] text-[#181a30] font-bold rounded-lg hover:bg-[#181a30] hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </div>
              <p className="mt-5 text-slate-500 leading-8 text-lg">
                Deep knowledge of crane electrical systems, fault diagnosis and repair experience.
              </p>
            </div>

            {/* Job 02 */}
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  <p className="text-[#ffd700] text-xs font-black uppercase tracking-[0.25em]">Open Position</p>
                  <h2 className="mt-2 text-lg md:text-2xl font-black uppercase text-[#181a30]">Diesel Mechanic</h2>
                </div>
                <Link
                  href="/contact#inquiry"
                  className="whitespace-nowrap px-5 py-3 bg-[#ffd700] text-[#181a30] font-bold rounded-lg hover:bg-[#181a30] hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </div>
              <p className="mt-5 text-slate-500 leading-8 text-lg">
                Heavy equipment engine maintenance, troubleshooting and preventive service experience.
              </p>
            </div>

            {/* Job 03 */}
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  <p className="text-[#ffd700] text-xs font-black uppercase tracking-[0.25em]">Open Position</p>
                  <h2 className="mt-2 text-lg md:text-2xl font-black uppercase text-[#181a30]">Lathe Machine Operator</h2>
                </div>
                <Link
                  href="/contact#inquiry"
                  className="whitespace-nowrap px-5 py-3 bg-[#ffd700] text-[#181a30] font-bold rounded-lg hover:bg-[#181a30] hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </div>
              <p className="mt-5 text-slate-500 leading-8 text-lg">
                Workshop machining and turning experience with industrial components.
              </p>
            </div>

            {/* Job 04 */}
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  <p className="text-[#ffd700] text-xs font-black uppercase tracking-[0.25em]">Open Position</p>
                  <h2 className="mt-2 text-lg md:text-2xl font-black uppercase text-[#181a30]">Workshop Supervisor</h2>
                </div>
                <Link
                  href="/contact#job"
                  className="whitespace-nowrap px-5 py-3 bg-[#ffd700] text-[#181a30] font-bold rounded-lg hover:bg-[#181a30] hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </div>
              <p className="mt-5 text-slate-500 leading-8 text-lg">
                Hands-on experience managing repair jobs, manpower and workshop execution.
              </p>
            </div>
          </div>

          {/* Right Side: Sidebar (Takes up 5 of 12 columns) */}
          <aside className="lg:col-span-5 h-fit sticky top-24">
            <div className="rounded-2xl bg-[#f8f9fc] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black uppercase text-[#181a30]">How to Apply</h3>
              <p className="mt-5 text-slate-600 leading-8">
                Send your CV, trade details, visa status and contact number through the enquiry form or WhatsApp.
                You can replace this with your exact hiring process later.
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