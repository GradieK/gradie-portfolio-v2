import { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SmartClinicModal from "./SmartClinicModal";
import { SMART_CLINIC_SCREENS } from "@/constants/smartClinic";

const filters = ["Tous", "UX Design", "Product Owner", "ERP", "Data", "Automatisation"];

interface Project {
  id: string;
  tag: string;
  icon: string;
  title: string;
  type: string;
  description: string;
  tools: string[];
  note?: string;
  cta?: string;
  nda?: boolean;
  concept?: boolean;
  categories: string[];
}

const projects: Project[] = [
  {
    id: "fpay",
    tag: "Expérience professionnelle · NDA",
    icon: "🏥",
    title: "FPay",
    type: "Product Owner · Fintech Santé",
    description: "Solution de paiement électronique des factures pour établissements de santé. Pilotage complet : PRD, roadmap, sprints Agile, coordination équipe, livraison.",
    tools: ["Azure DevOps", "Figma", "Agile/Scrum", "MS Project"],
    note: "Détails disponibles en entretien — projet sous NDA",
    nda: true,
    categories: ["Product Owner"],
  },
  {
    id: "quiz",
    tag: "Expérience professionnelle · NDA",
    icon: "📋",
    title: "Quiz EmaVision",
    type: "Product Owner · SaaS Éducation",
    description: "Plateforme SaaS d'examens en ligne sécurisés. Conception du système d'examens, banques de questions, supervision en temps réel.",
    tools: ["Azure DevOps", "Figma", "Excalidraw", "Scrum"],
    note: "Détails disponibles en entretien — projet sous NDA",
    nda: true,
    categories: ["Product Owner"],
  },
  {
    id: "flowhr",
    tag: "Concept personnel",
    icon: "🏢",
    title: "FlowHR",
    type: "UX Design · SaaS",
    description: "Dashboard RH simplifié pour PME africaines. Gestion des congés, onboarding, fiches employés — sans infrastructure lourde.",
    tools: ["Figma", "Excalidraw", "Agile"],
    cta: "Voir les maquettes →",
    concept: true,
    categories: ["UX Design"],
  },
  {
    id: "oracle",
    tag: "Expérience professionnelle",
    icon: "⚙️",
    title: "Oracle HRMS — Ministère canadien",
    type: "Analyse Fonctionnelle · ERP",
    description: "Personnalisation Oracle EBS R12 pour le Ministère canadien de la cybersécurité. Spécifications MD050, développement OAF, tests TE020/030, intégration PL/SQL.",
    tools: ["Oracle EBS R12", "OAF", "PL/SQL", "BI Publisher", "Azure"],
    note: "Client gouvernemental — détails sur demande",
    categories: ["ERP"],
  },
  {
    id: "sme",
    tag: "Concept personnel",
    icon: "📊",
    title: "SME Pulse",
    type: "Data Analytics · Dashboard",
    description: "Tableau de bord de santé financière pour dirigeants de PME. KPIs en temps réel, alertes budgétaires, visualisations actionnables.",
    tools: ["Python", "Pandas", "Plotly", "SQL"],
    cta: "Voir le dashboard →",
    concept: true,
    categories: ["Data"],
  },
  {
    id: "clientbot",
    tag: "Concept personnel",
    icon: "⚡",
    title: "ClientBot",
    type: "Automatisation · N8N",
    description: "Workflow d'onboarding client 100% automatisé : formulaire → email de bienvenue → ticket DevOps → notification Slack → Google Doc brief.",
    tools: ["N8N", "Gmail", "Azure DevOps", "Slack", "Airtable"],
    cta: "Voir le workflow →",
    concept: true,
    categories: ["Automatisation"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useScrollAnimation();

  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <section id="projets" className="py-24">
        <div className="container mx-auto px-6 scroll-fade-up" ref={ref}>
            <h2 className="text-3xl sm:text-4xl font-serif mb-2">Mes projets</h2>
            <p className="font-sans text-muted-foreground mb-8">Projets professionnels et concepts personnels</p>

            {/* Filter bar */}
            <div className="flex flex-wrap gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
                    filter === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Featured project - Smart Clinic */}
            {(filter === "Tous" || filter === "UX Design") && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-[2rem] border border-border p-8 sm:p-10 mb-8 hover:shadow-hover transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 font-mono text-xs text-primary mb-4">
                      ✦ Projet phare · Concept personnel
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl mb-2">Smart Clinic</h3>
                    <p className="font-mono text-xs text-muted-foreground mb-4">UX Design · App Mobile</p>
                    <p className="font-sans text-lg text-foreground mb-3">
                      Trouver un spécialiste, réserver un créneau et payer — depuis son téléphone.
                    </p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                      En RDC, prendre rendez-vous chez un médecin implique souvent déplacements,
                      files d&apos;attente et incertitude sur les disponibilités.
                      Smart Clinic est une application de prise de rendez-vous médicaux avec
                      recherche par spécialité, téléconsultation et paiement (Mobile Money, carte),
                      pour fluidifier le parcours patient.
                    </p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm hover:scale-[1.02] hover:shadow-lg transition-all"
                    >
                      Lire le case study complet <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {["Figma", "UX Research", "Prototypage", "Mobile Money", "Agile"].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-secondary/10 font-mono text-xs text-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                    {SMART_CLINIC_SCREENS.map((screen) => (
                      <div key={screen.src} className="flex flex-col items-center gap-2 shrink-0 w-[min(30vw,180px)] sm:w-[200px]">
                        <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-card w-full">
                          <img
                            src={screen.src}
                            alt={screen.alt}
                            className="w-full h-auto block"
                            loading="lazy"
                          />
                        </div>
                        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
                          {screen.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="bg-card rounded-[2rem] border border-border p-7 hover:-translate-y-1 hover:shadow-hover transition-all duration-300 group"
                  >
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full font-mono text-xs ${
                        p.concept ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"
                      }`}>
                        {p.tag}
                      </span>
                      {p.nda && <Lock className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />}
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <h3 className="font-serif text-xl">{p.title}</h3>
                        <p className="font-mono text-xs text-muted-foreground">{p.type}</p>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tools.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-muted font-mono text-[11px] text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.note && (
                      <p className="font-sans text-xs text-muted-foreground italic">{p.note}</p>
                    )}

                    {p.cta && (
                      <button className="font-sans text-sm text-primary font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1">
                        {p.cta}
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
        </div>
        </div>
      </section>

      <SmartClinicModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
