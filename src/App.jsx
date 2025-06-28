import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-gradient-to-r from-purple-900 via-blue-900 to-black border-gray-200 font-Poppins">
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
