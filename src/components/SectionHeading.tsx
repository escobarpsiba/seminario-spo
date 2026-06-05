import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  label: string;
  heading: string;
  subheading?: string;
  light?: boolean;
}

export default function SectionHeading({ label, heading, subheading, light = false }: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      containerRef.current.querySelector('.section-label'),
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }
    )
      .fromTo(
        containerRef.current.querySelector('.section-heading'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        '-=0.1'
      )
      .fromTo(
        containerRef.current.querySelector('.section-subheading'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' },
        '-=0.1'
      );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={light ? 'text-center' : ''}>
      <p className="section-label text-label text-gold mb-4">
        {label}
      </p>
      <h2 className="section-heading text-heading-1 text-text-primary">
        {heading}
      </h2>
      {subheading && (
        <p className="section-subheading text-body-large text-text-secondary mt-4 max-w-2xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
