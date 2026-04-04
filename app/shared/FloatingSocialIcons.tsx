"use client";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { useApp } from "../context/AppContext";

// Define type for social media items
type SocialMedia = {
  name: string;
  link: string;
  _id: string;
};

// Map social media names to icons
const socialIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebookF size={16} />,
  twitter: <FaXTwitter size={16} />,
  x: <FaXTwitter size={16} />,
  linkedin: <FaLinkedinIn size={16} />,
  instagram: <FaInstagram size={16} />,
  tiktok: <FaTiktok size={16} />,
  whatsapp: <FaWhatsapp size={16} />,
  youtube: <FaYoutube size={16} />,
  telegram: <FaTelegram size={16} />,
};

// Map social media names to colors
const socialColors: Record<string, string> = {
  facebook: "bg-blue-600",
  twitter: "bg-black",
  x: "bg-black",
  linkedin: "bg-sky-700",
  instagram: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  tiktok: "bg-black",
  whatsapp: "bg-green-500",
  youtube: "bg-red-600",
  telegram: "bg-sky-500",
};

export default function FloatingSocialIcons() {
  const appContext = useApp();
  const themeConfig = appContext?.themeConfig;
  const socialMedia = themeConfig?.socialMedia || [];

  if (!socialMedia.length) {
    return (
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        <Link
          href="https://wa.me/971526366779"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-md hover:scale-105 transition"
        >
          <FaWhatsapp size={18} />
        </Link>

        <Link
          href="https://www.instagram.com/"
          target="_blank"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md hover:scale-105 transition"
        >
          <FaInstagram size={18} />
        </Link>

        <Link
          href="https://www.tiktok.com/@nrtuae?_r=1&_t=ZS-935nJfutEaz"
          target="_blank"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-white shadow-md hover:scale-105 transition"
        >
          <FaTiktok size={16} />
        </Link>

        <Link
          href="https://www.facebook.com/alrashideenengg?share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16WMi6Rh3S%2F#"
          target="_blank"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md hover:scale-105 transition"
        >
          <FaFacebookF size={16} />
        </Link>

        <Link
          href="https://x.com/"
          target="_blank"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-white shadow-md hover:scale-105 transition"
        >
          <FaXTwitter size={16} />
        </Link>

        <Link
          href="https://www.linkedin.com/company/al-rashideen-eng-turning/posts/?feedView=all"
          target="_blank"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sky-700 flex items-center justify-center text-white shadow-md hover:scale-105 transition"
        >
          <FaLinkedinIn size={16} />
        </Link>
      </div>
    );
  }

  const getIcon = (name: string) => {
    const normalizedName = name.toLowerCase().trim();
    return socialIcons[normalizedName] || <FiLink size={16} />;
  };

  const getColorClass = (name: string) => {
    const normalizedName = name.toLowerCase().trim();
    return socialColors[normalizedName] || "bg-gray-600";
  };

  const whatsappNumber =
    themeConfig?.phoneNumber?.replace(/\D/g, "") || "971526366779";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {whatsappNumber && (
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-md hover:scale-105 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={18} />
        </Link>
      )}

      {socialMedia.map((social: SocialMedia) => {
        if (social.name.toLowerCase().includes("whatsapp")) return null;

        return (
          <Link
            key={social._id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition ${getColorClass(social.name)}`}
            aria-label={social.name}
          >
            {getIcon(social.name)}
          </Link>
        );
      })}
    </div>
  );
}
