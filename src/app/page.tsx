import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import ProGrid from "@/components/landing/ProGrid"
import HowItWorks from "@/components/landing/HowItWorks"
import ForPros from "@/components/landing/ForPros"
import CTA from "@/components/landing/CTA"
import Footer from "@/components/landing/Footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ProGrid />
      <HowItWorks />
      <ForPros />
      <CTA />
      <Footer />
    </main>
  )
}