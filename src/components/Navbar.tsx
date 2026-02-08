import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.homeLink}>
          <h3><Link to="/">Devidas Gaikwad</Link></h3>
        </div>
        <div className={styles.navLinks}>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>
    </nav>
  )
}
