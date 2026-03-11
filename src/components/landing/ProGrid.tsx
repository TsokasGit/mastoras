import ProCard from "@/components/pro/ProCard"
import type { Pro } from "@/types"

const MOCK_PROS: Pro[] = [
  {
    id: "1",
    name: "Νίκος Αναστασίου",
    trade: "Υδραυλικός",
    location: "Χαριλάου, Θεσσαλονίκη",
    rating: 4.97,
    reviewCount: 143,
    pricePerHour: 35,
    badge: "Top Pro",
    available: true,
    specialties: ["Βλάβες", "Εγκαταστάσεις", "Αποφράξεις"],
    responseTime: "~20 λεπτά",
    completionRate: "98%",
    avatarInitial: "Ν",
    avatarColor: "#2563eb",
  },
  {
    id: "2",
    name: "Δήμος Καραγιάννης",
    trade: "Ηλεκτρολόγος",
    location: "Τούμπα, Θεσσαλονίκη",
    rating: 4.91,
    reviewCount: 89,
    pricePerHour: 40,
    badge: "Verified",
    available: true,
    specialties: ["Πίνακες", "Ρευματοδότες", "Φωτισμός"],
    responseTime: "~45 λεπτά",
    completionRate: "96%",
    avatarInitial: "Δ",
    avatarColor: "#16a34a",
  },
  {
    id: "3",
    name: "Κώστας Παπαδόπουλος",
    trade: "Ψυκτικός",
    location: "Καλαμαριά, Θεσσαλονίκη",
    rating: 4.88,
    reviewCount: 62,
    pricePerHour: 45,
    badge: "Verified",
    available: false,
    specialties: ["Κλιματισμός", "Ψυγεία", "Αντλίες Θερμότητας"],
    responseTime: "~1 ώρα",
    completionRate: "95%",
    avatarInitial: "Κ",
    avatarColor: "#9333ea",
  },
]

export default function ProGrid() {
  return (
    <section id="pros" className="px-6 md:px-12 py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-zinc-600 tracking-widest uppercase mb-2">
              Κορυφαίοι Επαγγελματίες · Θεσσαλονίκη
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Επίλεξε τον{" "}
              <span className="underline underline-offset-4 decoration-zinc-600">
                άνθρωπό σου.
              </span>
            </h2>
          </div>
          <a
            href="/search"
            className="text-sm font-semibold text-white border-b border-white pb-0.5 hover:text-zinc-400 hover:border-zinc-400 transition-colors whitespace-nowrap hidden md:block"
          >
            Δες όλους →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOCK_PROS.map((pro, i) => (
            <ProCard key={pro.id} pro={pro} featured={i === 0} />
          ))}
        </div>

        {/* Mobile "see all" link */}
        <div className="mt-8 text-center md:hidden">
          <a href="/search" className="text-sm font-semibold text-white border-b border-white pb-0.5">
            Δες όλους →
          </a>
        </div>

      </div>
    </section>
  )
}