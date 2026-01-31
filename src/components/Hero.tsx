export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="role">UI/UX DESIGNER</p>
          <h1>Hello, my name is Madelyn Torff</h1>
          <p className="desc">
            Short text with details about you, what you do or your professional career.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Projects</button>
            <button className="btn outline">LinkedIn</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  )
}
