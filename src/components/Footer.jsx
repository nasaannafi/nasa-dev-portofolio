
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ]

  const socialLinks = [
    {
      label: 'Email',
      href: 'mailto:nasa.annafik22@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jawadhika-khoirun-nasa-annafi-1202722a5',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/nasaannafi',
    },
  ]

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-main">
          <div className="footer-intro">
            <span className="footer-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm open to opportunities, collaboration,
              and exciting development projects.
            </p>

            <a
              className="footer-email"
              href="mailto:nasa.annafik22@gmail.com"
            >
              <span aria-hidden="true">@</span>
              <span>nasa.annafik22@gmail.com</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              <h3>Navigation</h3>

              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-social">
              <h3>Connect</h3>

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(
                    social.label !== 'Email'
                      ? {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {}
                  )}
                >
                  {social.label === 'Email' && (
                    <span aria-hidden="true">@</span>
                  )}

                  {social.label === 'LinkedIn' && (
                    <span aria-hidden="true">in</span>
                  )}

                  {social.label === 'GitHub' && (
                    <span aria-hidden="true">GH</span>
                  )}

                  <span>{social.label}</span>

                  {social.label !== 'Email' && (
                    <span aria-hidden="true">↗</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a className="footer-logo" href="#">
            nasa<span>.</span>dev
          </a>

          <p>
            © {currentYear} nasa.dev. All rights reserved.
          </p>

          <a className="footer-back-top" href="#">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
