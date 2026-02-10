import Navbar from "../../core/components/Navbar"
import Hero from "./components/Hero"
import Footer from "../../core/components/Footer"
import CreativeSkills from "./components/CreativeSkills"
import MyWork from "./components/MyWork"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CreativeSkills />
      <MyWork />
      <Footer />
    </>
  )
}
