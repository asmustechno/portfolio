import './Services.css'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android that users love.',
    tags: ['React Native', 'Flutter', 'iOS'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-4V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
        <path d="M8 10h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
      </svg>
    ),
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, DevOps pipelines, and serverless architectures on AWS, Azure, and GCP.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user research, wireframing, and prototyping.',
    tags: ['Figma', 'Prototyping', 'Research'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Database Design',
    description: 'Robust database architecture with PostgreSQL, MongoDB, and optimized query performance.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Cybersecurity',
    description: 'Security audits, penetration testing, and implementation of best security practices.',
    tags: ['Audits', 'SSL', 'Compliance'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">What We Do Best</h2>
          <p className="section-subtitle">
            End-to-end technology services designed to accelerate your business growth
            and digital transformation.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="services__card">
              <div className="services__icon">{service.icon}</div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__desc">{service.description}</p>
              <div className="services__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="services__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
