import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContent} container`}>
        <h3>Devidas Gaikwad</h3>
        <div className={styles.navLinks}>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
      </div>
    </nav>
  )
}
