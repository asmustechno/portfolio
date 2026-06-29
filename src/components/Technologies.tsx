import './Technologies.css'

const techCategories = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'GraphQL'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Jira', 'VS Code', 'Postman', 'Linux'],
  },
]

export default function Technologies() {
  return (
    <section id="technologies" className="section technologies">
      <div className="container">
        <div className="technologies__header">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Technologies We Master</h2>
          <p className="section-subtitle">
            We leverage the best tools and frameworks to build robust, scalable solutions.
          </p>
        </div>

        <div className="technologies__grid">
          {techCategories.map((group) => (
            <div key={group.category} className="technologies__group">
              <h3 className="technologies__category">{group.category}</h3>
              <div className="technologies__items">
                {group.items.map((item) => (
                  <span key={item} className="technologies__item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
