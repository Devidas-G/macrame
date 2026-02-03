import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.homeLink}>
          <h3><a href="#">Devidas Gaikwad</a></h3>
        </div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </div>
      </div>
    </nav>
  )
}
