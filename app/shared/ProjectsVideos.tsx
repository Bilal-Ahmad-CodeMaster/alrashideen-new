/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CONFIG } from "@/config";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const ProjectsVideos = () => {
    const [videos, setVideos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // State for Video Popup
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const vidRes = await fetch(CONFIG.getAllVideos);
                const vidData = await vidRes.json();

                // Log the actual data to your browser console to debug
                console.log("API Response:", vidData);

                if (vidRes.ok && vidData.status === "success") {
                    setVideos(vidData.data);
                } else {
                    // This will now catch your {status: "error", message: "404 Not Found"}
                    toast.error(`Backend Error: ${vidData.message}`);

                    // Keep the test data visible so the UI doesn't break while debugging
                    setVideos([
                        {
                            _id: "test-1",
                            title: "CRANE REPAIRING SPECIALIST CRANE BOOM REPAIR",
                            description: "CRANE REPAIRING SPECIALIST CRANE BOOM REPAIR AND NEW MANUFACTURING.HYDRAULIC JACK REPAIR AND NEW MANUFACTURING",
                            bannerImage: "/assets/about3.jpeg",
                            videoUrl: "https://www.tiktok.com/@al.rashideen.engg/video/7625580852155632904"
                        },
                        {
                            _id: "test-2",
                            title: "CRANE REPAIRING SPECIALIST CRANE BOOM REPAIR",
                            description: "CRANE REPAIRING SPECIALIST CRANE BOOM REPAIR AND NEW MANUFACTURING.HYDRAULIC JACK REPAIR AND NEW MANUFACTURING",
                            bannerImage: "/assets/about2.png",
                            videoUrl: "https://www.facebook.com/share/r/1E4RWaZHYd/"
                        }
                    ]);
                }
            } catch (err) {
                console.error("Network/Parsing Error:", err);
                toast.error("Could not connect to the server.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Helper to convert standard URL to Embed URL for TikTok and FB
    const getEmbedUrl = (url: string) => {
        if (url.includes("tiktok.com")) {
            const videoId = url.split("/video/")[1]?.split("?")[0];
            return `https://www.tiktok.com/embed/v2/${videoId}`;
        }
        if (url.includes("facebook.com")) {
            return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0`;
        }
        return url;
    };

    return (
        <>
            <Toaster position="top-right" />

            {/* VIDEO PLAYER POPUP (9:16 Vertical Ratio) */}
            {/* 2. CINEMA-STYLE VIDEO PLAYER POPUP */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-[1000] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setActiveVideo(null)}
                >
                    {/* Main Container */}
                    <div
                        className="relative w-full max-w-[420px] aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col"
                        onClick={e => e.stopPropagation()}
                    >

                        {/* 1. Professional Header Bar */}
                        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/80 to-transparent z-50 flex items-center justify-between px-6 pointer-events-none">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse"></div>
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Operational Reel</span>
                            </div>
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-[#ffd700] hover:text-[#181a30] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* 2. The Video Frame */}
                        <div className="flex-grow w-full relative group">
                            <iframe
                                src={getEmbedUrl(activeVideo)}
                                className="w-full h-full border-0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>

                        {/* 3. Aesthetic Bottom Branding */}
                        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/90 to-transparent z-50 flex items-end justify-center pb-8 px-6 pointer-events-none">
                            <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">
                                © Al Rashideen Engineering Turning
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {/* VIDEO SHOWCASE SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 border-b border-slate-200 pb-12">
                        <div className="max-w-3xl">
                            <p className="text-yellow-700 text-sm font-black uppercase tracking-[0.28em] mb-3">Media Center</p>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#181a30]">Operational Videos</h2>
                        </div>
                        <p className="max-w-xl text-slate-600 text-lg leading-relaxed italic border-l-4 border-[#ffd700] pl-6">
                            Experience the scale of Al Rashideen operations through our latest field captures.
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffd700]"></div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                            {videos.map((video, index) => (
                                <article key={video._id || index} className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm group flex flex-col h-full border border-slate-200 hover:shadow-xl transition-all duration-500">
                                    {/* Thumbnail Area */}
                                    <div className="relative h-72 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${video.bannerImage}')` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-[#181a30]/40 group-hover:bg-[#181a30]/20 transition-colors duration-500"></div>

                                        {/* Play Button Overlay */}
                                        <button
                                            onClick={() => setActiveVideo(video.videoUrl)}
                                            className="absolute inset-0 flex items-center justify-center group/play"
                                        >
                                            <div className="w-20 h-20 bg-[#ffd700] text-[#181a30] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover/play:scale-125 group-hover/play:rotate-[360deg]">
                                                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <span className="text-[#181a30] text-[10px] font-black uppercase tracking-[0.25em] bg-[#ffd700] px-3 py-1 rounded-sm">
                                                {video.videoUrl.includes("tiktok") ? "TikTok Reel" : "Facebook Feature"}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-black uppercase leading-tight text-[#181a30] group-hover:text-yellow-700 transition-colors">
                                            {video.title}
                                        </h2>
                                        <p className="mt-4 text-slate-600 text-sm leading-7 line-clamp-3 mb-8">
                                            {video.description}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-slate-200">
                                            <button
                                                onClick={() => setActiveVideo(video.videoUrl)}
                                                className="inline-flex items-center font-black text-xs uppercase tracking-widest text-[#181a30] hover:text-yellow-700 transition-all gap-3 group/link"
                                            >
                                                Launch Player
                                                <span className="bg-[#181a30] text-[#ffd700] w-6 h-6 rounded-full flex items-center justify-center group-hover/link:translate-x-2 transition-transform">
                                                    →
                                                </span>
                                            </button>
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

export default ProjectsVideos;