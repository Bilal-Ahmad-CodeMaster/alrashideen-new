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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,.16),transparent_30%),linear-gradient(90deg,rgba(10,18,48,.96),rgba(10,18,48,.90),rgba(10,18,48,.84))]"></div>
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.1)_49.5%,rgba(255,255,255,.1)_50.5%,transparent_50.5%,transparent_100%)]"></div>
        <div className="relative container-wrap px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-yellow-400/20 rounded-lg bg-white/5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs md:text-sm font-black uppercase tracking-[0.28em]">
                Project Showcase
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">
              Our Projects <br />
              <span className="text-primary">Portfolio</span>
            </h1>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-yellow-300 font-medium">
              Showcase of completed crane repairs, structural work, and
              engineering projects across the construction and heavy machinery
              sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-20 bg-[#f6f7fb] grid-dots min-h-[600px]">
        <div className="container-wrap px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 border-b border-slate-200 pb-12">
            <div className="max-w-3xl">
              <p className="text-yellow-700 text-sm font-black uppercase tracking-[0.28em] mb-3">
                Al Rashideen Engineering Group
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f1738] mb-6">
                Project Portfolio
              </h2>
              {/* Restored Line Below */}
              <p className="max-w-2xl text-slate-600 text-lg leading-8">
                This page now feels closer to the businesses page with the same
                premium industrial style. Each card showcases completed projects
                and can be updated with real workshop photos.
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