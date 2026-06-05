import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export default function PropostaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !cardRef.current) return;

    const line = cardRef.current.querySelector('.vertical-line');
    const content = cardRef.current.querySelector('.card-content');
    const pills = cardRef.current.querySelectorAll('.highlight-pill');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      line,
      { scaleY: 0 },
      { scaleY: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        content,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        pills,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.1 },
        '-=0.2'
      );
  }, { scope: sectionRef });

  return (
    <section id="proposta" ref={sectionRef} className="section-padding">
      <div className="page-container">
        <SectionHeading
          label="PROPOSTA"
          heading="Acolher o Luto, Transformar a Clínica"
          subheading="Uma formação que parte da experiência real dos pais para construir intervenções clinicamente fundamentadas."
        />

        {/* Card */}
        <div
          ref={cardRef}
          className="relative mt-24 max-w-4xl mx-auto bg-bg-secondary border border-border-custom rounded-2xl p-8 md:p-16"
        >
          {/* Vertical gold line */}
          <div
            className="vertical-line absolute left-0 top-0 bottom-0 w-[3px] bg-gold origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Content */}
          <div className="card-content opacity-0">
            <p className="text-body-large text-text-primary leading-relaxed mb-6">
              Este seminário oferece uma formação clínica centrada na escuta de mães e pais de autistas e no manejo das complexas dinâmicas transferenciais que envolvem a família. O percurso foca no acolhimento do luto simbólico pelo &ldquo;filho ideal&rdquo; e na desconstrução da culpa, visando transformar o impacto traumático do diagnóstico em um espaço de invenção subjetiva para os pais.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              Ao final, o objetivo é capacitar para ajudar os pais a historizarem seu sofrimento e a encontrarem um lugar de desejo possível diante da singularidade de seus filhos.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              <span className="highlight-pill opacity-0 text-caption text-gold bg-gold-dim border border-gold/20 px-4 py-2 rounded-full">
                Luto simbólico
              </span>
              <span className="highlight-pill opacity-0 text-caption text-gold bg-gold-dim border border-gold/20 px-4 py-2 rounded-full">
                Dinâmicas transferenciais
              </span>
              <span className="highlight-pill opacity-0 text-caption text-gold bg-gold-dim border border-gold/20 px-4 py-2 rounded-full">
                Invenção subjetiva
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
