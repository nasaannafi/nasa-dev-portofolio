import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function Hero() {
  return (
    <section className="hero hero-glow">
      <div className="hero-decor hero-decor-dots" />
      <div className="hero-decor hero-decor-orbit" />

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-eyebrow" variants={textVariants}>
            JUNIOR WEB DEVELOPER <span>·</span> INDONESIA
          </motion.p>

          <motion.h1 variants={textVariants}>
            Hi, I’m
            <br />
            Jawadhika Khoirun
            <br />
            Nasa Annafi<span className="hero-period">.</span>
          </motion.h1>

          <motion.p className="hero-description" variants={textVariants}>
            I’m a junior web developer who enjoys turning ideas into useful
            digital experiences—with thoughtful design, practical functionality,
            and a smooth user experience.
          </motion.p>

          <motion.div className="hero-actions" variants={textVariants}>
            <a className="hero-button hero-button-primary" href="#projects">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a className="hero-button hero-button-secondary" href="#contact">
              Let’s Connect
            </a>
          </motion.div>

          <motion.a className="hero-scroll" href="#projects" variants={textVariants}>
            <ArrowDown size={16} />
            <span>SCROLL TO EXPLORE</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-image hero-image-glow"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero-image-backdrop" />
          <img src="/image/nasa-profile.png" alt="Jawadhika Khoirun Nasa Annafi" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero