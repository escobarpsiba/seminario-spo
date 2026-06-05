import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  'Doutor em Psicanálise pela Logos University - França',
  'Pós Graduado em Filosofia Contemporânea e Psicologia Fenomenológica Existencial',
  'Graduado em Filosofia e Antropologia',
];

export default function ProfessorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const portrait = sectionRef.current.querySelector('.professor-portrait');
    const label = sectionRef.current.querySelector('.professor-label');
    const name = sectionRef.current.querySelector('.professor-name');
    const role = sectionRef.current.querySelector('.professor-role');
    const paragraphs = sectionRef.current.querySelectorAll('.bio-paragraph');
    const creds = sectionRef.current.querySelectorAll('.credential-item');

    // Portrait entrance
    if (portrait) {
      gsap.fromTo(
        portrait,
        { opacity: 0, x: -30, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: portrait,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Bio cascade
    const bioTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current.querySelector('.professor-bio'),
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    bioTl.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power3.out' })
      .fromTo(name, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
      .fromTo(role, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
      .fromTo(
        paragraphs,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.1 },
        '-=0.1'
      )
      .fromTo(
        creds,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out', stagger: 0.1 },
        '-=0.2'
      );
  }, { scope: sectionRef });

  return (
    <section id="professor" ref={sectionRef} className="section-padding">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-center">
          {/* Left - Portrait */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div
              className="professor-portrait opacity-0 relative aspect-[3/4] w-full max-w-[400px] rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-colors duration-400"
            >
              <img
                src="/professor-portrait.png"
                alt="Lucio Escobar - Psicanalista"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(5, 11, 20, 0.8) 100%)',
                }}
              />
            </div>

            <a
              href="https://lucioescobar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 text-caption font-semibold bg-transparent text-gold border border-gold/30 px-6 py-3 rounded-xl hover:bg-gold-dim hover:border-gold/60 transition-all duration-300 w-full max-w-[400px]"
            >
              Conheça mais Lucio Escobar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* Right - Bio */}
          <div className="professor-bio lg:col-span-3">
            <p className="professor-label opacity-0 text-label text-gold mb-4">
              COORDENADOR
            </p>

            <h2 className="professor-name opacity-0 text-display-l text-text-primary">
              Lucio Escobar
            </h2>

            {/* Gold underline */}
            <div className="w-[60px] h-[2px] bg-gold mt-4 mb-4" />

            <p className="professor-role opacity-0 text-heading-3 text-text-secondary">
              Psicanalista · Supervisor Clínico
            </p>

            <div className="mt-10 space-y-6">
              <p className="bio-paragraph opacity-0 text-body text-text-secondary leading-relaxed">
                Lucio Escobar é psicanalista com vasta experiência clínica no atendimento a famílias de pessoas autistas. Sua prática se fundamenta na escuta psicanalítica como instrumento de transformação subjetiva, especialmente no acolhimento do luto e na reconstrução do desejo parental.
              </p>
              <p className="bio-paragraph opacity-0 text-body text-text-secondary leading-relaxed">
                Ao longo de sua trajetória, desenvolveu uma abordagem singular que integra a teoria psicanalítica contemporânea às demandas específicas das famílias que atravessam o diagnóstico de autismo, criando espaços de fala onde o sofrimento pode ser historizado e resignificado.
              </p>
              <p className="bio-paragraph opacity-0 text-body text-text-secondary leading-relaxed">
                Este seminário consolida anos de experiência clínica e reflexão teórica em um percurso formativo que busca capacitar profissionais para uma escuta eticamente comprometida e clinicamente efetiva.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 flex flex-col gap-3">
              {credentials.map((cred, index) => (
                <div key={index} className="credential-item opacity-0 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-caption text-text-secondary">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
