import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>You’ve wandered off the map 🧭</h2>
        <p className={styles.text}>
          The page you’re looking for doesn’t exist or was moved to another universe.
        </p>

        <Link to="/" className={styles.btn}>
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  )
}
