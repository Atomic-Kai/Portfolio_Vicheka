function Education() {
	return (
		<section className="block education-section" id="education">
			<h2 className="section-title">Education</h2>
			<div className="education-list">
				<article className="education-card education-current">
					<div>
						<span className="education-period">2023 - Present · Current</span>
						<h3>Royal University of Phnom Penh (RUPP)</h3>
						<p>Department of Institute Technology Engineering</p>
					</div>
					<div className="education-focus">
						<span>Current study</span>
						<p>Fourth-year Information Technology student focused on web development, software engineering, and databases.</p>
					</div>
				</article>
				<article className="education-card education-learning">
					<div>
						<span className="education-period">2024 Apr 21 - 2024 Oct 20</span>
						<h3>ETEC Center</h3>
						<p>Front-End Development short course</p>
					</div>
					<div className="education-focus">
						<span>Certificate</span>
						<p>Completed a short course and certificate of completion, including a final responsive front-end project.</p>
					</div>
				</article>
				<article className="education-card education-learning">
					<div>
						<span className="education-period">2025 Jan 1 - 2025 Sep 26</span>
						<h3>E-Coding Course</h3>
						<p>PHP and Laravel training</p>
					</div>
					<div className="education-focus">
						<span>Practical learning</span>
						<p>Studied PHP fundamentals and Laravel CRUD development, authentication with JWT, and small web applications.</p>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Education
