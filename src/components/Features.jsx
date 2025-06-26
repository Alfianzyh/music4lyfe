// src/components/Features.jsx
import FeatureCard from "./FeatureCard";
import { FaMusic, FaCloudDownloadAlt, FaWifi } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Awesome Features</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Experience music like never before with features designed for true audiophiles.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <FeatureCard
          icon={<FaMusic />}
          title="High Quality Audio"
          description="Crystal-clear sound quality for the ultimate listening experience."
        />
        <FeatureCard
          icon={<FaWifi />}
          title="Offline Listening"
          description="Download your favorite tracks and listen without internet."
        />
        <FeatureCard
          icon={<FaCloudDownloadAlt />}
          title="Easy Sync"
          description="Sync your playlists across all your devices seamlessly."
        />
      </div>
    </section>
  );
};

export default Features;
