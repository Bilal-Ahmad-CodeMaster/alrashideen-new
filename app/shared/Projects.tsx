/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CONFIG } from "@/config";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // State for the image preview modal
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
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgb(17, 17, 33)",
            color: "white",
            border: "1px solid rgb(212,175,55)/30",
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "rgb(17, 17, 33)",
            },
          },
        }}
      />

      {/* Image Preview Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-0 right-0 m-4 text-white text-4xl font-light hover:text-gray-300"
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

      <section className="bg-[#F2F2F2]  text-gray-800 w-full">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-[#1c1c0d] text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
              Our Engineering Projects
            </h1>
            <p className="text-black text-base sm:text-lg font-normal leading-relaxed">
              Showcasing precision engineering, advanced manufacturing
              excellence, and high-performance industrial solutions across
              diverse sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pt-8 pb-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((item) => (
              <div key={item._id} className="group flex flex-col gap-4">
                <div
                  className="relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div
                    className="w-full cursor-pointer h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${item.image}")`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#1c1c0d] capitalize text-lg font-bold leading-normal">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F2F2]  text-gray-800 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h2 className="text-black text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                Project Excellence
              </h2>
              <p className="text-black/70 text-lg">
                Our commitment to quality and technical precision is reflected
                in our performance metrics.
              </p>
            </div>
            <div className="md:w-2/3 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 rounded-xl p-8 bg-black/5 border border-black/10">
                  <span className="material-symbols-outlined text-4xl text-black">
                    inventory_2
                  </span>
                  <div>
                    <p className="text-black/60 text-sm font-bold uppercase tracking-widest">
                      Completed
                    </p>
                    <p className="text-black text-4xl font-black leading-none mt-1">
                      500+
                    </p>
                    <p className="text-black/60 text-xs font-medium mt-2">
                      Projects Worldwide
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl p-8 bg-black/5 border border-black/10">
                  <span className="material-symbols-outlined text-4xl text-black">
                    verified
                  </span>
                  <div>
                    <p className="text-black/60 text-sm font-bold uppercase tracking-widest">
                      Satisfaction
                    </p>
                    <p className="text-black text-4xl font-black leading-none mt-1">
                      100%
                    </p>
                    <p className="text-black/60 text-xs font-medium mt-2">
                      Client Approval Rate
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl p-8 bg-black/5 border border-black/10">
                  <span className="material-symbols-outlined text-4xl text-black">
                    history_edu
                  </span>
                  <div>
                    <p className="text-black/60 text-sm font-bold uppercase tracking-widest">
                      Experience
                    </p>
                    <p className="text-black text-4xl font-black leading-none mt-1">
                      25+
                    </p>
                    <p className="text-black/60 text-xs font-medium mt-2">
                      Years in Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;