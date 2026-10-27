
import { GraduationCap, Award } from 'lucide-react'
import './Education.css'

function Education() {
  return (
    <section className="education-section section" id="education">
      <div className="container">
        <div className="education-heading">
          <p className="education-eyebrow">
            03 / EDUCATION
          </p>

          <h2 className="education-title">
            Education &
            <span> foundation.</span>
          </h2>

          <p className="education-description">
            My academic background has shaped my foundation
            in technology, problem-solving, and continuous learning.
          </p>
        </div>

        <article className="education-card">
          <div className="education-icon">
            <GraduationCap size={28} strokeWidth={1.6} />
          </div>

          <div className="education-content">
            <p className="education-period">
                Bachelor's Degree · 2021–2026
            </p>

            <h3>Information Technology Education</h3>

            <p className="education-institution">
              Universitas Negeri Surabaya
            </p>

            <div className="education-gpa">
              <Award size={17} strokeWidth={1.7} />
              <span>GPA: 3.76 / 4.00</span>
            </div>
          </div>

          <span className="education-number">/ 01</span>
        </article>
      </div>
    </section>
  )
}

export default Education
