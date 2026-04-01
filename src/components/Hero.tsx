import { motion } from "framer-motion";

export default function Hero() {
  const words = "Je conçois des produits digitaux qui ont du sens.".split(" ");

  return (
    <section className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6"
            >
              UX Product Designer · Consultante Solutions Digitales
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-balance mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-muted-foreground font-sans text-lg leading-relaxed max-w-xl mb-8"
            >
              Je pilote des produits
              de A à Z — de la recherche utilisateur jusqu'à la livraison — avec une
              approche qui réconcilie les besoins métier, la technique et l'humain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <a
                href="#projets"
                className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm hover:scale-[1.02] hover:shadow-lg transition-all"
              >
                Voir mes projets
              </a>
              <a
                href="/CVGRADIEKAMBA-PM.pdf"
                download="CVGRADIEKAMBA-PM.pdf"
                className="px-7 py-3.5 rounded-full border-2 border-foreground/20 text-foreground font-sans font-semibold text-sm hover:border-primary hover:text-primary transition-all"
              >
                Télécharger mon CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border font-sans text-sm text-muted-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Disponible pour missions freelance · Remote & Kinshasa
            </motion.div>
          </div>

          {/* Right column - abstract composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-6 xl:col-span-5 hidden lg:flex items-center justify-center relative"
          >
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />

            {/* Teal circle */}
            <div className="absolute w-80 h-80 rounded-full bg-secondary/10" />

            {/* Terracotta rotated square */}
            <div className="absolute w-48 h-48 bg-primary/15 rotate-[15deg] rounded-3xl translate-x-16 -translate-y-8" />

            {/* Small teal square */}
            <div className="absolute w-24 h-24 bg-secondary/20 rounded-2xl -translate-x-24 translate-y-20 -rotate-12" />

            {/* Floating card */}
            <div className="relative z-10 bg-card/80 backdrop-blur-xl p-6 rounded-2xl shadow-soft max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold font-sans">✦</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Track Record</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  4 plateformes livrées
                </div>
                <div className="flex items-center gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Oracle HRMS Canada
                </div>
                <div className="flex items-center gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  5+ ans Agile
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
