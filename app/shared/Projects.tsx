/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CONFIG } from "@/config";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]); // New state for videos
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch Projects
        const projRes = await fetch(CONFIG.getAllProjects);
        const projData = await projRes.json();
        if (projData.meta.status === "success") setProjects(projData.data);

        // Fetch Videos (Assuming similar endpoint structure)
        // If you don't have a separate endpoint yet, you can map projects or use dummy data
        const vidRes = await fetch(CONFIG.getAllVideos);
        const vidData = await vidRes.json();
        if (vidData.meta.status === "success") setVideos(vidData.data);

      } catch (err) {
        toast.error("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Toaster position="top-right" />

      {/* Image Preview Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white text-4xl font-light hover:text-[#ffd700] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[35vh] lg:h-[320px] flex items-center overflow-hidden bg-[#181a30] py-12 lg:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111936]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/40 via-[#111936]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,.08),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.1)_49.5%,rgba(255,255,255,.1)_50.5%,transparent_50.5%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-[1100px]">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse"></span>
                <span className="text-[#ffd700] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                  Showcase & Media
                </span>
              </div>
              <h1 className="text-[36px] leading-[0.95] sm:text-[54px] md:text-[64px] xl:text-[72px] font-black text-white uppercase tracking-[-0.04em] italic">
                Our Work <span className="text-[#ffd700]">& Media</span>
              </h1>
              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.4] md:text-[18px] text-[#ffd700]/90 border-l-[3px] border-[#ffd700] pl-4 font-medium">
                Visual documentation of completed crane repairs and engineering turning.
                Witness elite craftsmanship in action across the heavy machinery sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#f6f7fb] grid-dots">
        <div className="container-wrap px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 border-b border-slate-200 pb-12">
            <div className="max-w-3xl">
              <p className="text-yellow-700 text-sm font-black uppercase tracking-[0.28em] mb-3">
                Project Portfolio
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f1738]">
                Engineering Case Studies
              </h2>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article key={project._id || index} className="bg-white rounded-2xl overflow-hidden shadow-soft group flex flex-col h-full border border-slate-100 hover:border-primary/20 transition-all">
                  <div className="h-64 bg-cover bg-center cursor-pointer transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${project.image}')` }} onClick={() => setSelectedImage(project.image)}></div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">Project {String(index + 1).padStart(2, "0")}</span>
                    <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-secondary">{project.title}</h2>
                    <p className="mt-4 text-slate-600 leading-7 line-clamp-3 mb-6">{project.description || "Structural repair and reinforcement work with premium industrial standards."}</p>
                    <div className="mt-auto">
                      <Link href="/contact#inquiry" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-all gap-2 group/btn">
                        Request Similar Work <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEW SECTION: Video Showcase */}
      <section className="py-24 bg-white">
        <div className="container-wrap px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 border-b border-slate-200 pb-12">
            <div className="max-w-3xl">
              <p className="text-yellow-700 text-sm font-black uppercase tracking-[0.28em] mb-3">
                Media Center
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f1738]">
                Operational Videos
              </h2>
            </div>
            <p className="max-w-xl text-slate-600 text-lg leading-relaxed">
              Experience the scale of our operations. From precision lathe work to site-wide crane boom assembly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <article key={video._id || index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-soft group flex flex-col h-full border border-slate-200">
                  {/* Video Thumbnail with Play Button Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${video.bannerImage || video.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                    {/* Play Icon */}
                    <Link
                      href={video.videoUrl || "#"}
                      target="_blank"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-[#ffd700] text-[#181a30] rounded-full flex items-center justify-center shadow-2xl transform transition-all group-hover:scale-110">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </Link>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-yellow-700 text-[10px] font-black uppercase tracking-[0.25em] bg-yellow-100 px-2 py-1 rounded">
                        Action Reel
                      </span>
                    </div>
                    <h2 className="text-2xl font-black uppercase leading-tight text-secondary">
                      {video.title}
                    </h2>
                    <p className="mt-4 text-slate-600 leading-7 line-clamp-3 mb-6">
                      {video.description || "Visual overview of onsite repair execution and heavy turning precision."}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={video.videoUrl || "#"}
                        target="_blank"
                        className="inline-flex items-center font-bold text-secondary hover:text-primary transition-all gap-2 group/vid"
                      >
                        Watch Full Video
                        <span className="transition-transform group-hover/vid:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-slate-400 font-bold italic">Processing media library...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;