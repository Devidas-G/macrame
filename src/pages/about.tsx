import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About() {
	return (
		<>
			<Navbar />

			<main style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
				<section style={{ display: "grid", gap: "1.5rem" }}>
					{/* <header>
						<h1 style={{ fontSize: "2rem", margin: 0 }}>About Me</h1>
						<p style={{ color: "#555", marginTop: "0.5rem" }}>
							Hi — I'm Devidas, a frontend developer focused on building accessible,
							performant web experiences. I enjoy turning design into
							interactive interfaces and learning new tools and patterns.
						</p>
					</header> */}

					{/* Two-column hero: left = about text, right = circular avatar */}
					<section style={{
						display: "flex",
						gap: "2rem",
						alignItems: "center",
						flexWrap: "wrap"
					}}>
						<div style={{ flex: "1 1 360px", minWidth: 260 }}>
							<div style={{
								borderRadius: 8,
								padding: "1rem",
								border: "1px solid #e6e6e6",
								background: "#fff"
							}}>
								<h2 style={{ marginTop: 0 }}>About</h2>
								<p style={{ margin: 0 }}>
									I'm a frontend engineer building modern web apps with TypeScript,
									React and Vite. I care about developer experience, clear UI and
									shipping small, reliable features. I enjoy collaborating with
									designers and improving front-end workflows.
								</p>
							</div>
						</div>

						<div>
							<img
								src="/profile.jpg"
								alt="Devidas Gaikwad"
								style={{
									width: 220,
									height: 220,
									borderRadius: "50%",
									objectFit: "cover",
									// boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
									// border: "4px solid #fff"
								}}
							/>
						</div>
					</section>

					<section style={{ borderRadius: 8, padding: "1rem", border: "1px solid #e6e6e6", background: "#fff" }}>
						<h2 style={{ marginTop: 0 }}>Get in touch</h2>
						<p>
							I'm open to interesting projects and collaborations. Reach me at{' '}
							<a href="mailto:you@example.com">you@example.com</a> or connect on
							LinkedIn.
						</p>
						<p>
							<a href="/resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
						</p>
					</section>
				</section>
			</main>

			<Footer />
		</>
	)
}

