import Hero from "./components/Hero";
import BentoGridFeatures from "./components/BentoGridFeatures";
import MemoryWebShowcase from "./components/MemoryWebShowcase";
import ProbeSpaces from "./components/ProbeSpaces";
import DownloadCTA from "./components/DownloadCTA";
import ScrollSection from "./components/ScrollSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <ScrollSection>
        <Hero />
      </ScrollSection>
      <ScrollSection>
        <BentoGridFeatures />
      </ScrollSection>
      <ScrollSection>
        <MemoryWebShowcase />
      </ScrollSection>
      <ScrollSection>
        <ProbeSpaces />
      </ScrollSection>
      <ScrollSection>
        <DownloadCTA />
      </ScrollSection>
    </main>
  );
}
