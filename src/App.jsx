import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
