import { Target, Palette, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    icon: Target,
    title: "Vision Produit",
    text: "Je définis ce qu'il faut construire avant de construire — PRD, roadmap, priorisation.",
  },
  {
    icon: Palette,
    title: "Design Centré Utilisateur",
    text: "Des interfaces que vos utilisateurs comprennent du premier coup.",
  },
  {
    icon: Settings,
    title: "Pont Métier-Technique",
    text: "Je crée des solutions digitales qui résolvent de vrais problèmes métier(develloppement pensé produit, analyse de donnée et automatisation IA).",
  },
];

export default function ValueProposition() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 scroll-fade-up" ref={ref}>
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
            Ce que j'apporte à vos projets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((c) => (
              <div
                key={c.title}
                className="bg-background p-8 rounded-3xl border border-border hover:-translate-y-1 hover:shadow-hover transition-all duration-300"
              >
                <c.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-3">{c.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
