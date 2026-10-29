
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          className="navbar-logo"
          href="#"
          aria-label="Kembali ke atas"
          onClick={closeMenu}
        >
          nasa<span>.</span>dev
        </a>

        <nav
          className={`navbar-links ${menuOpen ? 'is-open' : ''}`}
          aria-label="Navigasi utama"
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="navbar-cta" href="#contact" onClick={closeMenu}>
          Let's talk <ArrowUpRight size={16} />
        </a>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
