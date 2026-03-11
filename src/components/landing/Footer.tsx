const links = {
  Πλατφόρμα: ["Πώς λειτουργεί", "Αναζήτηση", "Για Τεχνίτες", "Τιμολόγηση"],
  Υποστήριξη: ["Κέντρο Βοήθειας", "Επικοινωνία", "Αναφορά Προβλήματος"],
  Νομικά: ["Όροι Χρήσης", "Πολιτική Απορρήτου", "Cookies"],
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 px-6 md:px-12 py-14 select-none">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm">
                🔧
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">
                Mastoras<span className="font-light text-zinc-600">.com</span>
              </span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
              Η πλατφόρμα που συνδέει Έλληνες με επαληθευμένους τεχνίτες στην περιοχή τους.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white font-semibold text-sm mb-4">{category}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-600 text-sm hover:text-zinc-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-700 text-xs">
            © 2026 Mastoras.com · Thessaloniki, Greece
          </p>
          <p className="text-zinc-700 text-xs">
            Made with ❤️ in Θεσσαλονίκη
          </p>
        </div>

      </div>
    </footer>
  )
}