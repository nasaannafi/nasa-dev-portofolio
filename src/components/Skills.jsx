
import {
  Monitor,
  Database,
  Gamepad2,
  Wrench,
} from 'lucide-react'
import './Skills.css'

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['PHP', 'MySQL'],
  },
  {
    title: 'Game Development',
    icon: Gamepad2,
    skills: ['C#', 'Unity'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Moodle'],
  },
]

function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <p className="skills-eyebrow">
            04 / SKILLS
          </p>

          <h2 className="skills-title">
            Tools of my
            <span> craft.</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build web
            applications, develop games, and bring ideas
            into practical projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <article className="skills-card" key={group.title}>
                <div className="skills-card-header">
                  <div className="skills-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="skills-number">
                    / 0{index + 1}
                  </span>
                </div>

                <h3 className="skills-card-title">
                  {group.title}
                </h3>

                <div className="skills-list">
                  {group.skills.map((skill) => (
                    <span className="skill-badge" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
