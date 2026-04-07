import Image from "next/image";


const page = () => {
  return (
    <>
      <section className="relative min-h-[35vh] lg:h-[320px] flex items-center overflow-hidden bg-[#181a30] py-10 lg:py-0">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111936]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/40 via-[#111936]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,.08),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.1)_49.5%,rgba(255,255,255,.1)_50.5%,transparent_50.5%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-[1100px]">

              {/* 1. Tagline Badge - Compact */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse"></span>
                <span className="text-[#ffd700] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                  About Al Rashideen
                </span>
              </div>

              {/* 2. Main Heading - Scaled for tighter height */}
              <h1 className="text-[34px] leading-[0.95] sm:text-[50px] md:text-[60px] xl:text-[68px] font-black text-white uppercase tracking-[-0.04em] italic">
                Engineering <span className="text-[#ffd700]">Excellence</span><br className="hidden md:block" />
                <span className="text-[28px] sm:text-[40px] md:text-[50px] opacity-90"> Since 2002</span>
              </h1>

              {/* 3. Description - Smaller font & thinner left-border */}
              <p className="mt-4 max-w-[700px] text-[13px] leading-[1.4] md:text-[17px] text-[#ffd700]/90 border-l-[3px] border-[#ffd700] pl-4 font-medium">
                Al Rashideen Engineering Turning is part of the Al Rashideen Engineering Group in Sharjah, UAE.
                Precision machining and heavy equipment restoration for the global industrial sector
                delivering reliable, industry-focused solutions.
              </p>

            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container-wrap px-6 lg:px-14 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[var(--primary-container)] text-sm font-black uppercase tracking-[0.3em] mb-4">Who We Are</p>
            <h2 className="text-4xl font-black uppercase tracking-tight">Trusted Heavy Engineering Support</h2>
            <p className="mt-6 text-muted leading-8">Al Rashideen Engineering Turning is a precision machining and engineering workshop established in 2002, built on hands-on expertise and a deep understanding of heavy machinery..</p>
            <p className="mt-5 text-muted leading-8">From our earliest days, we have served the construction, crane, and heavy equipment sectors, delivering reliable engineering turning, custom machining, and component repair solutions. At a time when most workshops avoided complex crane systems, Al Rashideen was among the first to undertake in-house crane repairs and mechanical work, setting a benchmark for technical capability and confidence in the field.</p>
            <p className="mt-4 text-muted leading-8">Today, Al Rashideen Engineering Turning is positioned as a specialist workshop brand for crane structural work, precision turning, heavy fabrication, and component restoration—combining practical workshop experience with strong technical execution to handle complex and demanding repair challenges.</p>

          </div>
          <div className="bg-transparent rounded-2xl p-0 shadow-none mt-8">
            <img src="https://www.alrashideenengg.com/img/cranes-o.jpg" alt="Cranes" className="w-full h-auto rounded-2xl border-none" />
          </div>
        </div>
      </section>
      <section className="py-24 bg-grid-pattern">
        <div className="container-wrap px-6 lg:px-14">
          <div className="grid md:grid-cols-3 gap-6"><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-[var(--primary-container)]-container mb-4">01</div><h3 className="font-black uppercase text-xl">Technical Positioning</h3><p className="mt-4 text-muted leading-7">Built for crane repair, heavy equipment and industrial engineering audiences.</p></div><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-[var(--primary-container)]-container mb-4">02</div><h3 className="font-black uppercase text-xl">Modern Presentation</h3><p className="mt-4 text-muted leading-7">Clear sections, strong typography and a premium industrial layout.</p></div><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-[var(--primary-container)]-container mb-4">03</div><h3 className="font-black uppercase text-xl">Editable Structure</h3><p className="mt-4 text-muted leading-7">Every page is plain HTML so your developer can edit it quickly.</p></div></div>
        </div>
      </section>
      {/* Team & Values Section - Integrated with Gold/Navy Theme */}
      <section className="py-20 bg-[#f8f9fa] border-y border-gray-200">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase text-[#111936]">
              Our Team & <span className="text-[#ffd700] bg-[#111936] px-2 italic">Values</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffd700] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-[#111936] shadow-sm group hover:shadow-md transition-all">
              <div className="text-[#ffd700] text-4xl mb-4 font-black">01</div>
              <h3 className="text-xl font-black mb-4 uppercase text-[#111936]">Expert Workforce</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our team comprises experienced engineers and certified technicians with extensive hands-on expertise in crane structures and mechanical restoration.
              </p>
            </div>

            <div className="bg-white p-8 border-t-4 border-[#ffd700] shadow-sm group hover:shadow-md transition-all">
              <div className="text-[#111936] text-4xl mb-4 font-black">02</div>
              <h3 className="text-xl font-black mb-4 uppercase text-[#111936]">Integrity First</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We maintain absolute transparency in our processes, ensuring that every project meets the exact specifications and tolerances required by heavy industry standards.
              </p>
            </div>

            <div className="bg-white p-8 border-t-4 border-[#111936] shadow-sm group hover:shadow-md transition-all">
              <div className="text-[#ffd700] text-4xl mb-4 font-black">03</div>
              <h3 className="text-xl font-black mb-4 uppercase text-[#111936]">Continuous Innovation</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We continuously enhance our technical capabilities by staying aligned with evolving crane technologies, hydraulic systems, and advanced mechanical assemblies.
              </p>
            </div>
          </div>

          {/* Statistics Counter */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 text-center">
            <div>
              <p className="text-4xl font-black text-[#111936]">50+</p>
              <p className="font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-md text-[#ffd700] bg-[#111936]  mt-1">Expert Staff</p>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div>
              <p className="text-4xl font-black text-[#111936]">5000+</p>
              <p className="font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded-md text-[#ffd700] bg-[#111936] mt-1">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div>
              <p className="text-4xl font-black text-[#111936]">3,000+</p>
              <p className="font-bold uppercase tracking-widest py-1 rounded-md text-[10px] text-[#ffd700] bg-[#111936] px-2 mt-1">Global Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
          <div className="flex flex-col md:flex-row items-stretch gap-12">
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-[#ffd700] font-black uppercase tracking-[0.3em] mb-2 text-sm">Leadership</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#111936] mb-8 leading-tight uppercase italic">
                CEO&apos;s <span className="text-[#ffd700]">Message</span>
              </h2>
              <div className="relative">
                <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8 relative z-10">
                  &quot;Since 2002, Al Rashideen Engineering Turning has been built on
                  precision, responsibility, and hands-on engineering. From being
                  among the early workshops to work directly on cranes to
                  delivering reliable machining and repairs today, our focus has
                  always been on doing the job right and standing behind our work.&quot;
                </p>
                <span className="absolute -top-6 -left-4 text-8xl text-gray-100 -z-10 font-serif">&quot;</span>
              </div>

              <div>
                <p className="font-black text-xl text-[#111936] uppercase tracking-tighter">
                  Hamid Ali Qureshi
                </p>
                <p className="text-[#ffd700] font-bold text-sm uppercase tracking-widest bg-[#111936] inline-block px-3 py-1 mt-1">
                  Founder & CEO
                </p>
              </div>
            </div>

            <div className="md:w-1/2 relative min-h-[400px]">
              <div className="absolute inset-0 border-2 border-[#ffd700] translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
              <Image
                src="/assets/about3.jpeg"
                alt="CEO Hamid Ali Qureshi"
                className="w-full h-full rounded-2xl shadow-xl object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
