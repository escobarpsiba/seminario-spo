import { useMemo } from 'react';

interface LuminousParticlesProps {
  count?: number;
  className?: string;
}

export default function LuminousParticles({ count = 30, className = '' }: LuminousParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 20,
      opacity: 0.1 + Math.random() * 0.2,
      drift: -30 + Math.random() * 60,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold animate-float"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--particle-duration': `${p.duration}s`,
            '--particle-delay': `${p.delay}s`,
            '--particle-opacity': p.opacity,
            '--particle-drift': `${p.drift}px`,
            opacity: 0,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
