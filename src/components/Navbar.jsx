import { useState } from "react";
import { useDarkMode } from "./useDarkMode";
function Navbar() {
  const iconsTheme = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      fill="currentColor"
      className="md:w-10 md:h-10 w-6 h-6"
    >
      <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="md:w-10 md:h-10 w-6 h-6"
    >
      <path d="M21.752 15.002A9 9 0 0112 3a9 9 0 108.752 12.002z" />
    </svg>,
  ];
  const { dark, setDark } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow z-50 text-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl md:text-[3.2em] leading-[1.1] font-bold">
          Amboara
        </h1>
        <div className="flex justify-center items-center gap-0 md:gap-6">
          <button
            onClick={() => setDark(dark === false ? true : false)}
            className="
    flex items-center justify-center
    rounded-full
    bg-[var(--color-surface)]
    text-[var(--color-text)]
    shadow-md
    transition-all duration-300 ease-in-out

    hover:scale-110
    hover:bg-[var(--color-primary)]
    hover:text-[var(--color-surface)]

    active:scale-95
    focus:ring-2
    focus:ring-[var(--color-primary)]
    focus:ring-offset-2
    focus:ring-offset-transparent
  "
          >
            {dark ? iconsTheme[0] : iconsTheme[1]}
          </button>

          <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
            <li>
              <a
                href="#home"
                className="hover:text-red-200 transition-all duration-300 text-xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-red-200 transition-all duration-300 text-xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-red-200 transition-all duration-300 text-xl"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-200 transition-all duration-300 text-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
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
