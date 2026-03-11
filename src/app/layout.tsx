import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mastoras.com",
  description: "Βρες επαληθευμένο τεχνίτη στην περιοχή σου",
}

import DisableDevTools from "@/components/DisableDevTools"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className="bg-black">
        <DisableDevTools />
        {children}
      </body>
    </html>
  )
}