import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com",
    label: "Github",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    href: "https://instagram.com",
    label: "Instagram",
  },
];

export default function SocialIcons({ className = "" }) {
  return (
    <div className={`flex gap-4 mt-4 ${className}`}>
      {socialLinks.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white/70 hover:text-white transition"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
