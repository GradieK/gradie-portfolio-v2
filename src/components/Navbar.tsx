import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];
const whatsappHref = "https://wa.me/243993650147?text=Bonjour%20Gradie%2C%20je%20souhaite%20vous%20contacter.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      }`}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
          aria-label="Accueil"
        >
          <span className="font-sans font-bold text-sm text-primary-foreground">GK</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-sans text-sm font-medium text-foreground/80 hover:text-primary transition-colors pb-0.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-sans text-sm font-semibold hover:scale-[1.02] hover:shadow-lg transition-all"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <Menu className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-sans text-sm font-semibold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Me contacter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
