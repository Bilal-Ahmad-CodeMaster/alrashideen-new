

const page = () => {
  return (
    <>
      <section className="relative  min-h-[60vh] lg:h-[623px] flex items-center overflow-hidden bg-[#181a30]">
        {/* Background Layer with Consistent Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111936]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111936]/40 via-[#111936]/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,.12),transparent_50%)]"></div>
          {/* Subtle Grid Pattern from your About Section */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.1)_49.5%,rgba(255,255,255,.1)_50.5%,transparent_50.5%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-[1100px]">

              {/* 1. Tagline Badge - Same as Home/Business */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#ffd700]/25 bg-[#ffd700]/10 rounded-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse"></span>
                <span className="text-[#ffd700] text-[10px] md:text-sm font-black uppercase tracking-[0.25em]">
                  About Al Rashideen
                </span>
              </div>

              {/* 2. Main Heading - Exact Scaling & Italic Style */}
              <h1 className="text-[44px] leading-[0.92] sm:text-[78px] md:text-[96px] xl:text-[112px] font-black text-white uppercase tracking-[-0.05em] italic">
                Engineering<br />
                <span className="text-[#ffd700]">Excellence</span><br />
                Since 2002
              </h1>

              {/* 3. Description - Precise Font Size, Gold Color, and Left Anchor */}
              <p className="mt-8 max-w-[750px] text-[18px] leading-[1.3] md:text-[24px] text-[#ffd700] border-l-[4px] border-[#ffd700] pl-5">
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

    </>
  );
}

export default page;
