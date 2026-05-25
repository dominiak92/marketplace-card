import { Header } from "@/components/Header"
import { Hero } from "@/components/sections/Hero"
import { Offer } from "@/components/sections/Categories"
import { WhyUs } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"

function DarkToLight() {
  return <div className="h-8 bg-gradient-to-b from-zinc-950 to-white" />
}

function LightToDark() {
  return <div className="h-8 bg-gradient-to-b from-white to-zinc-950" />
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
