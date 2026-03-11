const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Ψάξε & Φιλτράρισε",
    desc: "Επέλεξε κατηγορία, περιοχή, και ημερομηνία. Βλέπεις profiles με φωτογραφίες, κριτικές, και τιμές αμέσως.",
  },
  {
    number: "02",
    icon: "⭐",
    title: "Διάβασε Κριτικές",
    desc: "Πραγματικές αξιολογήσεις από επαληθευμένους πελάτες. Βλέπεις φωτογραφίες από παλιές δουλειές του.",
  },
  {
    number: "03",
    icon: "📅",
    title: "Κλείσε Online",
    desc: "Διάλεξε ώρα από το ημερολόγιο του τεχνίτη. Επιβεβαίωση άμεσα, χωρίς τηλεφωνήματα.",
  },
  {
    number: "04",
    icon: "🔒",
    title: "Πλήρωσε Ασφαλώς",
    desc: "Escrow: τα χρήματα κρατιούνται μέχρι να εγκρίνεις τη δουλειά. Μηδέν ρίσκο.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 md:px-12 py-20 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-zinc-600 tracking-widest uppercase mb-3">
            Πώς Λειτουργεί
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            4 βήματα,{" "}
            <span className="text-zinc-500">τελείως απλά.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-black p-8 flex flex-col gap-5 group hover:bg-zinc-950 transition-colors"
            >
              {/* Big background number */}
              <span className="absolute top-6 right-6 text-5xl font-black text-zinc-900 leading-none select-none group-hover:text-zinc-800 transition-colors">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:border-zinc-600 transition-colors">
                {step.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}