import './About.css'

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to deliver forward-thinking solutions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships through trust.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Quality Assured',
    description: 'Every project undergoes rigorous testing to ensure excellence and reliability.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Agile Delivery',
    description: 'Fast, iterative development that adapts to your evolving business needs.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Transforming Ideas Into Powerful Digital Experiences
            </h2>
            <p className="about__text">
              Asmus Techno is a technology company dedicated to helping businesses
              navigate the digital landscape. From startups to enterprises, we craft
              tailored solutions that drive growth, efficiency, and innovation.
            </p>
            <p className="about__text">
              Our team of passionate developers, designers, and strategists work
              collaboratively to turn your vision into reality — on time and on budget.
            </p>
            <a href="#contact" className="btn btn-primary">
              Work With Us
            </a>
          </div>

          <div className="about__values">
            {values.map((value) => (
              <div key={value.title} className="about__value-card">
                <div className="about__value-icon">{value.icon}</div>
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
