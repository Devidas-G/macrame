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

// Example of how to use an environment variable for API calls in the future, if needed.
// const API_URL = import.meta.env.VITE_API_URL;

  // const handleProjectsClick = async () => {
  //   try {
  //     const res = await fetch(`${API_URL}`, {
  //       method: "GET",
  //       credentials: "include", // keep if using cookies/signed requests
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await res.text(); // your root returns text
  //     console.log("API Response:", data);
  //     alert(`API says: ${data}`);
  //   } catch (error) {
  //     console.error("API Error:", error);
  //     alert("Failed to connect to API");
  //   }
  // };