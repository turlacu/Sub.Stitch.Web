import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#020617] text-[#F1F5F9] font-sans antialiased overflow-x-hidden selection:bg-[#F472B6]/30 selection:text-white">
        {/* Sticky top level navigation bar */}
        <Navbar />

        <main>
          {/* Hero section containing the interactive translation console */}
          <Hero />

          {/* 5 Core Trust value metrics badges */}
          <TrustStrip />

          {/* Problem section detailing manual subtitle struggles */}
          <ProblemSection />

          {/* 4 Step pipeline flow details list */}
          <HowItWorks />

          {/* Bento grid layout for technical localization advantages */}
          <Features />

          {/* Dynamic Glass cards for Single, Movie, and Creator subscriptions */}
          <Pricing />

          {/* High quality interactive FAQ accordions */}
          <Faq />

          {/* Contact details card form for custom volume/feedback requests */}
          <Contact />
        </main>

        {/* Global layout boundary footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

