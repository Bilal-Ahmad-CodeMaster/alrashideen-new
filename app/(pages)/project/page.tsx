import Projects from "@/app/shared/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Engineering Projects | Precision Machining & Industrial Solutions UAE | Al Rashideen",
  description:
    "Explore Al Rashideen’s engineering projects showcasing precision shaft turning, custom component fabrication, CNC milling, industrial gear refurbishment, and advanced manufacturing solutions across UAE. Trusted experts with 25+ years of experience delivering high-performance industrial results.",
  keywords: [
    
    "engineering projects UAE",
    "precision machining projects UAE",
    "industrial solutions UAE",
    "custom component fabrication UAE",
    "precision shaft turning UAE",
    "CNC milling UAE",
    "industrial gear refurbishment UAE",
    "Al Rashideen projects",
    "high-performance industrial solutions UAE",
    "25+ years engineering experience UAE",
  ],
};

const Page = () => {
  return (
    <>
      <Projects />
    </>
  );
};
export default Page;
