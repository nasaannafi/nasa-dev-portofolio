
import {
  Code2,
  Gamepad2,
  GraduationCap,
  Monitor,
  Users,
} from 'lucide-react'
import './Experience.css'

const experiences = [
  {
    period: 'Feb 2023 — Present',
    role: 'Freelance Web Developer',
    organization: 'N and G Web Develop',
    icon: Code2,
    type: 'Freelance',
    highlights: [
      'Contributed to the backend and database development of a school Learning Management System (LMS).',
      'Developed the front-end interface and contributed to the concept of a data analysis application for Puskesmas in East Java.',
    ],
  },
  {
    period: 'Feb 2024 — Jul 2024',
    role: 'Game Development — Independent Study',
    organization: 'Agate International · MSIB',
    icon: Gamepad2,
    type: 'Independent Study',
    highlights: [
      'Studied Game Design, Game Programming, and Game Development.',
      'Collaborated with a team and mentor to develop a 3D Hack-and-Slash game as a final project.',
      'Worked as a UI and Sound Effects (SFX) Programmer.',
    ],
  },
  {
    period: 'Aug 2024 — Dec 2024',
    role: 'Teaching Assistant',
    organization: 'SMKN 2 Buduran, Sidoarjo',
    icon: GraduationCap,
    type: 'Education',
    highlights: [
      'Guided students during practical sessions and assignments in UI/UX Design and Web Programming.',
    ],
  },
  {
    period: 'Aug 2024 — Dec 2024',
    role: 'Computer Laboratory Assistant',
    organization: 'SMKN 2 Buduran, Sidoarjo',
    icon: Monitor,
    type: 'Technical Support',
    highlights: [
      'Assisted students with computer usage during laboratory sessions.',
      'Prepared equipment and checked computer systems and software before practical sessions.',
    ],
  },
  {
    period: '2016 — Present',
    role: 'Community Volunteer',
    organization: 'Karang Taruna',
    icon: Users,
    type: 'Community',
    highlights: [
      'Supported village community events, including Indonesian Independence Day celebrations and other local activities.',
      'Assisted with community events and wedding celebrations in the village.',
    ],
  },
]

function Experience() {
  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-intro">
            <p className="experience-eyebrow">
              02 / EXPERIENCE
            </p>

            <h2 className="experience-title">
              Experience that
              <span> shapes my journey.</span>
            </h2>

            <p className="experience-description">
              A journey of learning, building, collaborating,
              and contributing through professional,
              technical, and community experiences.
            </p>
          </div>

          <div className="experience-timeline">
            {experiences.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  className="experience-card"
                  key={`${item.role}-${item.period}`}
                >
                  <div className="experience-marker">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div className="experience-card-content">
                    <p className="experience-period">
                      {item.period}
                    </p>

                    <h3 className="experience-role">
                      {item.role}
                    </h3>

                    <p className="experience-organization">
                      {item.organization}
                    </p>

                    <span className="experience-type">
                      {item.type}
                    </span>

                    <ul className="experience-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="experience-number">
                    / 0{index + 1}
                  </span>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
