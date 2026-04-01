import { Target, Palette, Settings, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  {
    icon: Target,
    title: "Product Management",
    tags: ["Roadmap", "PRD", "Backlog", "User Stories", "KPIs", "Agile", "Scrum"],
  },
  {
    icon: Palette,
    title: "UX & Product Design",
    tags: ["Figma", "Wireframes", "Prototypage", "Tests utilisateurs", "Parcours utilisateurs", "Design System (notions)"],
  },
  {
    icon: Settings,
    title: "Analyse Fonctionnelle & ERP",
    tags: ["Oracle EBS R12", "OAF", "PL/SQL", "SQL", "MD050", "Tests TE020", "Odoo", "Spécifications fonctionnelles"],
  },
  {
    icon: Wrench,
    title: "Outils & Environnements",
    tags: ["Azure DevOps", "Jira", "Git", "MS Project", "Excalidraw", "N8N", "Python", "JavaScript","Next js","React", "HTML/CSS", "Linux"],
  },
];

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="competences" className="py-24 bg-card">
      <div className="container mx-auto px-6 scroll-fade-up" ref={ref}>
          <h2 className="text-3xl sm:text-4xl font-serif mb-16">Mon expertise</h2>
          <p className="font-sans text-muted-foreground mb-8">Concevoir la solution UX, Construire le prototype et optimiser tout ça en utilisant la puissance des outils IA.</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - skill groups */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillGroups.map((g) => (
                <div key={g.title} className="bg-background p-6 rounded-3xl border border-border">
                  <g.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg mb-4">{g.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {g.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-secondary/10 font-mono text-[11px] text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right - paragraph */}
            <div className="lg:col-span-2 flex items-center">
              <div>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                Ce qui me distingue ? Je ne suis pas seulement designer, ni seulement consultante technique.{" "}
                  <span className="text-foreground font-semibold">Je combine UX, produit, data et automatisation</span> —
                  pour créer des solutions digitales complètes qui génèrent des résultats mesurables pour vos projets.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
