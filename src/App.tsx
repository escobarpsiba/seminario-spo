import BreathingOrb from '@/components/BreathingOrb';
import MouseOrbitOverlay from '@/components/MouseOrbitOverlay';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import FloatingWhatsAppCTA from '@/components/FloatingWhatsAppCTA';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import PropostaSection from '@/sections/PropostaSection';
import ParaQuemSection from '@/sections/ParaQuemSection';
import ConteudoSection from '@/sections/ConteudoSection';
import ModulosSection from '@/sections/ModulosSection';
import DatasHorariosSection from '@/sections/DatasHorariosSection';
import ProfessorSection from '@/sections/ProfessorSection';
import FinalCTASection from '@/sections/FinalCTASection';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Three.js Breathing Orb - fixed background */}
      <BreathingOrb />

      {/* Mouse orbit luminous overlay */}
      <MouseOrbitOverlay />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-20">
        <HeroSection />
        <PropostaSection />
        <ParaQuemSection />
        <ConteudoSection />
        <ModulosSection />
        <DatasHorariosSection />
        <ProfessorSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsAppCTA />
    </div>
  );
}

export default App;
