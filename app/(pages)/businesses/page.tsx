import React from 'react';

const BusinessesPage = () => {
    const businessUnits = [
        {
            id: "01",
            logo: "/assets/buisnesses/logo2.png",
            title: "Najmat Al Rashideen Transport L.L.C",
            location: "Sajaa, Sharjah, UAE",
            desc: "Mobile crane rental, heavy lifting support and equipment transport services for construction and industrial projects.",
            link: "https://nrtuae.com",
        },
        {
            id: "02",
            logo: "/assets/buisnesses/engineenLogo.webp",
            title: "Al Rashideen Engineering Turning",
            location: "Industrial Area 11, Sharjah, UAE",
            desc: "Crane structural repair, boom rehabilitation, precision turning, fabrication and workshop engineering support.",
            link: "https://alrashideenengg.com/",
        },
        {
            id: "03",
            logo: "/assets/buisnesses/logo5.jpg",
            title: "Tareeq Al Etefaq Construction Equipment, Machinery & Spare Parts Manufacturing L.L.C S.P",
            location: "Sajaa, Sharjah, UAE",
            desc: "Fabrication, machinery and spare-parts related manufacturing support within the group network.",
            link: "/contact",
        },
        {
            id: "04",
            logo: "/assets/buisnesses/logo4.png",
            title: "Lucky Star Heavy Equipment & Spare Parts Tr. L.L.C",
            location: "Industrial Area 11, Sharjah, UAE",
            desc: "Heavy equipment spare parts supply for cranes, construction machinery and workshop requirements.",
            link: "https://lspartshub.vercel.app",
        },
        {
            id: "05",
            logo: "/assets/buisnesses/logo3.png",
            title: "ARG LUBE",
            location: "Sajaa, Sharjah, UAE",
            desc: "Industrial and heavy-duty lubricant brand under Al Rashideen Engineering Group.",
            link: "/contact",
        },
        {
            id: "06",
            logo: "/assets/buisnesses/logo6.jpg",
            title: "Al Rushed Heavy Equipment Maintenance",
            location: "Sajaa, Sharjah, UAE",
            desc: "Heavy equipment maintenance support with workshop-focused repair capability.",
            link: "/contact",
        },
        {
            id: "07",
            logo: "/assets/buisnesses/logo1.png",
            title: "Al Rushed Hydromechanical Equipment Repair & Maintenance",
            location: "Industrial Area 11, Sharjah, UAE",
            desc: "Hydraulic seals, seal kits, reverse engineering support and hydromechanical repair solutions.",
            link: "/contact",
        },
    ];

    return (
        <main className="min-h-screen bg-white">

            <section className="relative overflow-hidden bg-[#0a1230] py-24 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,.16),transparent_30%),linear-gradient(90deg,rgba(10,18,48,.96),rgba(10,18,48,.90),rgba(10,18,48,.84))]"></div>
                <div className="relative container-wrap px-6 lg:px-8">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#ffd700]/40 rounded-lg bg-[#ffd700]/10 mb-8">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700]"></span>
                            <span className="text-[#ffd700] text-xs md:text-sm font-black uppercase tracking-[0.28em]">Group Presence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">Our Businesses</h1>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#f8f9fc]">
                <div className="container-wrap px-6 lg:px-8">
                    {/* Updated grid to xl:grid-cols-4 for a more compact feel */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {businessUnits.map((item, index) => (
                            <article key={index} className="group flex flex-col bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5">

                                {/* REDUCED LOGO PEDESTAL */}
                                <div className="relative h-40 flex items-center justify-center bg-white border-b border-slate-50 shrink-0">

                                    {/* Pedestal Shadow Effect - Scaled down */}
                                    <div className="absolute bottom-6 w-20 h-3 bg-slate-200/20 blur-lg rounded-full"></div>

                                    {/* Logo Container - Smaller size */}
                                    <div className="relative z-10 w-58 h-38 flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-105">
                                        <img
                                            src={item.logo}
                                            alt={`${item.title} logo`}
                                            className="max-w-full max-h-full object-contain filter drop-shadow-[0_5px_10px_rgba(0,0,0,0.03)]"
                                        />
                                    </div>

                                    {/* Status Indicator - More subtle */}
                                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Live</span>
                                    </div>
                                </div>

                                {/* COMPACT CONTENT SECTION */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center mb-3">
                                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[8px] font-black uppercase tracking-widest">
                                            {item.location}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-black uppercase text-[#0f1738] tracking-tight leading-tight">
                                        {item.title}
                                    </h2>

                                    <p className="mt-3 text-slate-500 text-[13px] leading-relaxed mb-6 flex-grow font-medium line-clamp-3">
                                        {item.desc}
                                    </p>

                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center justify-center w-full py-3.5 rounded-xl bg-[#0f1738] text-white font-black uppercase text-[9px] tracking-[0.2em] transition-all duration-300 hover:bg-yellow-400 hover:text-[#0f1738] active:scale-95"
                                    >
                                        Visit Site
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BusinessesPage;