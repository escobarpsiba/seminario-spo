import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from '@/components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const modulos = [
  {
    number: 'I',
    title: 'A Chegada à Clínica',
    encontros: [
      {
        numero: 1,
        date: '30/07/2026',
        title: 'O lugar dos pais na psicanálise de crianças',
        description:
          'A dependência real do infante e a queixa inicial como ponto de partida.',
      },
      {
        numero: 2,
        date: '06/08/2026',
        title: 'Sintoma na criança vs. sintoma da criança',
        description:
          'Como o analista recebe a demanda dos pais sem se tornar um "reeducador" do comportamento do filho.',
      },
      {
        numero: 3,
        date: '13/08/2026',
        title: 'Entrevistas preliminares com os pais',
        description:
          'Localizar o sofrimento inconsciente por trás da descrição fenomenológica do diagnóstico.',
      },
      {
        numero: 4,
        date: '20/08/2026',
        title: 'O mal-entendido como abertura clínica',
        description:
          'Usar a dúvida dos pais sobre o diagnóstico para iniciar o processo de associação livre.',
      },
    ],
  },
  {
    number: 'II',
    title: 'O Impacto do Real do Diagnóstico',
    encontros: [
      {
        numero: 5,
        date: '27/08/2026',
        title: 'O luto pelo filho idealizado',
        description:
          'Manejo clínico da angústia e da quebra de expectativa após a confirmação do autismo.',
      },
      {
        numero: 6,
        date: '03/09/2026',
        title: 'O "Estrangeiro" na família',
        description:
          'Acolher o estranhamento dos pais diante de uma criança que não responde aos investimentos tradicionais.',
      },
      {
        numero: 7,
        date: '10/09/2026',
        title: 'O diagnóstico como escudo defensivo',
        description:
          'Quando a família usa o "rótulo" para evitar lidar com conflitos conjugais ou geracionais.',
      },
      {
        numero: 8,
        date: '17/09/2026',
        title: 'A dimensão do tempo na escuta parental',
        description:
          'O presente contínuo dos pais e a introdução da diferença e do futuro na narrativa familiar.',
      },
    ],
  },
  {
    number: 'III',
    title: 'Ética, Culpa e Responsabilidade',
    encontros: [
      {
        numero: 9,
        date: '24/09/2026',
        title: 'História da culpabilização das mães',
        description:
          'Revisão crítica para que o analista não repita o erro histórico de julgar a "mãe geladeira".',
      },
      {
        numero: 10,
        date: '01/10/2026',
        title: 'De culpar a implicar',
        description:
          'Como ajudar os pais a saírem do lugar de vítimas para se tornarem sujeitos ativos no tratamento.',
      },
      {
        numero: 11,
        date: '08/10/2026',
        title: 'O saber dos pais vs. o saber do especialista',
        description:
          'Valorizar a intuição e a observação cotidiana da família em detrimento dos manuais.',
      },
      {
        numero: 12,
        date: '15/10/2026',
        title: 'A resistência parental como proteção',
        description:
          'Entender por que alguns pais "atrapalham" o tratamento como uma forma de manter sua própria estabilidade psíquica.',
      },
    ],
  },
  {
    number: 'IV',
    title: 'A Mulher e o Desejo Materno',
    encontros: [
      {
        numero: 13,
        date: '22/10/2026',
        title: 'O desejo da mãe e o diagnóstico',
        description:
          'Como o autismo interpela o narcisismo feminino e fragiliza o laço mãe-filho.',
      },
      {
        numero: 14,
        date: '29/10/2026',
        title: 'Não há instinto materno',
        description:
          'A desmistificação da maternidade como "benção" para acolher o horror e o desamparo da mãe.',
      },
      {
        numero: 15,
        date: '05/11/2026',
        title: 'Mãe e Mulher: a distinção necessária',
        description:
          'Ajudar a mulher a reencontrar seu lugar de sujeito para além da função de cuidadora 24h.',
      },
      {
        numero: 16,
        date: '12/11/2026',
        title: 'O complexo de Jocasta e a devastação',
        description:
          'Impasses na relação mãe-filha e a reedição de fantasmas inconscientes na meia-idade.',
      },
    ],
  },
  {
    number: 'V',
    title: 'Manejo Clínico Avançado',
    encontros: [
      {
        numero: 17,
        date: '19/11/2026',
        title: 'O analista como "representante" e "amparo"',
        description:
          'A função do analista em oferecer uma presença acolhedora no desamparo parental.',
      },
      {
        numero: 18,
        date: '26/11/2026',
        title: 'Manejo da transferência com a "dupla" parental',
        description:
          'Como lidar com as demandas cruzadas de pai e mãe na clínica.',
      },
      {
        numero: 19,
        date: '03/12/2026',
        title: 'A escrita como recurso de subjetivação',
        description:
          'O uso de diários e testemunhos para que os pais inventem uma nova condição parental.',
      },
      {
        numero: 20,
        date: '10/12/2026',
        title: 'Parceria e Ética do Cuidado',
        description:
          'O analista como parceiro da família na construção de um mundo habitável para o sujeito.',
      },
    ],
  },
];

