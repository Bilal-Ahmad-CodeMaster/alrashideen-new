import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Al Rashideen Engineering Group Divisions & Businesses UAE | Najmat, Turning, ARG Lube & More",
  description:
    "Discover the divisions and businesses of Al Rashideen Engineering Group in UAE, including Najmat Al Rashideen Transport, Al Rashideen Turning, Tareeq Al Etefaq Construction Equipment, Lucky Star Heavy Equipment, ARG LUBE, and Al Rushed Maintenance. Integrated industrial solutions backed by experience and precision.",

  keywords: [
    "Al Rashideen Engineering Group",
    "Najmat Al Rashideen Transport UAE",
    "Al Rashideen Turning UAE",
    "ARG LUBE UAE",
    "Lucky Star Heavy Equipment UAE",
    "Tareeq Al Etefaq Construction Equipment UAE",
    "Al Rushed Heavy Equipment Maintenance UAE",
    "Al Rushed Hydromechanical Equipment UAE",
    "industrial solutions UAE",
    "multi-division engineering company UAE",
    "Sharjah-based engineering group",
    "industrial maintenance services UAE",
    "spare parts and machinery supplier UAE",
    "construction equipment services UAE",
    "precision engineering solutions UAE",
  ],
};

const Page = () => {
  const businesses = [
    {
      id: 1,
      name: "Al Rashideen Engineering Group",
      logo: "/assets/nrt.webp",
      logoHeight: "130px",
      marginTop: "20px",
      location: "Najmat Al Rashideen Transport L.L.C Sajaa, Sharjah, UAE.",
      website: "https://nrtuae.com/",
    },
    {
      id: 2,
      name: "Al Rushed Turning",
      logo: "/assets/Al-Rushed-turning.png",
      logoHeight: "185px",
      marginTop: "28px",
      location: "Al Rashideen Turning Industrial Area 11, Sharjah, UAE.",
      website: "",
    },
    {
      id: 3,
      name: "Tareeq Al Etefaq Construction Equipment",
      logo: "/assets/taraqal-itefaq-log.png",
      logoHeight: "150px",
      marginTop: "20px",
      location:
        "Tareeq Al Etefaq Construction Equipment, Machinery & Spare Parts Manufacturing L.L.C S.P Industrial Area Sajaa, Sharjah, UAE.",
      website: "",
    },
    {
      id: 4,
      name: "Lucky Star Heavy Equipment & Spare Parts",
      logo: "/assets/buisnesses/logo4.png",
      logoHeight: "125px",
      marginTop: "20px",
      location:
        "Lucky Star Heavy Equipment & Spare Parts Tr. L.L.C Industrial Area 11, Sharjah, UAE.",
      website: "https://lspartshub.com",
    },
    {
      id: 5,
      name: "ARG LUBE",
      logo: "/assets/buisnesses/logo3.png",
      logoHeight: "130px",
      marginTop: "5px",
      location:
        "ARG LUBE – Al Rashideen Engineering Group Industrial Area Sajaa, Sharjah, UAE.",
      website: "",
    },
    {
      id: 6,
      name: "Al Rushed Heavy Equipment Maintenance",
      logo: "/assets/buisnesses/al-rused-heavy-equipment.png",
      logoHeight: "180px",
      marginTop: "25px",
      location:
        "Al Rushed Heavy Equipment Maintenance Industrial Area Sajaa, Sharjah, UAE.",
      website: "",
    },
    {
      id: 7,
      name: "Al Rushed Hydromechanical Equipment",
      logo: "/assets/buisnesses/logo1.png",
      logoHeight: "105px",
      marginTop: "0px",
      location:
        "Al Rushed Hydromechanical Equipment Repair & Maintenance Industrial Area 11, Sharjah, UAE.",
      website: "",
    },
  ];
  return (
    <div className="">
      <section className="bg-white py-16 text-[#0A101D] border-none !border-b-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Heading */}
          <div className="mb-8">
            <h3 className="text-primary uppercase tracking-[0.35em] text-lg font-semibold mb-3">
              Our Businesses
            </h3>

            <h1 className="text-[#0A101D] text-3xl md:text-4xl font-extrabold leading-tight">
              Our Divisions and Locations
            </h1>

            <div className="w-20 h-1 bg-primary mx-auto mt-5 rounded"></div>
          </div>

          {/* Description */}
          <p className="text-[#0A101D] text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-[#0A101D]">
              Najmat Al Rashideen
            </span>{" "}
            operates under the{" "}
            <span className="font-semibold text-[#0A101D]">
              Al Rashideen Engineering Group of Companies
            </span>
            , a multi-division organization based in Sharjah, UAE. The group
            encompasses businesses focused on lubricants, engineering, spare
            parts, machinery maintenance, and manufacturing, delivering
            dependable, industry-driven solutions backed by experience and
            precision.
            <br />
            <br />
            Discover our other businesses within the Al Rashideen Engineering
            Group and see how each division contributes to our integrated
            industrial solutions.
          </p>
        </div>
      </section>

      <section className="pt-1 bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:justify-items-center">
            {businesses.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="group bg-secondary border-2 border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden cursor-pointer 
                w-full lg:max-w-[290px]
                transition-all duration-300
                hover:-translate-y-2"
              >
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={230}
                    height={230}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    style={{
                      maxHeight: item.logoHeight,
                      marginTop: item.marginTop,
                    }}
                  />
                </div>

                <div className="py-6 px-16 sm:p-6 text-center flex flex-col justify-between h-[calc(100%-160px)]">
                  <p className="text-white text-sm leading-relaxed mb-6">
                    {item.location}
                  </p>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-navy font-bold px-6 py-3 rounded-md text-sm uppercase tracking-wide cursor-pointer bg-white text-white border-2 border-transparent group transition-all duration-300"
                  >
                    Visit Site
                    <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}

            <div
              className="col-span-1
              sm:col-span-2
              lg:col-span-4
              lg:mt-[13px]
              grid grid-cols-1
              sm:grid-cols-2
              lg:flex
              gap-5
              lg:justify-center"
            >
              {businesses.slice(4).map((item) => (
                <div
                  key={item.id}
                  className="group bg-secondary border-2 border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden cursor-pointer 
                  w-full lg:max-w-[280px]
                  transition-all duration-300
                  hover:-translate-y-2"
                >
                  <div className="h-40 flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={230}
                      height={230}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      style={{
                        maxHeight: item.logoHeight,
                        marginTop: item.marginTop,
                      }}
                    />
                  </div>

                  <div className="py-6 px-16 sm:p-6 text-center flex flex-col justify-between h-[calc(100%-160px)]">
                    <p className="text-white text-sm leading-relaxed mb-6">
                      {item.location}
                    </p>

                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-navy font-bold px-6 py-3 rounded-md text-sm uppercase tracking-wide cursor-pointer text-white bg-white border-2 border-transparent group transition-all duration-300"
                    >
                      Visit Site
                      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
