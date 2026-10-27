
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import projects from '../data/Projects'
import './ProjectsDetail.css'

function ProjectsDetail() {
  const { projectId } = useParams()

  const project = projects.find(
    (item) => item.id === projectId
  )

  if (!project) {
    return (
      <main className="project-detail">
        <h1>Project not found</h1>
        <Link to="/#projects">Back to Projects</Link>
      </main>
    )
  }

  const details = project.details

  return (
    <main className="project-detail">
      <div className="project-detail-content">
        <Link to="/#projects" className="project-back">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <header className="project-detail-header">
          <p className="project-detail-category">
            {project.category} / {project.number}
          </p>

          <h1>{project.name}</h1>

          <p className="project-detail-description">
            {project.description}
          </p>

          
{project.links && (project.links.github || project.links.demo) && (
  <div className="project-detail-links">
    {project.links.github && (
      <a
        href={project.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-detail-link"
      >
        GitHub Repository
      </a>
    )}

    {project.links.demo && (
      <a
        href={project.links.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-detail-link project-detail-link-primary"
      >
        Live Demo
      </a>
    )}
  </div>
)}


          <div className="project-detail-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </header>

        <div className="project-detail-image-wrapper">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="project-detail-image"
          />
        </div>

        <section className="project-detail-about">
          <p className="project-detail-label">
            ABOUT THE PROJECT
          </p>
          <h2>Overview</h2>
          <p>{details.overview}</p>
        </section>

        <section className="project-detail-features">
          <p className="project-detail-label">WHAT IT DOES</p>
          <h2>Key Features</h2>

          <div className="project-detail-feature-grid">
            {details.features.map((feature) => (
              <article
                className="project-detail-feature"
                key={feature.title}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="project-detail-tech">
          <p className="project-detail-label">
            HOW IT WAS BUILT
          </p>
          <h2>Technical Implementation</h2>
          <p>{details.implementation}</p>
        </section>
      </div>
    </main>
  )
}

export default ProjectsDetail
