export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-28 bg-black border-t border-white/5 text-center">
      <div className="max-w-2xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 mb-8">
          <span className="text-green-400 text-xs font-semibold tracking-wide">
            Ξεκίνα Σήμερα · Δωρεάν
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white mb-5 select-none">
          Τέλος στο{" "}
          <br />
          <span className="line-through text-zinc-700">
            "δεν ξέρω κανέναν".
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          8.500+ επαληθευμένοι τεχνίτες σε όλη την Ελλάδα. Βρες τον άνθρωπο
          που εμπιστεύεσαι, κλείσε ραντεβού online.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-white text-black font-bold text-base px-8 py-3.5 rounded-xl hover:bg-zinc-200 transition-colors">
            Βρες Τεχνίτη Τώρα →
          </button>
          <button className="bg-transparent text-white font-semibold text-base px-8 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-colors">
            Εγγραφή ως Τεχνίτης
          </button>
        </div>

        {/* Fine print */}
        <p className="text-zinc-800 text-xs mt-8 select-none">
          100% Δωρεάν για πελάτες · GDPR Compliant · Made in Thessaloniki 🇬🇷
        </p>

      </div>
    </section>
  )
}