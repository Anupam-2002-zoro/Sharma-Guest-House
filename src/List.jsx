import { useState } from "react";
import bg from "./assets/bg.png";
import Home from "./commponetlist/Home";
import Room from "./commponetlist/Room";
import Contact from "./commponetlist/Contact";

/* ══════════════════════════════════════
   PURE CSS — NO TAILWIND
══════════════════════════════════════ */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');

  /* ── Navbar ── */
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: #fef9c3;
    box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  }

  .navbar-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* ── Logo ── */
  .navbar-logo img {
    height: 52px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  /* ── Desktop Menu ── */
  .navbar-desktop {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .nav-link {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #fa613c;
    white-space: nowrap;
    cursor: pointer;
    transition: transform 0.25s ease, text-shadow 0.25s ease;
    user-select: none;
  }
  .nav-link:hover {
    transform: scale(1.1);
    text-shadow: 2px 2px 8px rgba(0,0,0,0.35);
  }

  /* ── Hamburger Button ── */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .hamburger-bar {
    display: block;
    width: 28px;
    height: 3px;
    background: #fa613c;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }

  /* Hamburger → X animation */
  .hamburger-bar.bar1.open { transform: translateY(8px) rotate(45deg); }
  .hamburger-bar.bar2.open { opacity: 0; transform: scaleX(0); }
  .hamburger-bar.bar3.open { transform: translateY(-8px) rotate(-45deg); }

  /* ── Mobile Dropdown ── */
  .navbar-mobile {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease, padding 0.3s ease;
    background: #fef9c3;
  }
  .navbar-mobile.open {
    max-height: 260px;
    padding: 0.75rem 0 1rem;
  }
  .navbar-mobile-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .nav-link-mobile {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: #fa613c;
    cursor: pointer;
    transition: transform 0.2s ease, text-shadow 0.2s ease;
    user-select: none;
  }
  .nav-link-mobile:hover {
    transform: scale(1.06);
    text-shadow: 2px 2px 6px rgba(0,0,0,0.25);
  }

  /* ══ RESPONSIVE ══ */

  /* 640px se neeche — hamburger dikhao, desktop menu chhupaao */
  @media (max-width: 640px) {
    .navbar-inner {
      height: 60px;
      padding: 0 1rem;
    }
    .navbar-logo img {
      height: 42px;
    }
    .navbar-desktop {
      display: none;
    }
    .hamburger {
      display: flex;
    }
  }

  /* 640px se upar — hamburger chhupaao, desktop menu dikhao */
  @media (min-width: 641px) {
    .navbar-mobile {
      display: none;
    }
    .hamburger {
      display: none;
    }
  }

  /* Large screens */
  @media (min-width: 1024px) {
    .navbar-inner {
      height: 80px;
    }
    .navbar-logo img {
      height: 60px;
    }
    .nav-link {
      font-size: 1.4rem;
    }
  }
`;

const navLinks = ["Home", "About", "Contact"];

const List = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{styles}</style>

      {/* ══════════════ NAVBAR ══════════════ */}
      <nav className="navbar">
        <div className="navbar-inner">

          {/* ── Logo ── */}
          <div className="navbar-logo">
            <img src={bg} alt="Sharma Guest House Logo" />
          </div>

          {/* ── Desktop Menu ── */}
          <div className="navbar-desktop">
            {navLinks.map((link) => (
              <span key={link} className="nav-link">{link}</span>
            ))}
          </div>

          {/* ── Hamburger Button ── */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-bar bar1 ${menuOpen ? "open" : ""}`} />
            <span className={`hamburger-bar bar2 ${menuOpen ? "open" : ""}`} />
            <span className={`hamburger-bar bar3 ${menuOpen ? "open" : ""}`} />
          </button>

        </div>

        {/* ── Mobile Dropdown ── */}
        <div className={`navbar-mobile ${menuOpen ? "open" : ""}`}>
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              <span
                key={link}
                className="nav-link-mobile"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* ══════════════ PAGES ══════════════ */}
      <Home />
      <Room />
      <Contact />
    </>
  );
};

export default List;