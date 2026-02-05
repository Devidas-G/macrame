import styles from "./AboutGrid.module.css"
export default function AboutGrid() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutGrid}>
                <div className={styles.aboutText}>
                    <h2>About Me</h2>
                    <p className={styles.aboutDesc}>
                        I'm a frontend engineer building modern web apps with TypeScript,
                        React and Vite. I care about developer experience, clear UI and
                        shipping small, reliable features. I enjoy collaborating with
                        designers and improving front-end workflows.
                    </p>
                    <button className={`${styles.btn} ${styles.primary}`}>Resume</button>
                </div>
                <div className={styles.aboutImage}>
                    <img
                        src="/profile.jpg"
                        alt="Devidas Gaikwad"
                    />
                </div>
            </div>
        </section>
    )
}