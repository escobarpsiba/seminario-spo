import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LuminousParticles from '@/components/LuminousParticles';

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      '.cta-line',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2 }
    )
      .fromTo(
        '.cta-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.cta-button',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' },
        '-=0.2'
      )
      .fromTo(
        '.cta-trust',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.1'
      )
      .fromTo(
        '.cta-contact',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Particles */}
      <LuminousParticles count={20} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="mb-6">
          <span className="cta-line block text-display-l text-text-primary opacity-0">
            Sua Formação Clínica
          </span>
          <span
            className="cta-line block text-display-l text-gold opacity-0"
            style={{ textShadow: '0 0 60px rgba(212, 168, 67, 0.2)' }}
          >
            Começa Aqui
          </span>
        </h2>

        {/* Description */}
        <p className="cta-desc opacity-0 text-body-large text-text-secondary max-w-xl mb-12">
          Inscreva-se agora pelo WhatsApp e garanta sua vaga no seminário. As inscrições são limitadas para garantir a qualidade do grupo e do processo de formação.
        </p>

        {/* CTA Button */}
        <a
          href="https://wa.me/5522998391755?text=Olá!%20Tenho%20interesse%20no%20seminário%20A%20Escuta%20Psicanalítica%20dos%20Pais%20na%20Clínica%20do%20Autismo."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button opacity-0 inline-flex items-center justify-center gap-3 bg-whatsapp text-white font-semibold text-lg px-12 py-5 rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:bg-whatsapp-dark hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-all duration-400"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Inscreva-se pelo WhatsApp
        </a>

        {/* Trust Signal */}
        <p className="cta-trust opacity-0 text-caption text-text-tertiary mt-8 flex items-center gap-2 flex-wrap justify-center">
          Inscrições abertas
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          Vagas limitadas
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          Transmissão ao vivo via Google Meet
        </p>

        {/* Contact Info */}
        <p className="cta-contact opacity-0 text-caption text-text-secondary mt-4">
          Dúvidas? Fale conosco:{' '}
          <a
            href="https://wa.me/5522998391755?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20seminário."
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
          >
            (22) 99839-1755
          </a>
        </p>
      </div>
    </section>
  );
}
