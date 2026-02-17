import styles from "./CreativeBanner.module.css"
export default function CreativeBanner() {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerContent}>
                <h1>Creative Projects</h1>
                <p>Showcasing my passion for creativity and innovation through various projects.</p>
            </div>
        </section>
    )
}