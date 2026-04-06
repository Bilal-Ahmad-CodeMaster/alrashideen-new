"use client";

import { useFormSubmit } from "@/app/hooks/useFormSubmit";
import { ContactFormData } from "@/app/types/form.types";
import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";

export const ContactContent = () => {
  const appContext = useApp();
  const themeConfig = appContext?.themeConfig;
  const phone = themeConfig?.phoneNumber.replace(/\s+/g, "");

  // Function to determine form type based on URL hash
  const getFormType = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#inquiry") return "inquiry";
      if (hash === "#job") return "job";
    }
    return "contact";
  };

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    equipmentType: "",
    message: "",
  });

  // Pass the dynamic type to your hook
  const { submitForm, isSubmitting, submitStatus } = useFormSubmit(getFormType(), {
    onSuccess: () => {
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        equipmentType: "",
        message: "",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const filteredValue = value.replace(/[^0-9+]/g, "");
      setFormData((prev) => ({ ...prev, phone: filteredValue }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <>
      <main className="bg-white">
        {/* --- PROFESSIONAL HERO SECTION --- */}
        <section className="relative min-h-[35vh] lg:h-[320px] flex items-center overflow-hidden bg-[#181a30] py-12 lg:py-0">
          {/* Background Layer with Consistent Image & Gradients */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#111936]/70 z-10" />
            <div
              className="w-full h-full bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/60 via-[#111936]/30 to-transparent z-10" />
          </div>

          <div className="relative z-20 w-full">
            <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
              <div className="max-w-[1100px]">

                {/* 1. Tagline Badge - Compact */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse"></span>
                  <span className="text-[#ffd700] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                    Connect with us
                  </span>
                </div>

                {/* 2. Main Heading - Scaled & Professional */}
                <h1 className="text-[36px] leading-[0.95] sm:text-[54px] md:text-[64px] xl:text-[72px] font-black text-white uppercase tracking-[-0.04em] italic">
                  Get Your Project <span className="text-[#ffd700]">Moving Today</span>
                </h1>

                {/* 3. Description - Precise Font Size & Original Text */}
                <p className="mt-4 max-w-[750px] text-[14px] leading-[1.4] md:text-[18px] text-[#ffd700]/90 border-l-[3px] border-[#ffd700] pl-4 font-medium">
                  Professional heavy equipment rental and industrial engineering solutions across the UAE.
                  Our experts are ready to assist with your specific machinery needs.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT & ENQUIRY SECTION --- */}
        <section className="py-24 bg-white" id="enquiry">
          <div className="container-wrap px-6 lg:px-14 grid lg:grid-cols-[2fr_3fr] gap-10">

            {/* Contact Details Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-black uppercase text-slate-900">Contact Details</h2>
              <div className="mt-8 space-y-8 text-slate-600 leading-8">
                <div>
                  <div className="text-primary text-xs font-black uppercase tracking-[0.25em] mb-1">Address</div>
                  <div className="font-semibold text-slate-900">{themeConfig?.address || "Industrial Area, Sajaa, Sharjah, UAE"}</div>
                </div>
                <div>
                  <div className="text-primary text-xs font-black uppercase tracking-[0.25em] mb-1">Phone</div>
                  <a href={`tel:${phone}`} className="text-slate-900 text-xl font-bold hover:text-primary transition-colors">
                    {themeConfig?.phoneNumber}
                  </a>
                </div>
                <div>
                  <div className="text-primary text-xs font-black uppercase tracking-[0.25em] mb-1">Email</div>
                  <a href={`mailto:${themeConfig?.email}`} className="text-slate-900 font-semibold border-b border-slate-200 hover:border-primary transition-all">
                    {themeConfig?.email}
                  </a>
                </div>
                <div>
                  <div className="text-primary text-xs font-black uppercase tracking-[0.25em] mb-1">WhatsApp</div>
                  <a href={`https://wa.me/${phone}`} className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                    Open Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Combined Professional Form */}
            <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-xl space-y-5">
              <h2 className="text-3xl font-black uppercase text-slate-900">
                {getFormType() === "job" ? "Job Application" : "Send Enquiry"}
              </h2>

              {submitStatus && (
                <div className={`p-4 rounded-xl text-sm font-bold uppercase tracking-wide ${submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full rounded-xl border-slate-200 bg-slate-50 p-4 focus:ring-2 focus:ring-primary outline-none transition-all" type="text" placeholder="Your Name" />
                <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full rounded-xl border-slate-200 bg-slate-50 p-4 focus:ring-2 focus:ring-primary outline-none transition-all" type="text" placeholder="Phone Number" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border-slate-200 bg-slate-50 p-4 focus:ring-2 focus:ring-primary outline-none transition-all" type="email" placeholder="Email Address" />
                <input name="companyName" value={formData.companyName} onChange={handleChange} className="w-full rounded-xl border-slate-200 bg-slate-50 p-4 focus:ring-2 focus:ring-primary outline-none transition-all" type="text" placeholder="Company Name" />
              </div>
              {(getFormType() !== "job") && (
                <input name="equipmentType" value={formData.equipmentType} onChange={handleChange} className="w-full rounded-xl border-slate-200 bg-slate-50 p-4 focus:ring-2 focus:ring-primary outline-none transition-all" type="text" placeholder={getFormType() === "job" ? "Position Applied For" : "Machine / Service Required"} />)
              }
              <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full rounded-xl border-slate-200 bg-slate-50 min-h-[180px] p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder={getFormType() === "job" ? "Describe your experience and skills" : "Write your requirement, machine model, issue details or job scope"}></textarea>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-primary transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Form"}
                </button>
                <a href={`https://wa.me/${phone}`} className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all">
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* --- LOCATION MAP SECTION --- */}
        <section
          className="bg-black py-0 relative overflow-hidden h-[500px] cursor-pointer"
          onClick={() => window.open("https://maps.app.goo.gl/YourMapID", "_blank")}
        >
          <div className="absolute inset-0 map-container opacity-60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.5134106566!2d55.6133!3d25.3522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzA3LjkiTiA1NcKwMzYnNDcuOSJF!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Rashideen Engineering Location"
            />
          </div>

          <div className="relative h-full w-full flex items-center justify-center pointer-events-none">
            {/* HQ Pin */}
            <div className="absolute top-[30%] left-[40%] flex flex-col items-center">
              <div className="bg-primary text-white px-3 py-1 rounded shadow-lg text-[10px] font-black uppercase mb-1">AL RASHIDEEN HQ</div>
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>

            {/* Directions Card */}
            <div className="z-20 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-sm border border-slate-200 pointer-events-auto">
              <h4 className="font-black text-slate-900 text-xl uppercase mb-2">Visit Our Yard</h4>
              <p className="text-sm text-slate-600 mb-6 font-medium">Get real-time navigation directions to our heavy equipment facility in Sajaa Industrial Area.</p>
              <a
                href="https://maps.app.goo.gl/YourMapID"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 text-white font-black py-4 rounded flex items-center justify-center gap-2 hover:bg-primary transition-colors text-sm uppercase tracking-widest"
              >
                Open Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};