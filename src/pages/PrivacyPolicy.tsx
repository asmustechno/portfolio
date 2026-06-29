import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const sections = [
  {
    title: '1. Introduction',
    content: `Asmus Techno ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing our website, you agree to the terms of this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following types of information:`,
    list: [
      'Personal Information: Name, email address, phone number, and other details you provide through our contact form.',
      'Usage Data: Pages visited, time spent on the site, browser type, device information, and IP address.',
      'Communication Data: Messages, inquiries, and correspondence you send to us.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:`,
    list: [
      'Respond to your inquiries and provide customer support.',
      'Deliver and improve our technology services.',
      'Send project updates and relevant communications.',
      'Analyze website usage to enhance user experience.',
      'Comply with legal obligations and protect our rights.',
    ],
  },
  {
    title: '4. Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:`,
    list: [
      'With service providers who assist us in operating our website and business.',
      'When required by law, regulation, or legal process.',
      'To protect the rights, property, or safety of Asmus Techno, our clients, or others.',
    ],
  },
  {
    title: '5. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '6. Cookies',
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have the right to:`,
    list: [
      'Access the personal data we hold about you.',
      'Request correction of inaccurate information.',
      'Request deletion of your personal data.',
      'Withdraw consent for data processing where applicable.',
      'Lodge a complaint with a data protection authority.',
    ],
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external websites you visit.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have questions or concerns about this Privacy Policy, please contact us:`,
    contact: true,
  },
]

export default function PrivacyPolicy() {
  const lastUpdated = 'June 29, 2026'

  return (
    <section className="privacy">
      <div className="container privacy__container">
        <Link to="/" className="privacy__back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="privacy__header">
          <span className="section-label">Legal</span>
          <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy__updated">Last updated: {lastUpdated}</p>
        </div>

        <div className="privacy__content">
          {sections.map((section) => (
            <div key={section.title} className="privacy__section">
              <h2 className="privacy__section-title">{section.title}</h2>
              <p className="privacy__text">{section.content}</p>
              {section.list && (
                <ul className="privacy__list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <ul className="privacy__contact">
                  <li><strong>Email:</strong> asmustechno@gmail.com</li>
                  <li><strong>Phone:</strong> +91 77379 93036</li>
                  <li><strong>Address:</strong> Jodhpur, India</li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
