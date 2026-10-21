const skillGroups = [
	{
		name: 'Programming',
		items: ['C/C++', 'Java', 'JavaScript', 'PHP', 'Python (Basic)', 'SQL'],
	},
	{
		name: 'Frontend',
		items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'React.js'],
	},
	{
		name: 'Backend',
		items: ['PHP', 'Laravel', 'REST API'],
	},
	{
		name: 'Database',
		items: ['MySQL'],
	},
	{
		name: 'Mobile',
		items: ['Android Studio', 'Java', 'Room Database'],
	},
	{
		name: 'Tools',
		items: ['Git', 'GitHub', 'VS Code', 'Postman', 'XAMPP', 'Docker'],
	},
	{
		name: 'Deployment',
		items: ['Vercel', 'DigitalOcean'],
	},
]

function Skills() {
	return (
		<section className="block" id="skills">
			<h2 className="section-title">Skills</h2>
			<div className="skill-groups">
				{skillGroups.map((group) => (
					<div className="skill-group" key={group.name}>
						<h3>{group.name}</h3>
						<div className="skills">
							{group.items.map((skill) => <span className="skill" key={`${group.name}-${skill}`}>{skill}</span>)}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Skills
