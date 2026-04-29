import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a className="flex items-center gap-3" href="/" aria-label="Transformers Marks home">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="sr-only">Logo</span>
          </div>
          <span className="text-lg font-medium">
            Transformers <span className="text-primary">Marks</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#about" className="nav-link text-sm">
              About
            </a>
          </li>
          <li>
            <a href="#properties" className="nav-link text-sm">
              Properties
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="/admin" className="nav-link text-sm">
              Admin
            </a>
          </li>
        </ul>

        <button
          className="mobile-menu-button md:hidden"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu-panel md:hidden ${isMenuOpen ? "open" : ""}`}
        id="mobile-menu"
      >
        <a href="/#about" onClick={closeMenu}>
          About
        </a>
        <a href="/#properties" onClick={closeMenu}>
          Properties
        </a>
        <a href="/#contact" onClick={closeMenu}>
          Contact
        </a>
        <a href="/admin" onClick={closeMenu}>
          Admin
        </a>
      </div>
    </header>
  );
}
