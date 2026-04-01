export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            Gradie Kamba © 2026
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            UX Product Designer · Consultante Solutions Digitales
          </p>
          <div className="flex items-center gap-4">
            <a href="#projets" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
              Projets
            </a>
            <a href="#contact" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-full border border-border font-sans text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
            >
              Télécharger mon CV
            </a>
            {/* // Replace href="#" with real CV PDF link */}
          </div>
        </div>
      </div>
    </footer>
  );
}
