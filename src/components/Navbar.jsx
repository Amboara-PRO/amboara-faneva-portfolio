import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow z-50 text-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl md:text-[3.2em] leading-[1.1] font-bold">
          Amboara
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-red-200 transition-all duration-300 text-2xl"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-red-200 transition-all duration-300 text-2xl"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-red-200 transition-all duration-300 text-2xl"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-red-200 transition-all duration-300 text-2xl"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[var(--color-surface)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] rounded-full p-1 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[var(--color-surface)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] rounded-full p-1 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
      <ul
        className={`md:hidden bg-[var(--color-surface)] px-6 pb-4 space-y-2 text-center shadow-md transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="#home"
            className="block py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="block py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
