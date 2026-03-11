"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16 transition-all ${
      scrolled ? "bg-black/95 backdrop-blur border-b border-white/5" : "bg-transparent"
    }`}>
      <div className="flex items-center gap-2">
        <span className="text-xl">🔧</span>
        <span className="text-xl font-bold tracking-tight text-white">
          Mastoras<span className="font-light text-zinc-500">.com</span>
        </span>
      </div>
      <div className="flex items-center gap-8">
        <a href="#how" className="text-sm text-zinc-500 hover:text-white transition-colors">Πώς λειτουργεί</a>
        <a href="#pros" className="text-sm text-zinc-500 hover:text-white transition-colors">Για Τεχνίτες</a>
        <button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-xl hover:bg-zinc-200 transition-colors">
          Εγγραφή Δωρεάν
        </button>
      </div>
    </nav>
  )
}