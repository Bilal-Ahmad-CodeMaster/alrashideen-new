import { ServiceContent } from "@/app/shared/ServiceContent";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Crane Repair & Heavy Engineering Services in UAE | Al Rashideen",
  description:
    "Al Rashideen provides professional crane repair, boom overhaul, hydraulic cylinder servicing, structural fabrication, and heavy engineering services across UAE. Trusted experts for mobile and crawler cranes.",

  keywords: [
    "crane repair services UAE",
    "boom overhaul services",
    "heavy engineering services UAE",
    "mobile crane repair UAE",
    "crawler crane repair UAE",
    "hydraulic cylinder repair UAE",
    "structural fabrication crane",
    "Al Rashideen crane services",
  ],
};

const Page = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <ServiceContent />
      </Suspense>
    </>
  );
};

export default Page;
