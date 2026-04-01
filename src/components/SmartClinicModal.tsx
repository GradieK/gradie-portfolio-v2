import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SMART_CLINIC_SCREENS } from "@/constants/smartClinic";

interface SmartClinicModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SmartClinicModal({ open, onClose }: SmartClinicModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-card overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <div className="max-w-[720px] mx-auto px-6 py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">Case Study</p>
            <h1 className="text-4xl sm:text-5xl font-serif mb-4">Smart Clinic</h1>
            <p className="font-sans text-lg text-muted-foreground mb-12">
              Plateforme de prise de rendez-vous médicaux — web & mobile
            </p>

            <section className="mb-16">
              <h2 className="font-serif text-2xl mb-4">Le contexte</h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Smart Clinic est un projet personnel. Il naît d&apos;une problématique réelle
                observée dans le secteur de la santé en République Démocratique du Congo.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Le problème</h2>

              <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                {["Patient à l'hôpital", "File d'attente à la réception", "Demander la disponibilité du médecin", "Pas disponible & retour à la maison"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="px-4 py-3 rounded-2xl bg-destructive/10 border border-destructive/20 font-sans text-sm text-center">
                      {step}
                    </div>
                    {i < 2 && <span className="text-destructive font-bold hidden sm:block">→</span>}
                  </div>
                ))}
                <span className="text-destructive text-2xl font-bold ml-2">✕</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                {["Ouvrir Smart Clinic", "Trouver un spécialiste", "Choisir un créneau", "Confirmation & paiement"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="px-4 py-3 rounded-2xl bg-green-500/10 border border-green-500/20 font-sans text-sm text-center">
                      {step}
                    </div>
                    {i < 3 && <span className="text-green-600 font-bold hidden sm:block">→</span>}
                  </div>
                ))}
                <span className="text-green-600 text-2xl font-bold ml-2">✓</span>
              </div>

              <p className="font-sans text-muted-foreground leading-relaxed">
                Un parcours médical épuisant avant même la consultation.
                Comment permettre à un patient de trouver le bon médecin,
                confirmer sa disponibilité, réserver son créneau et payer — depuis
                son téléphone, en moins de 3 minutes ?
              </p>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Les utilisateurs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-background border border-border">
                  <p className="font-sans font-semibold mb-1">Marie, 34 ans</p>
                  <p className="font-mono text-xs text-muted-foreground mb-3">Maman et employée à Kinshasa</p>
                  <p className="font-sans text-sm text-muted-foreground italic">
                    « Je ne peux pas perdre une matinée entière pour prendre un rendez-vous »
                  </p>
                  <p className="font-sans text-sm text-muted-foreground mt-3">
                    Objectifs : trouver un pédiatre vite, savoir quand venir, payer en avance.
                    Frustrations : pas de confirmation écrite, temps perdu.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-background border border-border">
                  <p className="font-sans font-semibold mb-1">Jean, 52 ans</p>
                  <p className="font-mono text-xs text-muted-foreground mb-3">Chef d&apos;entreprise</p>
                  <p className="font-sans text-sm text-muted-foreground italic">
                    « Je dois tout laisser tomber et me rendre à l&apos;hôpital pour prendre rendez-vous »
                  </p>
                  <p className="font-sans text-sm text-muted-foreground mt-3">
                    Objectifs : trouver un spécialiste rapidement, savoir quand venir, payer en avance.
                    Frustrations : pas de confirmation écrite, temps perdu.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Mon processus</h2>
              <div className="flex flex-wrap items-center gap-2">
                {["Recherche", "Wireframes", "Design UI", "Prototype", "Tests utilisateurs"].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-xs font-medium">
                      {step}
                    </div>
                    {i < 4 && <span className="text-muted-foreground">→</span>}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Décisions de design clés</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  "Parcours en 4 étapes pour le patient — chaque étape supplémentaire = abandon",
                  "Les spécialités médicales ne doivent pas nécessiter de lecture",
                  "Disponibilité visible dès la liste, sans ouvrir un profil pour savoir si le médecin est libre",
                  "Confirmation SMS/WhatsApp — le patient reçoit un récapitulatif sans application nécessaire",
                  "Palette bleue + vert confirmation — codes couleurs universels",
                  "Boutons larges, texte grand — confort en situation de stress",
                ].map((d, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-background border border-border">
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-2xl mb-6">Les maquettes</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
                {SMART_CLINIC_SCREENS.map((screen) => (
                  <div
                    key={screen.src}
                    className="flex flex-col items-center gap-3 shrink-0 w-[min(72vw,260px)] snap-center"
                  >
                    <div className="rounded-[1.75rem] overflow-hidden border border-border shadow-lg bg-card w-full">
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground text-center px-1">{screen.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-serif text-2xl mb-4">Résultats & apprentissages</h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Ce que j&apos;aurais fait avec plus de temps : tests utilisateurs terrain
                avec 5 profils réels, itération sur le mode hors-ligne partiel.
              </p>
            </section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
