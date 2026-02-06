function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-24 bg-[var(--color-surface)]"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--color-text)] leading-tight">
            Hi, I'm <br />
            <span className="text-[var(--color-primary)]">
              Amboara Faneva <br /> ANDRIAMALALA
            </span>
          </h2>

          <p className="text-lg mb-8 text-[var(--color-muted)] max-w-xl">
            I’m a passionate developer who enjoys turning ideas into clean,
            efficient and user-friendly web applications.
            <br />
            <span className="font-medium">(Web & Software Developer)</span>
          </p>

          <div className="flex gap-4">
            <a
              href="#experience"
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-md"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-[var(--color-primary)] opacity-20 blur-lg"></div>
            <img
              src="/assets/images/my_profile.jpeg"
              alt="My profile"
              className="relative w-64 h-64 object-cover rounded-full border-4 border-[var(--color-primary)] shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
export default Home