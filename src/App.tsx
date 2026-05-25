import { Header } from "@/components/Header"
import { Hero } from "@/components/sections/Hero"
import { Offer } from "@/components/sections/Categories"
import { WhyUs } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"

function DarkToLight() {
  return (
    <div className="relative h-12 bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-zinc-950"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 100%)" }}
      />
    </div>
  )
}

function LightToDark() {
  return (
    <div className="relative h-12 bg-zinc-950 overflow-hidden">
      <div
        className="absolute inset-0 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 45%)" }}
      />
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offer />
        <DarkToLight />
        <WhyUs />
        <LightToDark />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
