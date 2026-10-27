
import { ArrowDown, ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <p className="hero-eyebrow">
          JUNIOR WEB DEVELOPER <span>·</span> INDONESIA
        </p>

        <h1>
          Building digital
          <br />
          experiences that
          <br />
          <span>work.</span>
        </h1>

        <p className="hero-description">
          Saya mengembangkan aplikasi web dengan fokus pada
          fungsionalitas, desain yang jelas, dan pengalaman pengguna.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#projects">
            Lihat Proyek <ArrowUpRight size={18} />
          </a>

          <a className="hero-button hero-button-secondary" href="#contact">
            Hubungi Saya
          </a>
        </div>

        <a className="hero-scroll" href="#projects">
          <ArrowDown size={16} />
          <span>SCROLL TO EXPLORE</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
