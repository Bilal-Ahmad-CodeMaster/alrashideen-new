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

            <section className="py-20 bg-[#f6f7fb]">
                <div className="container-wrap px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {businessUnits.map((item, index) => (
                            <article key={index} className="group flex flex-col bg-white rounded-[1.75rem] overflow-hidden shadow-lg border border-slate-200 transition-all hover:shadow-2xl hover:-translate-y-1">
                                <div className="relative h-54 overflow-hidden bg-[linear-gradient(135deg,#09112f,#13235e_58%,#0c1535)] p-8 flex flex-col justify-between">
                                    <div className="text-yellow-400 text-xs font-black uppercase tracking-[0.28em]">Group Business {item.id}</div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.8rem] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 overflow-hidden">
                                            <img
                                                src={item.logo}
                                                alt="logo"
                                                className="w-full h-full object-fit"
                                            />
                                        </div>
                                        <div className="text-white text-xs font-black uppercase tracking-[0.22em]">Official Unit</div>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-yellow-700 text-xs font-black uppercase tracking-[0.26em]">{item.location}</span>
                                    <h2 className="mt-4 text-[1.6rem] font-black uppercase text-[#0f1738]">{item.title}</h2>
                                    <p className="mt-5 text-slate-600 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full text-center py-4 rounded-xl bg-[#ffd700] text-[#0a1230] font-black uppercase text-xs tracking-[0.2em] transition-all hover:bg-black hover:text-white">
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