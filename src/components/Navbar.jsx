
import { ArrowUpRight } from 'lucide-react'

function Navbar() {
  const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="navbar-logo" href="#" aria-label="Kembali ke atas">
          nasa<span>.</span>dev
        </a>

        <nav className="navbar-links" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="navbar-cta" href="#contact">
          Let's talk <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  )
}

export default Navbar
