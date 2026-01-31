import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      {/* <div style={{ background: "red", width: "100%", height: "100px" }}></div> */}
      <Navbar />
      <Hero />

      <section className="section container">
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Projects</h2>

        <ProjectCard
          title="Project Name"
          text="I created this personal project..."
          image="/p1.jpg"
        />

        <ProjectCard
          title="Project Name"
          text="What was your role..."
          image="/p2.jpg"
          reverse
        />

        <ProjectCard
          title="Project Name"
          text="You can also add description..."
          image="/p3.jpg"
        />
      </section>

      <Footer />
    </>
  )
}
