import React from "react";
import { FaApple, FaGooglePlay, FaWindows, FaDesktop } from "react-icons/fa";
import DownloadCard from "./DownloadCard";
import DownloadMockup from "../assets/DownloadSection.png";

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="relative w-full py-20 px-6 bg-black/30 backdrop-blur-lg"
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-10 md:flex md:justify-between md:items-center">
        {/* Left: Text + Buttons */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl font-bold text-white font-poppins">
            Download Music4Lyfe
          </h2>
          <p className="text-white/70">
            Take your music everywhere with our mobile and desktop apps.
            Available on all major platforms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-4">
            <DownloadCard icon={<FaApple />} subtitle="Download on the" title="App Store" />
            <DownloadCard icon={<FaGooglePlay />} subtitle="Get it on" title="Google Play" />
            <DownloadCard icon={<FaDesktop />} subtitle="Download for" title="Windows" />
            <DownloadCard icon={<FaWindows />} subtitle="Download for" title="macOS" />
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative mt-10 md:mt-0 md:ml-10">
          <div className="relative w-64 h-64">
            <img
              src={DownloadMockup}
              alt="App Mockup"
              className="w-64 h-64 rounded-xl relative z-10"
            />
            <div className="absolute w-40 h-40 bg-purple-600 rounded-full opacity-30 -top-10 -left-10"></div>
            <div className="absolute w-40 h-40 bg-blue-600 rounded-full opacity-30 top-32 left-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
