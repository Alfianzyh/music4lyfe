import React from "react";
import FeatureCard from "./FeatureCard";
import { FaHeadphonesAlt, FaCompactDisc, FaRobot, FaCloudDownloadAlt, FaShareAlt, FaMobileAlt } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-black border-gray-200 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold">Why Choose Music4Lyfe?</h2>
        <p className="text-white/70 text-xl max-w-3xl mx-auto">
          Experience music like never before with our cutting-edge features designed for the modern listener.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <FeatureCard icon={<FaHeadphonesAlt className="text-purple-300 w-6 h-6" />} title="Unlimited Streaming">
          Access millions of songs without limits. Stream your favorite tracks anytime, anywhere.
        </FeatureCard>

        <FeatureCard icon={<FaCompactDisc className="text-purple-300 w-6 h-6" />} title="Hi-Fi Audio Quality">
          Experience crystal-clear sound with lossless audio streaming up to 24-bit/192kHz.
        </FeatureCard>

        <FeatureCard icon={<FaRobot className="text-purple-300 w-6 h-6" />} title="Smart Recommendations">
          AI-powered suggestions that learn your taste and help you discover music you'll love.
        </FeatureCard>

        <FeatureCard icon={<FaCloudDownloadAlt className="text-purple-300 w-6 h-6" />} title="Offline Listening">
          Download your favorite songs and playlists to enjoy music without internet connection.
        </FeatureCard>

        <FeatureCard icon={<FaShareAlt className="text-purple-300 w-6 h-6" />} title="Social Sharing">
          Share your favorite tracks and playlists with friends and see what they’re listening to.
        </FeatureCard>

        <FeatureCard icon={<FaMobileAlt className="text-purple-300 w-6 h-6" />} title="Cross-Platform">
          Seamlessly sync your music across all devices - phone, tablet, computer, and smart speakers.
        </FeatureCard>
      </div>
    </section>
  );
};

export default FeatureSection;
