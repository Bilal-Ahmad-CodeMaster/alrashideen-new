

const page = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,.16),transparent_30%),linear-gradient(90deg,rgba(10,18,48,.96),rgba(10,18,48,.90),rgba(10,18,48,.84))]"></div>
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.1)_49.5%,rgba(255,255,255,.1)_50.5%,transparent_50.5%,transparent_100%)]"></div>
        <div className="relative container-wrap px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-yellow-400/20 rounded-lg bg-white/5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[var(--primary-container)] text-xs md:text-sm font-black uppercase tracking-[0.28em]">
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">
              Engineering <br />
              <span className="text-[var(--primary-container)]">Excellence</span> <br />
              Since 2002
            </h1>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-yellow-300 font-medium">
              Precision machining and heavy equipment restoration for the global industrial sector.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container-wrap px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
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
        <div className="container-wrap px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6"><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-[var(--primary-container)]-container mb-4">01</div><h3 className="font-black uppercase text-xl">Technical Positioning</h3><p className="mt-4 text-muted leading-7">Built for crane repair, heavy equipment and industrial engineering audiences.</p></div><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-[var(--primary-container)]-container mb-4">02</div><h3 className="font-black uppercase text-xl">Modern Presentation</h3><p className="mt-4 text-muted leading-7">Clear sections, strong typography and a premium industrial layout.</p></div><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-[var(--primary-container)]-container mb-4">03</div><h3 className="font-black uppercase text-xl">Editable Structure</h3><p className="mt-4 text-muted leading-7">Every page is plain HTML so your developer can edit it quickly.</p></div></div>
        </div>
      </section>

    </>
  );
}

export default page;
