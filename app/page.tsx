import Hero from "./components/Hero";
import BentoGridFeatures from "./components/BentoGridFeatures";
import MemoryWebShowcase from "./components/MemoryWebShowcase";
import ProbeSpaces from "./components/ProbeSpaces";
import DownloadCTA from "./components/DownloadCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <BentoGridFeatures />
      <MemoryWebShowcase />
      <ProbeSpaces />
      <DownloadCTA />
    </main>
  );
}
