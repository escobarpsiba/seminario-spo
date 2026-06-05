import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LuminousParticles from '@/components/LuminousParticles';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      '.hero-badge',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
      .fromTo(
        '.hero-line',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2 },
        '-=0.2'
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.hero-instructor',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.hero-card',
        { opacity: 0, x: 40, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.1'
      );
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center pt-[100px] overflow-hidden"
    >
      {/* Particles */}
      <LuminousParticles count={30} />

      {/* Content */}
      <div className="relative z-20 w-full px-6 page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="flex flex-col text-center lg:text-left">
            {/* Badge */}
            <div className="hero-badge opacity-0 mb-8 lg:mb-10">
              <span className="text-label text-gold tracking-widest">
                SEMINÁRIO ONLINE · GOOGLE MEET
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6">
              <span className="hero-line block text-display-xl text-text-primary opacity-0">
                A Escuta Psicanalítica
              </span>
              <span className="hero-line block text-display-xl text-text-primary opacity-0">
                dos Pais na Clínica
              </span>
              <span className="hero-line block text-display-xl text-gold opacity-0" style={{ textShadow: '0 0 80px rgba(212, 168, 67, 0.15)' }}>
                do Autismo
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle opacity-0 text-body-large text-text-secondary max-w-xl mb-8 lg:mb-10">
              Uma formação clínica para escutar, acolher e transformar a experiência de mães e pais de autistas.
            </p>

            {/* Instructor */}
            <p className="hero-instructor opacity-0 text-caption text-text-tertiary mb-10 lg:mb-12">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-2" />
              Com Lucio Escobar
            </p>

            {/* CTA Group */}
            <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <a
                href="https://wa.me/5522998391755?text=Olá!%20Tenho%20interesse%20no%20seminário%20A%20Escuta%20Psicanalítica%20dos%20Pais%20na%20Clínica%20do%20Autismo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-caption font-semibold bg-gold text-bg-primary px-8 py-4 rounded-xl hover:bg-gold-light hover:shadow-glow-gold-lg hover:scale-[1.03] transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inscreva-se pelo WhatsApp
              </a>
              <a
                href="#proposta"
                className="inline-flex items-center justify-center text-caption font-semibold bg-transparent text-text-secondary border border-border-custom px-8 py-4 rounded-xl hover:border-border-light hover:text-text-primary transition-all duration-300"
              >
                Conheça o programa
              </a>
            </div>
          </div>

          {/* Right - Card */}
          <div className="hero-card opacity-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-elevated border border-gold/20 hover:border-gold/40 transition-colors duration-400">
              <img
                src="/seminario-card.jpeg"
                alt="Card do Seminário — A Escuta Psicanalítica dos Pais na Clínica do Autismo"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(5, 11, 20, 0.6) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-caption text-text-tertiary">Role para explorar</span>
        <ChevronDown size={20} className="text-text-tertiary animate-bounce-scroll" />
      </div>
    </section>
  );
}