export default function ModulosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const moduleEls = sectionRef.current.querySelectorAll('.modulo-card');

    moduleEls.forEach((mod) => {
      const header = mod.querySelector('.modulo-header');
      const encontros = mod.querySelectorAll('.encontro-item');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mod,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        header,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );

      encontros.forEach((encontro, i) => {
        tl.fromTo(
          encontro,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' },
          i === 0 ? '-=0.2' : '-=0.3'
        );
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="modulos" ref={sectionRef} className="section-padding">
      <div className="page-container">
        <SectionHeading
          label="PROGRAMA COMPLETO"
          heading="Módulos & Encontros"
          subheading="20 encontros ao vivo distribuídos em 5 módulos temáticos, com gravação disponível por tempo indeterminado."
        />

        <div className="mt-24 max-w-4xl mx-auto flex flex-col gap-20">
          {modulos.map((modulo) => (
            <div key={modulo.number} className="modulo-card">
              {/* Module Header */}
              <div className="modulo-header opacity-0 flex items-center gap-4 mb-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-dim border border-gold/30 flex items-center justify-center">
                  <span className="text-heading-3 text-gold font-bold">
                    {modulo.number}
                  </span>
                </div>
                <h3 className="text-heading-2 text-text-primary">
                  {modulo.title}
                </h3>
              </div>

              {/* Encontros List */}
              <div className="flex flex-col gap-4">
                {modulo.encontros.map((encontro) => (
                  <div
                    key={encontro.numero}
                    className="encontro-item opacity-0 bg-bg-secondary border border-border-custom rounded-xl p-5 md:p-6 hover:border-border-light transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number badge */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-dim flex items-center justify-center mt-0.5">
                        <span className="text-caption text-gold font-semibold">
                          #{encontro.numero}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                          <span className="text-caption text-gold whitespace-nowrap">
                            {encontro.date}
                          </span>
                        </div>
                        <h4 className="text-heading-3 text-text-primary">
                          {encontro.title}
                        </h4>
                        <p className="text-body text-text-secondary mt-1">
                          {encontro.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Info */}
        <div className="mt-24 max-w-4xl mx-auto bg-bg-secondary border border-gold/20 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-label text-gold">PLATAFORMA</span>
            <div className="w-2 h-2 rounded-full bg-gold" />
          </div>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            Os encontros acontecem ao vivo através do Google Meet e ficam gravados para acesso posterior por tempo indeterminado.
          </p>
        </div>

        {/* Investimento */}
        <div id="investimento" className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-label text-gold mb-4 block">INVESTIMENTO</span>
            <h2 className="text-heading-1 text-text-primary">
              Invista na Sua Formação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Parcelado */}
            <div className="bg-bg-secondary border border-border-custom rounded-2xl p-8 md:p-10 hover:border-gold/30 transition-colors duration-300">
              <p className="text-label text-gold mb-2">CARTO DE CRÉDITO</p>
              <p className="text-4xl md:text-5xl font-display font-bold text-text-primary">
                6x R$ 100
              </p>
              <p className="text-body text-text-secondary mt-2">
                Sem juros · Parcelamento facilitado
              </p>
            </div>

            {/* Card 2 - À vista */}
            <div className="bg-bg-secondary border border-gold/30 rounded-2xl p-8 md:p-10 hover:border-gold/50 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-gold text-bg-primary text-caption font-semibold px-3 py-1 rounded-full">
                Melhor oferta
              </div>
              <p className="text-label text-gold mb-2">PIX À VISTA</p>
              <p className="text-4xl md:text-5xl font-display font-bold text-text-primary">
                R$ 500
              </p>
              <p className="text-body text-text-secondary mt-2">
                Pagamento único com desconto
              </p>
            </div>
          </div>

          {/* Combo */}
          <div className="mt-6 bg-gold-dim border border-gold/20 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-heading-3 text-gold">
              Combo SPO
            </p>
            <p className="text-body text-text-secondary mt-2 max-w-xl mx-auto">
              Se neste semestre for fazer outro seminário da SPO além deste, o segundo fica por apenas <strong className="text-text-primary">R$ 400</strong>.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/5522998391755?text=Olá!%20Tenho%20interesse%20no%20seminário%20A%20Escuta%20Psicanalítica%20dos%20Pais%20na%20Clínica%20do%20Autismo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-caption font-semibold bg-gold text-bg-primary px-10 py-4 rounded-xl hover:bg-gold-light hover:shadow-glow-gold-lg hover:scale-[1.03] transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero me inscrever
            </a>
          </div>
        </div>

        {/* Bônus */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gold-dim/50 to-bg-secondary border border-gold/20 rounded-2xl p-8 md:p-12 text-center">
            <span className="text-label text-gold mb-2 block">BÔNUS EXCLUSIVO</span>
            <h2 className="text-heading-1 text-gold mb-4">
              Freud e Shakespeare
            </h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
              Ao se inscrever no seminário, você poderá participar gratuitamente da edição especial <strong className="text-text-primary">"Freud e Shakespeare"</strong>, do Clube de Leituras da SPO.
            </p>
            <p className="text-body text-text-tertiary mt-4 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Quintas-feiras, das 09h30 às 11h
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-body text-text-secondary mb-6">
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
      </div>
    </section>
  );
}
