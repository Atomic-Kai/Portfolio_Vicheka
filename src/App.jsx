import { useEffect } from 'react'
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Education from './components/education'
import Home from './components/home'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
	useEffect(() => {
		const links = document.querySelectorAll('a[href^="#"]')
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

		const easeInOutSine = (progress) => -(Math.cos(Math.PI * progress) - 1) / 2

		const smoothScroll = (event) => {
			const href = event.currentTarget.getAttribute('href')
			const target = document.querySelector(href)

			if (!target) return

			event.preventDefault()

			if (event.currentTarget.closest('.site-nav')) {
				document.querySelectorAll('.site-nav a').forEach((link) => {
					link.classList.toggle('active', link === event.currentTarget)
				})
			}

			const startY = window.scrollY
			const navHeight = document.querySelector('.site-nav')?.offsetHeight ?? 0
			const targetY = Math.max(target.getBoundingClientRect().top + startY - navHeight - 12, 0)
			const distance = targetY - startY
			const duration = prefersReducedMotion ? 0 : Math.min(Math.max(Math.abs(distance) * 0.55, 620), 920)
			const startTime = performance.now()

			if (duration === 0) {
				window.scrollTo(0, targetY)
				window.history.pushState(null, '', href)
				return
			}

			const animate = (currentTime) => {
				const elapsed = currentTime - startTime
				const progress = Math.min(elapsed / duration, 1)

				window.scrollTo(0, startY + distance * easeInOutSine(progress))

				if (progress < 1) {
					requestAnimationFrame(animate)
				} else {
					window.history.pushState(null, '', href)
				}
			}

			requestAnimationFrame(animate)
		}

		links.forEach((link) => link.addEventListener('click', smoothScroll))

		return () => {
			links.forEach((link) => link.removeEventListener('click', smoothScroll))
		}
	}, [])

	return (
		<main className="card">
			<nav className="site-nav" aria-label="Main navigation">
				<div className="logo">EP</div>
				<a href="#top" className="active">Home</a>
				<a href="#about">About</a>
				<a href="#education">Education</a>
				<a href="#skills">Skills</a>
				<a href="#project">Project</a>
				<a href="#contact">Contact</a>
			</nav>

			<Home />
			<About />
			<Education />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}

export default App
