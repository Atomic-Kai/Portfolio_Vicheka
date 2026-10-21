import cartlixImage from '../assets/cartlix.png'
import edumanageImage from '../assets/edumanage.png'
import genzLibraryImage from '../assets/genzlibrary.png'

const academicFeatures = [
	'Student and course management',
	'Attendance and assignment score tracking',
	'Role-based access and authentication',
	'Administrative dashboard for academic data',
]

const cartlixFeatures = [
	'Product browsing and e-commerce workflows',
	'Personalized product recommendation engine',
	'Secure authentication and checkout support',
	'QR payment support through KHQR/Bakong',
	'Cloud-ready deployment with media management',
]

const libraryFeatures = [
	'Browse books by category, popularity, and search',
	'Book details with online reading support',
	'Borrowing workflow with borrower status tracking',
	'Admin management for books, authors, users, and transactions',
	'Role-based access with email notifications',
]

function Projects() {
	return (
		<section className="block" id="project">
			<h2 className="section-title">Project</h2>
			<div className="projects-grid">
			<div className="project project-academic">
				<img className="project-image" src={edumanageImage} alt="Student Academic Management System dashboard" />
				<div className="project-head">
					<h3>Student Academic Management System</h3>
					<span className="tag">Full-stack web application</span>
				</div>
				<p className="desc">
					A dashboard system for managing students, courses, attendance, and assignment scores with secure access for administrators and academic staff.
				</p>
				<div className="stack">
					<span>React</span>
					<span>Vite</span>
					<span>PHP</span>
					<span>Laravel</span>
					<span>MySQL</span>
					<span>Laravel Sanctum</span>
					<span>JWT</span>
					<span>Spatie Permission</span>
				</div>
				<h4 className="features-title">Important Features</h4>
				<ul className="features">
					{academicFeatures.map((feature) => <li key={feature}>{feature}</li>)}
				</ul>
				<div className="project-actions">
					<a className="project-button project-button-primary" href="https://github.com/Vicheka99/Part_time_Management_System" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<span className="project-button project-button-disabled" aria-disabled="true">
						Live Site
					</span>
				</div>
			</div>
			<div className="project project-cartlix">
				<img className="project-image" src={cartlixImage} alt="Cartlix E-commerce Platform interface" />
				<div className="project-head">
					<h3>Cartlix E-commerce Platform</h3>
					<span className="tag">Full-stack commerce application</span>
				</div>
				<p className="desc">
					An e-commerce platform for discovering products, managing a shopping journey, and receiving personalized recommendations through a cloud-ready web application.
				</p>
				<div className="stack">
					<span>React</span>
					<span>Vite</span>
					<span>Axios</span>
					<span>i18next</span>
					<span>Tailwind CSS</span>
					<span>PHP</span>
					<span>Laravel</span>
					<span>Supabase</span>
					<span>Cloudinary</span>
					<span>KHQR / KHPAY</span>
					<span>Docker</span>
					<span>Google Cloud Run</span>
				</div>
				<h4 className="features-title">Important Features</h4>
				<ul className="features">
					{cartlixFeatures.map((feature) => <li key={feature}>{feature}</li>)}
				</ul>
				<div className="project-actions">
					<a className="project-button project-button-primary" href="https://github.com/sopheakchan/ecommerce-recommendation-engine" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<span className="project-button project-button-disabled" aria-disabled="true">
						Live Site
					</span>
				</div>
			</div>
			<div className="project project-library">
				<img className="project-image" src={genzLibraryImage} alt="GenZ Library book collection" />
				<div className="project-head">
					<h3>Libraries Management System</h3>
					<span className="tag">Full-stack library platform</span>
				</div>
				<p className="desc">
					A full-stack library platform for discovering books, reading online, borrowing titles, and managing library operations through an administrator dashboard.
				</p>
				<div className="stack">
					<span>React</span>
					<span>Vite</span>
					<span>React Router</span>
					<span>PHP</span>
					<span>Laravel</span>
					<span>MySQL</span>
					<span>Bootstrap Icons</span>
					<span>Spatie Permission</span>
				</div>
				<h4 className="features-title">Important Features</h4>
				<ul className="features">
					{libraryFeatures.map((feature) => <li key={feature}>{feature}</li>)}
				</ul>
				<div className="project-actions">
					<a className="project-button project-button-primary" href="https://github.com/Vicheka99/Libraries_System" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<span className="project-button project-button-disabled" aria-disabled="true">
						Live Site
					</span>
				</div>
			</div>
			</div>
		</section>
	)
}

export default Projects
