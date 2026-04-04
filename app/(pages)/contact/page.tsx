import { ContactContent } from "@/app/shared/ContactContent";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title:
    "Contact Al Rashideen UAE | Heavy Equipment Rental & Industrial Solutions",
  description:
    "Reach out to Al Rashideen in UAE for professional heavy equipment rental, crane services, and industrial machinery solutions. Our experts are ready to assist with your project requirements and provide reliable, safe, and efficient equipment support.",
  keywords: [
    "Al Rashideen contact UAE",
    "heavy equipment rental UAE",
    "industrial machinery solutions UAE",
    "crane services UAE",
    "equipment experts UAE",
    "UAE machinery support",
    "Al Rashideen inquiry",
    "contact Al Rashideen UAE",
    "heavy machinery support UAE",
    "project equipment solutions UAE",
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
        <ContactContent />
      </Suspense>
    </>
  );
};

export default Page;
