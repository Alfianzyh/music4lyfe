import Navbar from "./components/Navbar";
import Hero from "./pages/HeroSection";
import Features from "./pages/FeatureSection";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import DownloadSection from "./pages/DownloadSection";
import HeroSection from "./pages/HeroSection";
import FeaturesSection from "./pages/FeatureSection";
import DiscoverSection from "./pages/DiscoverSection";

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
