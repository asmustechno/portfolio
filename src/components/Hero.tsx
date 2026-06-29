import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Innovating the Future of Technology
          </div>

          <h1 className="hero__title">
            Building Digital
            <span className="hero__title-gradient"> Solutions </span>
            That Matter
          </h1>

          <p className="hero__description">
            Asmus Techno delivers cutting-edge web, mobile, and cloud solutions
            that empower businesses to thrive in the digital age.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Our Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">30+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <div className="hero__card-header">
              <div className="hero__card-dots">
                <span /><span /><span />
              </div>
              <span className="hero__card-title">asmus-techno.dev</span>
            </div>
            <div className="hero__card-body">
              <div className="hero__code-line">
                <span className="hero__code-keyword">const</span>{' '}
                <span className="hero__code-var">solution</span> ={' '}
                <span className="hero__code-func">create</span>({'{'}
              </div>
              <div className="hero__code-line hero__code-indent">
                <span className="hero__code-prop">innovation</span>:{' '}
                <span className="hero__code-string">'cutting-edge'</span>,
              </div>
              <div className="hero__code-line hero__code-indent">
                <span className="hero__code-prop">quality</span>:{' '}
                <span className="hero__code-string">'premium'</span>,
              </div>
              <div className="hero__code-line hero__code-indent">
                <span className="hero__code-prop">delivery</span>:{' '}
                <span className="hero__code-string">'on-time'</span>
              </div>
              <div className="hero__code-line">{'}'});</div>
            </div>
          </div>

          <div className="hero__card hero__card--float hero__card--top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>Fast Delivery</span>
          </div>

          <div className="hero__card hero__card--float hero__card--bottom">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Secure & Reliable</span>
          </div>
        </div>
      </div>
    </section>
  )
}
