import { Link } from 'react-router-dom'
import projects from '../data/Projects'
import './Projects.css'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <div className="projects-heading">
          <p className="projects-eyebrow">
            SELECTED WORKS / 01—04
          </p>

          <h2 className="projects-title">
            Projects that solve
            <span> real problems.</span>
          </h2>

          <p className="projects-description">
            A selection of applications and creative projects
            that showcase my development journey.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              className="project-card"
              key={project.id}
            >
              <div className="project-image-wrapper">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />

                <span className="project-image-number">
                  / {project.number}
                </span>
              </div>

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
