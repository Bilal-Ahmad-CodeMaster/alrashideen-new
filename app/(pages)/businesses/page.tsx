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
            logo: "/assets/buisnesses/engineenLogo.png",
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
            link: "https://www.lspartshub.com",
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

            <section className="relative min-h-[35vh] lg:h-[320px] flex items-center overflow-hidden bg-[#181a30] py-12 lg:py-0">
                {/* Background Layer */}
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
                                    Group Presence
                                </span>
                            </div>

                            {/* 2. Main Heading - Scaled & Professional */}
                            <h1 className="text-[36px] leading-[0.95] sm:text-[54px] md:text-[64px] xl:text-[72px] font-black text-white uppercase tracking-[-0.04em] italic">
                                Our Businesses <span className="text-[#ffd700]">& Locations</span>
                            </h1>

                            {/* 3. Description - Compacted Line Height */}
                            <p className="mt-4 max-w-[750px] text-[14px] leading-[1.4] md:text-[18px] text-[#ffd700]/90 border-l-[3px] border-[#ffd700] pl-4 font-medium">
                                Al Rashideen Engineering Turning is part of the Al Rashideen Engineering Group in Sharjah, UAE.
                                Our group spans lubricants, engineering, spare parts, machinery maintenance, and manufacturing,
                                delivering reliable, industry-focused solutions.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#f8f9fc]">
                <div className="container-wrap px-6 lg:px-14">
                    {/* Changed from 'grid' to 'flex flex-wrap' to allow 'justify-center' to affect the last line */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {businessUnits.map((item, index) => (
                            <article
                                key={index}
                                /* Set consistent widths that mimic your original grid columns */
                                className="group flex flex-col bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 
            w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
                            >

                                {/* REDUCED LOGO PEDESTAL */}
                                <div className="relative h-40 flex items-center justify-center bg-white border-b border-slate-50 shrink-0">
                                    {/* Pedestal Shadow Effect */}
                                    <div className="absolute bottom-6 w-20 h-3 bg-slate-200/20 blur-lg rounded-full"></div>

                                    {/* Logo Container */}
                                    <div className="relative z-10 w-58 h-38 flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-105">
                                        <img
                                            src={item.logo}
                                            alt={`${item.title} logo`}
                                            className="max-w-full max-h-full object-contain filter drop-shadow-[0_5px_10px_rgba(0,0,0,0.03)]"
                                        />
                                    </div>

                                    {/* Status Indicator */}
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

                                    <p className="mt-3 text-slate-500 text-lg leading-relaxed mb-6 flex-grow font-medium line-clamp-3">
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