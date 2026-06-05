export default function Footer() {
  return (
    <footer className="bg-bg-secondary">
      <div className="page-container pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <p className="text-label text-text-primary mb-2">
              SOCIEDADE PSICANALÍTICA ONLINE
            </p>
            <p className="text-caption text-text-tertiary">
              Formação clínica de excelência em psicanálise.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col md:items-center gap-3">
            <a href="#" className="text-caption text-text-tertiary hover:text-text-secondary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-caption text-text-tertiary hover:text-text-secondary transition-colors">
              Política de Privacidade
            </a>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <p className="text-caption text-text-secondary mb-1">
              Inscreva-se pelo WhatsApp
            </p>
            <a
              href="https://wa.me/5522998391755?text=Olá!%20Tenho%20interesse%20no%20seminário%20A%20Escuta%20Psicanalítica%20dos%20Pais%20na%20Clínica%20do%20Autismo."
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-small text-gold hover:text-gold-light transition-colors"
            >
              (22) 99839-1755
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border-custom text-center">
          <p className="text-caption text-text-tertiary">
            © 2026 Sociedade Psicanalítica Online. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
