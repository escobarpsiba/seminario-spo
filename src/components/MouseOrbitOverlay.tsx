import { useMousePosition } from '@/hooks/useMousePosition';

export default function MouseOrbitOverlay() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 10,
        background: `radial-gradient(600px circle at ${x}% ${y}%, rgba(212, 168, 67, 0.06), transparent 60%)`,
        mixBlendMode: 'screen',
      }}
    />
  );
}
