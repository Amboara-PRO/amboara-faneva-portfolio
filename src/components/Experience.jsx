function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[var(--color-background)]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[var(--color-text)]">
          My Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div
            className="
              bg-white
              border border-gray-200
              rounded-xl
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <h3 className="font-bold text-xl mb-4 text-[var(--color-text)]">
              Academic & Personal Projects
            </h3>

            <p className="text-[var(--color-muted)] leading-relaxed">
              Development of modern web applications using React,
              PostgreSQL databases, and Java-based business logic with a focus
              on clean architecture and maintainability.
            </p>
          </div>

          <div
            className="
              bg-white
              border border-gray-200
              rounded-xl
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <h3 className="font-bold text-xl mb-4 text-[var(--color-text)]">
              Teamwork & Collaboration
            </h3>

            <p className="text-[var(--color-muted)] leading-relaxed">
              Experience working in collaborative environments using Git & GitHub,
              applying clean code principles, version control workflows,
              and modern development best practices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Experience