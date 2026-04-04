import { Metadata } from "next";
import { HomePage } from "./shared/HomePage";
import { Suspense } from "react";

export const metadata: Metadata = {
  title:
    "Expert Crane Repair, Boom Overhaul & Structural Fabrication in UAE | Al Rashideen",
  description:
    "Al Rashideen General Trading LLC offers expert crane repair, hydraulic maintenance, mechanical fabrication, and industrial solutions across UAE. ISO-certified with reliable on-time delivery.",
  keywords: [
    "Al Rashideen General Trading LLC",
    "building materials supplier UAE",
    "industrial safety products UAE",
    "general trading company UAE",
    "construction materials UAE",
    "safety equipment supplier UAE",
    "industrial tools UAE",
    "commercial trading company Dubai",
    "Crane repair services UAE",
    "Boom overhaul Dubai",
    "Hydraulic jack repair",
    "Slewing bearing assembly",
    "Mechanical fabrication UAE",
    "CNC machining services",
    "Industrial equipment maintenance",
    "Crane repair Dubai",
    "Boom repair Abu Dhabi",
    "Hydraulic services Sharjah",
    "Equipment maintenance UAE",
    "Industrial repair UAE",
    "building materials and safety solutions UAE",
    "reliable industrial safety supplier in UAE",
    "construction and safety products trading company",
    "UAE general trading and supply services",
    "Crane boom crack repair services",
    "Hydraulic system leak inspection",
    "Slewing bearing replacement cost",
    "CNC precision machining for oil & gas",
    "Preventive maintenance for cranes",
    "Strenx 700 plate fabrication",
  ],
};

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <HomePage />
    </Suspense>
  );
}
