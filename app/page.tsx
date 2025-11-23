import Hero from "./components/Hero";
import BentoGridFeatures from "./components/BentoGridFeatures";
import MemoryWebShowcase from "./components/MemoryWebShowcase";
import ProbeSpaces from "./components/ProbeSpaces";

import SectionSeparator from "./components/SectionSeparator";
import MagicBento from "./components/MagicBento";
import Footer from "./components/Footer";
import UniversalCommandBar from "./components/UniversalCommandBar";
import DeveloperReveal from "./components/DeveloperReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <BentoGridFeatures />
      <MemoryWebShowcase />
      <DeveloperReveal />
      <ProbeSpaces />
      <UniversalCommandBar />
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
      <Footer />
    </main>
  );
}
