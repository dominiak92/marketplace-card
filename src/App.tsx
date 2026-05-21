import { Header } from "@/components/Header"
import { Hero } from "@/components/sections/Hero"
import { Brands } from "@/components/sections/Stats"
import { Offer } from "@/components/sections/Categories"
import { WhyUs } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Offer />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
