export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[var(--color-surface)]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[var(--color-text)]">
          About <span className="text-[var(--color-primary)]">Me</span>
        </h2>

        <p className="max-w-3xl mx-auto text-[var(--color-muted)] text-lg mb-14 leading-relaxed">
          I am a motivated and curious developer with a strong interest in web and
          software development. I enjoy writing clean code, solving problems and
          building reliable, scalable applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["HTML", "CSS", "React", "Java", "PostgreSQL", "Tailwind CSS", "Javascipt", "Github"].map((skill) => (
            <div
              key={skill}
              className="
                bg-white
                border border-gray-200
                rounded-xl
                py-6
                font-semibold
                text-[var(--color-text)]
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {skill}
              
            </div>

            
          ))}
        </div>

      </div>
    </section>
  );
}
