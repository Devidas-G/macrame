import styles from "./GetInTouch.module.css"
export default function GetInTouch() {
    return (
        <section className={styles.getInTouchSection}>
            <h2 style={{ marginTop: 0 }}>Get in touch</h2>
            <p>
                I'm open to interesting projects and collaborations. Reach me at{' '}
                <a href="mailto:Dev.gaikwad222@gmail.com">Dev.gaikwad222@gmail.com</a> or connect on
                LinkedIn.
            </p>
            {/* <p>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
            </p> */}
        </section>
    )
}