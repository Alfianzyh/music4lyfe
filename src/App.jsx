import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import DownloadSection from "./components/DownloadSection";

function App() {
  return (
    <div className=" bg-gradient-to-r from-purple-900 via-blue-900 to-black border-gray-200 font-Poppins">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <Pricing />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
