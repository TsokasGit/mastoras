"use client"

import { useState } from "react"
import type { Pro } from "@/types"

type Props = {
  pro: Pro
  featured?: boolean
}

export default function ProCard({ pro, featured = false }: Props) {
  const [hovered, setHovered] = useState(false)

  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col rounded-2xl border bg-zinc-900 overflow-hidden transition-all duration-200 cursor-pointer select-none
        ${hovered ? "border-white -translate-y-1 shadow-2xl shadow-black/60" : "border-zinc-800"}
        ${featured ? "border-zinc-600" : ""}
      `}
    >

      {/* Featured banner */}
      {featured && (
        <div className="bg-white text-black text-xs font-semibold text-center py-1.5 tracking-widest uppercase">
          ✦ Προτεινόμενος
        </div>
      )}

      {/* Portfolio strip */}
      <div
        className="h-24 flex items-center justify-center gap-2 px-3 border-b border-zinc-800 relative"
        style={{ background: `${pro.avatarColor}15` }}
      >
        {["🔧", "🏠", "⚙️", "✅"].map((emoji, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-lg flex-shrink-0 ${i === 0 ? "w-28 h-16 text-3xl" : "w-16 h-14 text-xl"}`}
            style={{ background: `${pro.avatarColor}${20 + i * 10}` }}
          >
            {emoji}
          </div>
        ))}

        {/* Availability badge */}
        <div className={`absolute top-2 right-2 text-xs font-semibold px-2.5 py-1 rounded-full ${
          pro.available
            ? "bg-green-950 text-green-400 border border-green-800"
            : "bg-zinc-800 text-zinc-500 border border-zinc-700"
        }`}>
          {pro.available ? "● Διαθέσιμος" : "○ Απασχολημένος"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ background: pro.avatarColor }}
            >
              {pro.avatarInitial}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{pro.name}</div>
              <div className="text-zinc-500 text-xs">{pro.trade} · {pro.location}</div>
            </div>
          </div>

          {/* Price */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-center flex-shrink-0">
            <span className="text-white font-bold text-sm">€{pro.pricePerHour}</span>
            <span className="text-zinc-500 text-xs">/ώρα</span>
          </div>
        </div>

        {/* Stars + rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {stars.map((s) => (
              <span key={s} className={`text-xs ${s <= Math.round(pro.rating) ? "text-amber-400" : "text-zinc-700"}`}>
                ★
              </span>
            ))}
          </div>
          <span className="text-white text-sm font-bold">{pro.rating}</span>
          <span className="text-zinc-600 text-xs">({pro.reviewCount} κριτικές)</span>

          {/* Badge */}
          {pro.badge && (
            <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-green-950 text-green-400 border border-green-800">
              {pro.badge}
            </span>
          )}
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pro.specialties.map((s: string) => (
            <span key={s} className="text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 px-2.5 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-zinc-800 rounded-xl p-3">
            <div className="text-zinc-500 text-xs mb-1">Απόκριση</div>
            <div className="text-white text-sm font-semibold">{pro.responseTime}</div>
          </div>
          <div className="bg-zinc-800 rounded-xl p-3">
            <div className="text-zinc-500 text-xs mb-1">Ολοκλήρωση</div>
            <div className="text-white text-sm font-semibold">{pro.completionRate}</div>
          </div>
        </div>

        {/* CTA button */}
        <button
          className={`w-full py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200
            ${hovered
              ? "bg-white text-black border-white"
              : "bg-transparent text-white border-zinc-700 hover:border-zinc-500"
            }
          `}
        >
          Κλείσε Ραντεβού →
        </button>

      </div>
    </div>
  )
}