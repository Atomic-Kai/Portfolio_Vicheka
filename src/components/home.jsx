import profileImage from '../assets/Vicheka.jpg'

function Home() {
	return (
		<section className="hero" id="top">
			<div className="hero-text">
				<div className="pill">Information Technology Engineering Student</div>
				<h1>
					I Build Systems
					<br />
					That Solve Real
					<br />
					<em>Everyday Problems</em>
				</h1>
				<p className="lead">
					Hi, I&apos;m Eam Putvicheka - a Web Development student at ITE, Royal University of Phnom Penh, building full-stack apps with React and Laravel.
				</p>
				<div className="cta-row">
					<a href="#project" className="btn btn-primary">View My Work <span aria-hidden="true">-&gt;</span></a>
					<a href="/Vicheka%27s%20CV%20Resume.pdf" className="btn btn-outline" download>Download My CV <span aria-hidden="true">-&gt;</span></a>
				</div>
				<div className="social-links" aria-label="Social links">
					<a href="https://www.linkedin.com/in/eam-putvicheka-0196843a4" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.1 2.1 0 1 0 4.75 7.2 2.1 2.1 0 0 0 4.75 3ZM21 13.85c0-3.76-2-5.52-4.67-5.52a4.04 4.04 0 0 0-3.65 2.01V8.5H9.2V21h3.48v-6.18c0-1.63.3-3.21 2.33-3.21 2 0 2.02 1.87 2.02 3.32V21H21v-7.15Z" /></svg>
					</a>
					<a href="https://github.com/Atomic-Kai" target="_blank" rel="noreferrer" aria-label="GitHub profile">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.46v-1.7c-2.69.59-3.26-1.3-3.26-1.3-.44-1.15-1.08-1.45-1.08-1.45-.88-.61.07-.6.07-.6.97.07 1.48 1 1.48 1 .86 1.48 2.25 1.05 2.8.8.09-.63.34-1.05.61-1.29-2.14-.24-4.39-1.07-4.39-4.75 0-1.05.37-1.9.99-2.57-.1-.24-.43-1.22.09-2.54 0 0 .81-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.81-1.24 2.62-.98 2.62-.98.52 1.32.19 2.3.09 2.54.62.67.99 1.52.99 2.57 0 3.69-2.26 4.51-4.41 4.74.35.3.66.89.66 1.8v2.67c0 .26.17.56.67.46A9.5 9.5 0 0 0 12 2.5Z" /></svg>
					</a>
				</div>
			</div>
			<div className="portrait">
				<img className="portrait-image" src={profileImage} alt="Eam Putvicheka wearing a suit and tie" />
			</div>
		</section>
	)
}

export default Home
