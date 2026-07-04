import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const NAV = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About Us' },
  { to: '/services',label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [location.pathname]);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-inner">

          <Link to="/" className="header-logo" aria-label="Junk Pro Service — Home">
            <img src={logo} alt="" aria-hidden="true" width="48" height="48" />
            <div className="header-logo-text">
              Junk Pro
              <span>Service</span>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {NAV.map(l => (
              <Link key={l.to} to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a href="tel:+17543272760" className="header-phone" aria-label="Call Junk Pro Service">
              <span className="header-phone-dot" aria-hidden="true" />
              754-327-2760
            </a>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Free Estimate
            </Link>
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav id="mobile-nav" className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV.map(l => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
            className={location.pathname === l.to ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary btn-lg" onClick={() => setMenuOpen(false)}>
          Get Free Estimate
        </Link>
        <a href="tel:+17543272760" className="mobile-menu-phone">📞 754-327-2760</a>
      </nav>
    </>
  );
}
