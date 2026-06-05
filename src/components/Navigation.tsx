import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Proposta', href: '#proposta' },
  { label: 'Público', href: '#publico' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Coordenador', href: '#professor' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-surface/90 backdrop-blur-xl border-b border-border-custom/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="page-container flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2"
          >
            <span className="text-label text-text-primary">
              SOCIEDADE PSICANALÍTICA ONLINE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-caption transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-gold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5522998391755?text=Olá!%20Tenho%20interesse%20no%20seminário%20A%20Escuta%20Psicanalítica%20dos%20Pais%20na%20Clínica%20do%20Autismo."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex text-label bg-gold text-bg-primary px-6 py-2.5 rounded-full hover:bg-gold-light hover:shadow-glow-gold transition-all duration-300"
          >
            Inscrever-se agora
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-text-primary p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`text-heading-3 transition-colors duration-300 ${
              activeSection === link.href.slice(1)
                ? 'text-gold'
                : 'text-text-primary'
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5522998391755?text=Olá!%20Tenho%20interesse%20no%20seminário%20A%20Escuta%20Psicanalítica%20dos%20Pais%20na%20Clínica%20do%20Autismo."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-label bg-gold text-bg-primary px-8 py-3 rounded-full"
        >
          Inscrever-se agora
        </a>
      </div>
    </>
  );
}
