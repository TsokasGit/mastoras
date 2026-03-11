const perks = [
  "Profile με φωτογραφίες εργασιών",
  "Online ημερολόγιο & booking",
  "Πληρωμή εγγυημένα μέσω escrow",
  "Dashboard με αναλυτικά εισοδήματος",
]

const dashboardStats = [
  { label: "Εισόδημα Μαρτίου", value: "€3.240", trend: "+18%", trendUp: true },
  { label: "Ραντεβού Εβδομάδας", value: "11", trend: "3 σήμερα", trendUp: true },
  { label: "Profile Views", value: "847", trend: "+42%", trendUp: true },
  { label: "Αξιολόγηση", value: "4.97 ⭐", trend: "143 κριτ.", trendUp: true },
]

const upcomingBookings = [
  { time: "10:00", client: "Σοφία Ν.", job: "Διαρροή κουζίνας", area: "Χαριλάου" },
  { time: "14:30", client: "Μάριος Π.", job: "Αντικατάσταση βρύσης", area: "Τούμπα" },
]

export default function ForPros() {
  return (
    <section id="pros" className="px-6 md:px-12 py-20 bg-zinc-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — copy */}
        <div>
          <p className="text-xs font-semibold text-zinc-600 tracking-widest uppercase mb-4">
            Για Τεχνίτες
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-5">
            Χτίσε τη φήμη σου{" "}
            <span className="text-zinc-500">online.</span>
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed mb-8">
            Δωρεάν εγγραφή. Ανεβάζεις portfolio, συλλέγεις κριτικές, και
            πελάτες σε βρίσκουν οι ίδιοι. Πληρώνεις μόνο 8% όταν κλείσεις
            δουλειά.
          </p>

          {/* Perks */}
          <ul className="flex flex-col gap-3 mb-10">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 flex-shrink-0">
                  ✓
                </div>
                <span className="text-zinc-300 text-sm">{perk}</span>
              </li>
            ))}
          </ul>

          <button className="bg-white text-black font-bold text-sm px-7 py-3 rounded-xl hover:bg-zinc-200 transition-colors">
            Εγγραφή ως Τεχνίτης — Δωρεάν →
          </button>
        </div>

        {/* Right — mock dashboard */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 select-none">

          {/* Dashboard header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs text-zinc-600 mb-1">Νίκος Αναστασίου · Υδραυλικός</p>
              <h3 className="text-white font-extrabold text-xl tracking-tight">Dashboard</h3>
            </div>
            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              Ν
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {dashboardStats.map((stat) => (
              <div key={stat.label} className="bg-zinc-800 rounded-xl p-4">
                <p className="text-zinc-600 text-xs mb-2">{stat.label}</p>
                <p className="text-white font-extrabold text-xl tracking-tight mb-1">{stat.value}</p>
                <p className="text-green-400 text-xs font-semibold">{stat.trend}</p>
              </div>
            ))}
          </div>

          {/* Upcoming bookings */}
          <div className="bg-zinc-800 rounded-xl p-4">
            <p className="text-zinc-600 text-xs uppercase tracking-widest mb-3">
              Επόμενα Ραντεβού
            </p>
            <div className="flex flex-col gap-3">
              {upcomingBookings.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 pb-3 border-b border-zinc-700 last:border-0 last:pb-0"
                >
                  <span className="text-zinc-500 font-bold text-sm w-10 flex-shrink-0">{b.time}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{b.client} · {b.job}</p>
                    <p className="text-zinc-600 text-xs">📍 {b.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}