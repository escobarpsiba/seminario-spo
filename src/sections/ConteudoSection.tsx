import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    number: '01',
    title: 'O Diagnóstico como Acontecimento',
    description: 'Compreender o diagnóstico de autismo não como mero rótulo, mas como um acontecimento traumático que reconfigura toda a subjetividade familiar. Estudo das reações imediatas e das primeiras demandas de escuta.',
  },
  {
    number: '02',
    title: "O Luto Simbólico pelo 'Filho Ideal'",
    description: "Análise do processo de luto que atravessa os pais — não um luto pela perda real, mas pelo filho imaginado, idealizado. Como identificar e trabalhar clinicamente esse sofrimento silencioso.",
  },
  {
    number: '03',
    title: 'Dinâmicas Transferenciais na Família',
    description: 'Exploração das complexas dinâmicas transferenciais que envolvem pais, mães e o profissional. Como posicionar-se como analista diante das projeções, culpas e demandas inconscientes.',
  },
  {
    number: '04',
    title: 'A Culpa e sua Desconstrução',
    description: 'A culpa materna e paterna como fenômeno central na clínica do autismo. Estratégias psicanalíticas para desconstruir a culpa e abrir espaço para o desejo.',
  },
  {
    number: '05',
    title: 'A Invenção Subjetiva dos Pais',
    description: 'Como transformar o trauma do diagnóstico em um espaço de invenção subjetiva. Ajudar os pais a historizarem seu sofrimento e ressignificarem sua parentalidade.',
  },
  {
    number: '06',
    title: 'O Desejo Possível Diante da Singularidade',
    description: 'A construção de um lugar de desejo possível para os pais — um desejo que respeita a singularidade do filho autista e reinventa os vínculos familiares.',
  },
];

export default function ConteudoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const moduleEls = sectionRef.current.querySelectorAll('.learning-module');

    moduleEls.forEach((mod) => {
      const number = mod.querySelector('.module-number');
      const title = mod.querySelector('.module-title');
      const desc = mod.querySelector('.module-desc');
      const divider = mod.querySelector('.module-divider');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mod,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        number,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      )
        .fromTo(
          title,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          desc,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        );

      if (divider) {
        tl.fromTo(
          divider,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="conteudo" ref={sectionRef} className="section-padding">
      <div className="page-container">
        <SectionHeading
          label="CONTEÚDO PROGRAMÁTICO"
          heading="O que Você Vai Aprender"
          subheading="Um percurso estruturado em módulos teórico-clínicos ao longo de 5 meses."
        />

        <div className="mt-24 max-w-4xl mx-auto">
          {modules.map((mod, index) => (
            <div key={mod.number}>
              <div className="learning-module flex gap-6 md:gap-10 items-start">
                {/* Number */}
                <div className="module-number flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold-dim border border-gold/30 flex items-center justify-center opacity-0">
                  <span className="text-heading-3 text-gold">{mod.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="module-title text-heading-3 text-text-primary opacity-0">
                    {mod.title}
                  </h3>
                  <p className="module-desc text-body text-text-secondary mt-3 opacity-0">
                    {mod.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < modules.length - 1 && (
                <div
                  className="module-divider h-px bg-border-custom my-10 origin-left"
                  style={{ transform: 'scaleX(0)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
