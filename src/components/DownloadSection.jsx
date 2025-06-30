import React from "react";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";
import DownloadCard from "./DownloadCard";
import DownloadMockup from "../assets/DownloadSection.png";

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="relative w-full py-20 px-6 bg-black/30 backdrop-blur-lg"
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text + Buttons */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-poppins">
            Download Music4Lyfe
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Take your music everywhere with our mobile and desktop apps.
            Available on all major platforms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <DownloadCard icon={<FaApple />} subtitle="Download on the" title="App Store" />
            <DownloadCard icon={<FaGooglePlay />} subtitle="Get it on" title="Google Play" />
            <DownloadCard icon={<FaApple />} subtitle="Download for" title="macOS" />
            <DownloadCard icon={<FaWindows />} subtitle="Download for" title="Windows" />
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-64 h-64 flex-shrink-0">
          <img
            src={DownloadMockup}
            alt="App Mockup"
            className="w-full h-full object-cover rounded-xl relative z-10"
          />
          <div className="absolute w-40 h-40 bg-purple-600 rounded-full opacity-30 -top-10 -left-10"></div>
          <div className="absolute w-40 h-40 bg-blue-600 rounded-full opacity-30 top-32 left-32"></div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
