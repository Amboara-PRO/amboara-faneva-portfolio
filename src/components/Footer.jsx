export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-[var(--color-muted)]">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-[var(--color-text)]">
          Amboara Faneva ANDRIAMALALA
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
