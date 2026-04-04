

const page = () =>  {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container-wrap px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-4">Who We Are</p>
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
          <div className="grid md:grid-cols-3 gap-6"><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-primary-container mb-4">01</div><h3 className="font-black uppercase text-xl">Technical Positioning</h3><p className="mt-4 text-muted leading-7">Built for crane repair, heavy equipment and industrial engineering audiences.</p></div><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-primary-container mb-4">02</div><h3 className="font-black uppercase text-xl">Modern Presentation</h3><p className="mt-4 text-muted leading-7">Clear sections, strong typography and a premium industrial layout.</p></div><div className="bg-white p-8 rounded-2xl shadow-soft"><div className="text-5xl font-black text-primary-container mb-4">03</div><h3 className="font-black uppercase text-xl">Editable Structure</h3><p className="mt-4 text-muted leading-7">Every page is plain HTML so your developer can edit it quickly.</p></div></div>
        </div>
      </section>

    </>
  );
} 

export default page;
