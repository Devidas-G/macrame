import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  // Close menu if screen resized to desktop
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 768) setOpen(false)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.homeLink}>
          <h3>
            <Link to="/">Devidas Gaikwad</Link>
          </h3>
        </div>

        {/* Hamburger Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Nav Links */}
        <div className={`${styles.navLinks} ${open ? styles.show : ""}`}>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contacts" onClick={() => setOpen(false)}>Contacts</Link>
        </div>
      </div>
    </nav>
  )
}
