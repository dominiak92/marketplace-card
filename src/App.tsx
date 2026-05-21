import { Header } from "@/components/Header"
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { Categories } from "@/components/sections/Categories"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
