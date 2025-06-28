import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Features from "./components/FeatureSection";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import DownloadSection from "./components/DownloadSection";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import DiscoverSection from "./components/DiscoverSection";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-black border-gray-200 font-Poppins">
      <Navbar
        menuItems={[
          { id: "featuressection", label: "Features" },
          { id: "discover", label: "Discover" },
          { id: "pricing", label: "Pricing" },
          { id: "download", label: "Download" },
        ]}
      />     
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <DiscoverSection />
        <Pricing />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
