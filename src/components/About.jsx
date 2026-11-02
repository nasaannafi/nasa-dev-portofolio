import ScrollReveal from './ScrollReveal'
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
      'Turning development challenges into practical, user-focused solutions.',
  },
  {
    icon: Code2,
    title: 'Development approach',
    description:
      'Building clear, maintainable applications with thoughtful attention to detail.',
  },
  {
    icon: TrendingUp,
    title: 'Career goals',
    description:
      'Growing through meaningful projects, collaboration, and real-world experience.',
  },
  {
    icon: BookOpen,
    title: 'Continuous learning',
    description:
      'Exploring new technologies while strengthening my development fundamentals.',
  },
]

function About() {
  return (
  <ScrollReveal>
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
    I enjoy turning ideas into practical web applications
    and exploring creative ways to solve problems. I care
    about writing clear, maintainable code and creating
    experiences that are useful and easy to navigate.
  </p>

  <p className="about-description">
    I’m always learning, experimenting, and building projects
    that help me grow as a developer.
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
  </ScrollReveal>
  )
}

export default About
