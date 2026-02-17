import styles from "./Hero.module.css"
const API_URL = import.meta.env.VITE_API_URL;
export default function Hero() {
  const handleProjectsClick = async () => {
    try {
      const res = await fetch(`${API_URL}/api/example`, {
        method: "GET",
        credentials: "include", // keep if using cookies/signed requests
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.text(); // your root returns text
      console.log("API Response:", data);
      alert(`API says: ${data}`);
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to connect to API");
    }
  };
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <div className={styles.heroText}>
          <p className={styles.role}>UI/UX DESIGNER</p>

          <h1>Hello, my name is Devidas Gaikwad</h1>

          <p className={styles.desc}>
            Short text with details about you, what you do or your professional career.
          </p>

          <div className={styles.btnGroup}>
            <button className={`${styles.btn} ${styles.primary}`} onClick={handleProjectsClick}>Projects</button>
            <button className={`${styles.btn} ${styles.outline}`}>LinkedIn</button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/hero.jpg" alt="hero" />
        </div>
      </div>
    </section>
  )
}
