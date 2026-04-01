import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const entries = [
  {
    period: "2022 → Présent",
    company: "Quantum Vertex / Insse",
    role: "Product Owner · Chargée de projet · Développeuse ERP",
    description: "Pilotage de 6+ produits digitaux. Conception UX, rédaction PRD, sprints Agile, personnalisation Oracle EBS pour clients Canada/RDC.",
    tags: ["Oracle EBS", "Figma", "Azure DevOps", "Agile"],
  },
  {
    period: "2021–2022",
    company: "Quantum Vertex / Insse",
    role: "Analyste Fonctionnelle & Développeuse OAF",
    description: "Personnalisation Oracle EBS pour clients gouvernementaux canadiens. Modules HRMS, iProcurement, Fixed Assets.",
    tags: ["Oracle OAF", "PL/SQL", "MD050", "BI Publisher"],
  },
  {
    period: "2019–2021",
    company: "EmaVision",
    role: "Analyste Programmeuse Web & Oracle",
    description: "Développement de modules Oracle EBS internes. Refonte interfaces RH et financières. Documentation fonctionnelle complète.",
    tags: ["Oracle EBS", "OAF", "SQL", "PLSQL"],
  },
  {
    period: "2020–2021",
    company: "Congolia (CMCT)",
    role: "Assistante Project Manager",
    description: "Gestion de projets digitaux et stratégie de communication pour clients.",
    tags: ["Monday", "Office 365", "Google Apps"],
  },
];

const education = [
  { title: "Licence en Sciences Informatiques", school: "Université de Kinshasa", year: "2020" },
  { title: "Graduat Maths & Informatique", school: "Université de Kinshasa", year: "2018" },
];

const certs = [
  "🏅 Google Data Analytics — Coursera 2025",
  "🏅 Google UX Design — Coursera 2024",
  "🏅 Product Manager — Udemy 2022",
  "🏅 Oracle OAF & EBS Implementers 2021",
];

export default function Timeline() {
  const ref = useScrollAnimation();

  return (
    <section id="parcours" className="py-24">
      <div className="container mx-auto px-6 scroll-fade-up" ref={ref}>
          <h2 className="text-3xl sm:text-4xl font-serif mb-16">Mon parcours</h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

            <div className="space-y-12">
              {entries.map((e, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="relative flex">
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${isLeft ? "lg:pr-12" : "lg:pl-12 lg:ml-auto"}`}>
                      <div className="bg-card p-6 rounded-3xl border border-border">
                        <p className="font-mono text-xs text-primary mb-1">{e.period}</p>
                        <p className="font-sans text-sm text-muted-foreground mb-1">{e.company}</p>
                        <h3 className="font-serif text-lg mb-2">{e.role}</h3>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">{e.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {e.tags.map((t) => (
                            <span key={t} className="px-2.5 py-1 rounded-full bg-muted font-mono text-[11px] text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <h3 className="font-serif text-2xl mb-6">Formation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {education.map((ed) => (
                <div key={ed.title} className="bg-card p-6 rounded-3xl border border-border">
                  <h4 className="font-serif text-lg mb-1">{ed.title}</h4>
                  <p className="font-sans text-sm text-muted-foreground">{ed.school}</p>
                  <p className="font-mono text-xs text-primary mt-2">{ed.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl mb-6">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {certs.map((c) => (
                <div key={c} className="px-4 py-2.5 rounded-full bg-card border border-border font-sans text-sm">
                  {c}
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
