
import {
  Award,
  ExternalLink,
  FileText,
} from 'lucide-react'
import './Certificates.css'

const certificates = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'September 2026',
    category: 'Web Development',
    file: '/Certificates/Certificate_IBM.pdf',
  },
  {
    title: 'Fundamental of Assistant Web Developer - Nasional',
    issuer: 'Digital Talent Academy · DTS 2026',
    date: 'October 2026',
    category: 'Web Development',
    file: '/Certificates/Sertifikat_Fundamental of Assistant Web Developer - Nasional.pdf',
  },
  {
    title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'September 2026',
    category: 'Artificial Intelligence',
    file: '/Certificates/Certificate_Oracle.pdf',
  },
  {
    title: 'CS302: Software Engineering',
    issuer: 'Saylor University',
    date: 'September 2026',
    category: 'Software Engineering',
    file: '/Certificates/Certificate_Saylor University.pdf',
  },
  {
    title: 'Code Crusader — Game Development',
    issuer: 'Agate Academy · Studi Independen Angkatan 6',
    date: 'June 2024',
    category: 'Game Development',
    file: '/Certificates/Certificate_Agate_Game Develop.pdf',
  },
  {
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    date: 'September 2026',
    category: 'Artificial Intelligence',
    file: '/Certificates/Certificate_HP_AI for Beginners_.pdf',
  },
]

function Certificates() {
  return (
    <section
      className="certificates-section section"
      id="certificates"
    >
      <div className="container">
        <div className="certificates-heading">
          <p className="certificates-eyebrow">
            05 / CERTIFICATES
          </p>

          <h2 className="certificates-title">
            Learning in
            <span> progress.</span>
          </h2>

          <p className="certificates-description">
            Certifications and training that reflect my
            commitment to learning and developing new skills.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-card-top">
                <div className="certificate-icon">
                  <Award size={22} strokeWidth={1.7} />
                </div>

                <span className="certificate-number">
                  / {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="certificate-category">
                {certificate.category}
              </p>

              <h3 className="certificate-title">
                {certificate.title}
              </h3>

              <p className="certificate-issuer">
                {certificate.issuer}
              </p>

              <p className="certificate-date">
                {certificate.date}
              </p>

              <a
                className="certificate-link"
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={16} />
                View Certificate
                <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
