import { motion } from "framer-motion"
import { Header } from "@/components/Header"
import { Hero } from "@/components/sections/Hero"
import { Offer } from "@/components/sections/Categories"
import { Stats } from "@/components/sections/Stats"
import { WhyUs } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"

function DarkToLight() {
  return (
    <div className="relative h-12 bg-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-zinc-950"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 100%)" }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

function LightToDark() {
  return (
    <div className="relative h-12 bg-zinc-950 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 45%)" }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
        <Stats />
        <WhyUs />
        <LightToDark />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
