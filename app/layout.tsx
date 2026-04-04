import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import Link from "next/link";
import FloatingSocialIcons from "./shared/FloatingSocialIcons";
import { AppProvider } from "./context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alrashideen-alpha.vercel.app"),
  title: "Al Rashideen | Professional Crane & Engineering Services UAE",
  description:
    "Al Rashideen provides professional crane repair, boom overhaul, hydraulic systems, structural fabrication, and heavy machinery services across UAE.",

  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/final-logo-favicon.png",
        type: "image/png",
      },
    ],
    apple: "/final-logo-favicon.png",
  },

  openGraph: {
    title: "Al Rashideen | Professional Crane & Engineering Services UAE",
    description:
      "Al Rashideen provides professional crane repair, boom overhaul, hydraulic systems, structural fabrication, and heavy machinery services across UAE.",
    url: "/",
    siteName: "Al Rashideen",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Najmat Al Rashideen",
              url: "https://nrtuae.com/",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="bg-surface text-ink selection:bg-primary-container selection:text-on-primary-container min-h-screen overflow-x-hidden">
          <AppProvider>
            <Header />
            <div className="mt-17 md:mt-25 lg:mt-24">
              {children}

            </div>

            <Footer />
          </AppProvider>


        </div>
      </body>
    </html>
  );
}
