import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from '@/components/SectionHeading';
import LuminousParticles from '@/components/LuminousParticles';
import { Clock, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DatasHorariosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.schedule-card');
    const badge = sectionRef.current.querySelector('.duration-badge');
    const visual = sectionRef.current.querySelector('.ambient-visual');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current.querySelector('.schedule-grid'),
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    cards.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        index * 0.15
      );
    });

    if (badge) {
      tl.fromTo(
        badge,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.3'
      );
    }

    if (visual) {
      gsap.fromTo(
        visual,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visual,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section id="agenda" ref={sectionRef} className="section-padding">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Schedule Info */}
          <div className="schedule-grid">
            <SectionHeading
              label="AGENDA"
              heading="Quando Acontece"
            />

            <div className="mt-16 flex flex-col gap-6">
              {/* Card 1 - Horário */}
              <div className="schedule-card opacity-0 bg-bg-secondary border border-border-custom rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-gold" strokeWidth={1.5} />
                  <span className="text-label text-gold">HORÁRIO</span>
                </div>
                <p className="text-heading-2 text-text-primary">
                  Quintas-feiras, das 18h às 19h
                </p>
                <p className="text-caption text-text-tertiary mt-2">
                  (BRT/UTC-3) · Transmissão ao vivo via Google Meet
                </p>
              </div>

              {/* Card 2 - Período */}
              <div className="schedule-card opacity-0 bg-bg-secondary border border-border-custom rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={24} className="text-gold" strokeWidth={1.5} />
                  <span className="text-label text-gold">PERÍODO</span>
                </div>
                <p className="text-heading-2 text-text-primary">
                  Julho a Dezembro de 2026
                </p>
                <p className="text-caption text-text-tertiary mt-2">
                  Da última semana de julho à primeira semana de dezembro · Encontros semanais
                </p>
              </div>

              {/* Duration Badge */}
              <div className="duration-badge opacity-0 inline-flex self-start bg-gold-dim border border-gold/20 rounded-full px-5 py-2.5 mt-2">
                <span className="text-caption text-gold">
                  5 meses de formação · Aprox. 20 encontros
                </span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="ambient-visual opacity-0 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
              style={{
                background: 'radial-gradient(circle, #0C1628 0%, #050B14 100%)',
                boxShadow: 'inset 0 0 80px rgba(212, 168, 67, 0.15), 0 0 60px rgba(212, 168, 67, 0.08)',
              }}
            >
              <LuminousParticles count={10} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl md:text-8xl text-gold/30 animate-pulse-gentle">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
