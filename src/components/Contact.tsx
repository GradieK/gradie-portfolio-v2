import { useState } from "react";
import { Mail, MapPin, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const helpCards = [
  "Vous avez une idée de produit mais ne savez pas par où commencer",
  "Votre interface existe mais vos utilisateurs se perdent",
  "Vous voulez implémenter ou optimiser un produit digital(web & Mobile)",
];

const missionTypes = [
  "Product Owner",
  "UX Design",
  "conception site web",
  "Analyse fonctionnelle ERP",
  "Data Analytics",
  "Automatisation",
  "Autre",
];

export default function Contact() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", mission: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = [
      "Bonjour Gradie,",
      "",
      "Je vous contacte depuis votre portfolio.",
      `Nom: ${form.name}`,
      `Email: ${form.email}`,
      `Type de mission: ${form.mission}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/243993650147?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6 scroll-fade-up" ref={ref}>
          <h2 className="text-3xl sm:text-4xl font-serif mb-2">Travaillons ensemble</h2>
          <p className="font-sans text-muted-foreground mb-12">
            Disponible pour missions freelance — à distance ou sur site à Kinshasa
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-sans text-sm font-medium mb-1.5 block">Nom complet</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium mb-1.5 block">Type de mission</label>
                <select
                  value={form.mission}
                  onChange={(e) => setForm({ ...form, mission: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                  required
                >
                  <option value="">Sélectionner...</option>
                  {missionTypes.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-sans text-sm font-medium mb-1.5 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm hover:scale-[1.02] hover:shadow-lg transition-all"
              >
                Envoyer →
              </button>
            </form>

            {/* Right - info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-sans text-sm">
                  <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <a href="mailto:gradie.kamba07@gmail.com" className="hover:text-primary transition-colors">
                    gradie.kamba07@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  Kinshasa, République Démocratique du Congo
                </div>
                <div className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <Globe className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  Disponible à distance — monde entier
                </div>
                <div className="flex items-center gap-2 font-sans text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Statut: Disponible pour nouvelles missions
                </div>
              </div>

              <div>
                <p className="font-sans text-sm font-semibold mb-4">Je peux vous aider si...</p>
                <div className="space-y-3">
                  {helpCards.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border"
                    >
                      <span className="text-primary mt-0.5">→</span>
                      <p className="font-sans text-sm text-muted-foreground">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </div>
      </div>
    </section>
  );
}
