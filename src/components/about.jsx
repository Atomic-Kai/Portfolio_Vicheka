function About() {
	return (
		<section className="block about-section" id="about">
			<div className="about-grid">
				<div>
					<h2 className="section-title">About</h2>
					<h3 className="about-subtitle">Growing as a practical web developer</h3>
				</div>

				<div className="about-panel">
					<p className="desc about-copy">
						I'm a fourth-year Information Technology Engineering student at the Royal University of Phnom Penh (RUPP) with a strong interest in web development. I have experience working with technologies such as HTML, CSS, JavaScript, React, PHP, Laravel, and MySQL, and I'm continuously improving my skills through university projects and personal practice.
					</p>
					<p className="desc about-copy">
						I enjoy building practical web applications, solving problems, and learning new technologies. I'm currently looking for opportunities to apply my skills, gain real-world experience, and grow as a developer.
					</p>
					<div className="about-highlights" aria-label="About highlights">
						<span>Fourth-year ITE student</span>
						<span>Web development focus</span>
						<span>Open to real-world experience</span>
					</div>
				</div>
			</div>
		</section>
	)
}
export default About
