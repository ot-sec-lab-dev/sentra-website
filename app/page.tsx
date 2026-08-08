import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Capabilities from "@/components/sections/Capabilities";
import Methodology from "@/components/sections/Methodology";
import WhySentraOT from "@/components/sections/WhySentraOT";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Capabilities />
      <Methodology />
      <WhySentraOT />
    </main>
  );
}