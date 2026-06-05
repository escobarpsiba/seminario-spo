import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from '@/components/SectionHeading';
import { Users, Brain, Stethoscope, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const audienceCards = [
  {
    icon: Users,
    title: 'Psicólogos e Psicanalistas',
    description: 'Profissionais em atuação clínica que desejam desenvolver uma escuta especializada para pais de crianças e adolescentes autistas.',
  },
  {
    icon: Brain,
    title: 'Estudantes de Psicologia',
    description: 'Acadêmicos interessados em aprofundar o conhecimento sobre autismo, luto e intervenções psicanalíticas com famílias.',
  },
  {
    icon: Stethoscope,
    title: 'Terapeutas e Especialistas',
    description: 'Profissionais da saúde mental, fonoaudiólogos, pedagogos e outros que acompanham famílias no contexto do TEA.',
  },
  {
    icon: GraduationCap,
    title: 'Pesquisadores e Educadores',
    description: 'Pesquisadores e profissionais da educação interessados na interface entre psicanálise, autismo e dinâmica familiar.',
  },
];

export default function ParaQuemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.audience-card');

    cards.forEach((card, index) => {
      const icon = card.querySelector('.card-icon');
      const title = card.querySelector('.card-title');
      const desc = card.querySelector('.card-desc');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: index * 0.15 }
      )
        .fromTo(
          icon,
          { opacity: 0 },
          { opacity: 1, duration: 0.2, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          title,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' },
          '-=0.1'
        )
        .fromTo(
          desc,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' },
          '-=0.1'
        );
    });
  }, { scope: sectionRef });

  return (
    <section id="publico" ref={sectionRef} className="section-padding">
      <div className="page-container">
        <SectionHeading
          label="PÚBLICO-ALVO"
          heading="Para Quem É Este Seminário?"
          subheading="Profissionais que buscam aprofundar sua escuta clínica no campo do autismo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {audienceCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="audience-card opacity-0 bg-bg-secondary border border-border-custom rounded-2xl p-8 md:p-10 hover:border-border-light hover:shadow-card transition-all duration-400"
              >
                <div className="card-icon opacity-0">
                  <IconComponent size={32} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="card-title opacity-0 text-heading-3 text-text-primary mt-6">
                  {card.title}
                </h3>
                <p className="card-desc opacity-0 text-body-small text-text-secondary mt-3">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
