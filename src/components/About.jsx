
import {
  Target,
  Code2,
  TrendingUp,
  BookOpen,
} from 'lucide-react'
import './About.css'

const highlights = [
  {
    icon: Target,
    title: 'Problem-solving',
    description:
      'Finding practical solutions to development challenges.',
  },
  {
    icon: Code2,
    title: 'Development approach',
    description:
      'Writing clear, structured, and maintainable code.',
  },
  {
    icon: TrendingUp,
    title: 'Career goals',
    description:
      'Growing through meaningful projects and collaboration.',
  },
  {
    icon: BookOpen,
    title: 'Continuous learning',
    description:
      'Exploring technologies and strengthening fundamentals.',
  },
]

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-intro">
            <p className="about-eyebrow">
              01 / ABOUT ME
            </p>

            <h2 className="about-title">
              Building with logic.
              <span> Creating with purpose.</span>
            </h2>

            <p className="about-role">
              Junior Web Developer
            </p>

            <p className="about-description">
              I'm interested in building functional web
              applications and exploring creative projects.
              I enjoy turning problems into practical
              solutions while continuing to strengthen
              my development skills.
            </p>

            <p className="about-description">
              My goal is to grow as a developer through
              hands-on projects, problem-solving, and
              continuous learning.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  className="about-item"
                  key={item.title}
                >
                  <span className="about-item-number">
                    / 0{index + 1}
                  </span>

                  <div className="about-item-icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div className="about-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
