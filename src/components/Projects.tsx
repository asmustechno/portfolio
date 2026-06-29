import type { CSSProperties } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online marketplace with real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    color: '#00d4ff',
  },
  {
    title: 'HealthTrack Mobile App',
    category: 'Mobile Development',
    description: 'Cross-platform health monitoring app with wearable device integration and AI-powered insights.',
    tech: ['React Native', 'Firebase', 'TensorFlow'],
    color: '#7c3aed',
  },
  {
    title: 'FinDash Analytics',
    category: 'SaaS Product',
    description: 'Real-time financial analytics dashboard with interactive charts, reporting, and team collaboration.',
    tech: ['Next.js', 'D3.js', 'AWS'],
    color: '#10b981',
  },
  {
    title: 'EduLearn LMS',
    category: 'Web Application',
    description: 'Learning management system with video courses, quizzes, progress tracking, and certification.',
    tech: ['React', 'MongoDB', 'Stripe'],
    color: '#f59e0b',
  },
  {
    title: 'SmartHome IoT Hub',
    category: 'IoT Solution',
    description: 'Centralized smart home control panel connecting lights, thermostats, and security cameras.',
    tech: ['Vue.js', 'MQTT', 'Raspberry Pi'],
    color: '#ef4444',
  },
  {
    title: 'LogiFlow Supply Chain',
    category: 'Enterprise Software',
    description: 'End-to-end logistics management with route optimization, fleet tracking, and warehouse management.',
    tech: ['Angular', 'Java', 'Kubernetes'],
    color: '#06b6d4',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of our recent work delivering impactful solutions across industries.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="projects__card">
              <div
                className="projects__card-visual"
                style={{ '--project-color': project.color } as CSSProperties}
              >
                <div className="projects__card-pattern" />
                <span className="projects__card-category">{project.category}</span>
              </div>
              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
