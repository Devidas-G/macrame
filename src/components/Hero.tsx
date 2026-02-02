import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={`section ${styles.heroSection}`}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroText}>
          <p className={styles.role}>UI/UX DESIGNER</p>

          <h1>Hello, my name is Devidas Gaikwad</h1>

          <p className={styles.desc}>
            Short text with details about you, what you do or your professional career.
          </p>

          <div>
            <button className={`${styles.btn} ${styles.primary}`}>Projects</button>
            <button className={`${styles.btn} ${styles.outline}`}>LinkedIn</button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  )
}
