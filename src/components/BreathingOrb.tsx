import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function BreathingOrb() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Luminous orb
    const orbGeometry = new THREE.SphereGeometry(1.8, 64, 64);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0xD4A843,
      transparent: true,
      opacity: 0.12,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    scene.add(orb);

    // Inner core
    const coreGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xE8C76A,
      transparent: true,
      opacity: 0.06,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Outer halo
    const haloGeometry = new THREE.SphereGeometry(3.0, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xD4A843,
      transparent: true,
      opacity: 0.03,
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    scene.add(halo);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Breathing motion
      const breathScale = 1 + Math.sin(time * 0.5) * 0.08;
      orb.scale.setScalar(breathScale);
      core.scale.setScalar(breathScale * 1.02);
      halo.scale.setScalar(breathScale * 0.98);

      // Gentle rotation
      orb.rotation.y = time * 0.05;
      core.rotation.y = time * 0.03;

      // Opacity pulsing
      orbMaterial.opacity = 0.12 + Math.sin(time * 0.8) * 0.03;
      coreMaterial.opacity = 0.06 + Math.sin(time * 0.6) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
