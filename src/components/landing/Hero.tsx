"use client"

import { useState } from "react"

const categories = [
  { icon: "🔧", label: "Υδραυλικός" },
  { icon: "⚡", label: "Ηλεκτρολόγος" },
  { icon: "❄️", label: "Ψυκτικός" },
  { icon: "🖌️", label: "Βαφέας" },
  { icon: "🔨", label: "Ξυλουργός" },
  { icon: "🏗️", label: "Κτίστης" },
  { icon: "🔑", label: "Κλειδαράς" },
  { icon: "🪚", label: "Πλακάς" },
]

const stats = [
  { value: "8.500+", label: "Τεχνίτες" },
  { value: "42.000+", label: "Κριτικές" },
  { value: "€0", label: "Για τον πελάτη" },
  { value: "4.9★", label: "Μέση Αξιολόγηση" },
]

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState("Υδραυλικός")
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-black border-b border-white/5">

      {/* Badge */}
      <div className="flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 mb-8">
        <span className="text-green-400 text-xs font-semibold tracking-wide">
          ✓ Όχι τυχαίος τεχνίτης — ο τεχνίτης που διάλεξες εσύ
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-center font-extrabold tracking-tight leading-[1.05] text-5xl md:text-7xl lg:text-8xl text-white max-w-4xl mb-5">
        Επέλεξε τον{" "}
        <span className="text-zinc-400">τεχνίτη σου.</span>
      </h1>

      {/* Subtext */}
      <p className="text-center text-zinc-500 text-lg max-w-xl leading-relaxed mb-12">
        Profiles, κριτικές, φωτογραφίες, τιμές. Κλείνεις ραντεβού με τον
        άνθρωπο που εμπιστεύεσαι — όχι με όποιον στείλει ο αλγόριθμος.
      </p>

      {/* Search bar */}
      <div className="flex items-center gap-2 w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2 mb-10 shadow-2xl">
        <span className="text-lg">🔍</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Τι χρειάζεσαι; (π.χ. Υδραυλικός)"
          className="flex-1 bg-transparent outline-none text-white placeholder:text-zinc-600 text-sm"
        />
        <div className="w-px h-5 bg-zinc-700" />
        <span className="text-lg ml-2">📍</span>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Περιοχή"
          className="w-32 bg-transparent outline-none text-white placeholder:text-zinc-600 text-sm"
        />
        <button className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap">
          Αναζήτηση
        </button>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2 justify-center max-w-2xl mb-16">
        {categories.map((c) => (
          <button
            key={c.label}
            onClick={() => setActiveCategory(c.label)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-all select-none ${
              activeCategory === c.label
                ? "bg-white text-black border-white"
                : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300"
            }`}
          >
            <span>{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-12 flex-wrap justify-center">
        {stats.map((s) => (
          <div key={s.label} className="text-center select-none">
            <div className="text-2xl font-extrabold text-white tracking-tight">{s.value}</div>
            <div className="text-xs text-zinc-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}