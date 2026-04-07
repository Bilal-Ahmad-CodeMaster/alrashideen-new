/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CONFIG } from "@/config";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(CONFIG.getAllProjects);

        if (!response.ok) {
          throw new Error(`Failed to fetch Projects: ${response.status}`);
        }

        const data = await response.json();

        if (data.meta.status === "success" && data.data) {
          setProjects(data.data);
        }
      } catch (err) {
        toast.error("Failed to load Projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Toaster position="top-right" />

      {/* Image Preview Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white text-4xl font-light hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Project Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <section className="relative min-h-[35vh] lg:h-[320px] flex items-center overflow-hidden bg-[#181a30] py-12 lg:py-0">
        {/* Background Layer with Consistent Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111936]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/40 via-[#111936]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,.08),transparent_50%)]"></div>
          {/* Grid Pattern Effect */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.1)_49.5%,rgba(255,255,255,.1)_50.5%,transparent_50.5%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-[1100px]">

              {/* 1. Tagline Badge - Scaled Down */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse"></span>
                <span className="text-[#ffd700] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                  Project Showcase
                </span>
              </div>

              {/* 2. Main Heading - Tighter Leading & Smaller Mobile Scaling */}
              <h1 className="text-[36px] leading-[0.95] sm:text-[54px] md:text-[64px] xl:text-[72px] font-black text-white uppercase tracking-[-0.04em] italic">
                Our Projects <span className="text-[#ffd700]">Portfolio</span>
              </h1>

              {/* 3. Description - Thinner border and reduced font size for a "Professional" feel */}
              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.4] md:text-[18px] text-[#ffd700]/90 border-l-[3px] border-[#ffd700] pl-4 font-medium">
                Showcase of completed crane repairs, structural work, and
                engineering projects across the construction and heavy machinery
                sectors. Delivering precision results since 2002.
              </p>

            </div>
          </div>
        </div>
      </section>
      {/* Main Grid Section */}
      <section className="py-20 bg-[#f6f7fb] grid-dots min-h-[600px]">
        <div className="container-wrap px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 border-b border-slate-200 pb-12">
            <div className=" flex md:flex-row flex justify-between w-full">
              <div className="max-w-3xl">
                <p className="text-yellow-700 text-sm font-black uppercase tracking-[0.28em] mb-3">
                  Al Rashideen Engineering Group
                </p>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f1738] mb-6">
                  Project Portfolio
                </h2>
              </div>
              {/* Restored Line Below */}
              <p className="max-w-2xl text-slate-600 text-lg leading-8">Driving industrial uptime through expert engineering. Our showcase highlights a legacy of complex crane logistics and bespoke machinery repairs that keep the construction sector moving. Where heavy industry meets elite craftsmanship
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article
                  key={project._id || index}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft group flex flex-col h-full"
                >
                  <div
                    className="h-64 bg-cover bg-center cursor-pointer transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                    onClick={() => setSelectedImage(project.image)}
                  ></div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-secondary">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-slate-600 leading-7 line-clamp-3 mb-6">
                      {project.description ||
                        "Structural repair and reinforcement work with premium industrial standards."}
                    </p>

                    {/* Link pushed to the bottom of the card */}
                    <div className="mt-auto">
                      <Link
                        href="/contact#inquiry"
                        className="inline-flex items-center font-bold text-primary hover:text-secondary transition-all gap-2 group/btn"
                      >
                        Request Similar Work
                        <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>


    </>
  );
};

export default Projects;