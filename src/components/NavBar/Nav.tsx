import styles from "./Nav.module.css";

interface NavProps {
  theme: string;
  toggleTheme: () => void;
}

export function Nav({ theme, toggleTheme }: NavProps) {
  return (
    <div className={styles.container}>
      <h1>
        bruchez<strong>.dev</strong>
      </h1>
      <div className={styles.menuGroup}>
        <nav>
          <a href="#Trilhas">Trilhas</a>
          <a href="#Cursos">Cursos</a>
          <a href="#Dicas">Dicas</a>
          <a href="#Faculdade">Faculdade</a>
          <a href="#Checklist">CheckList</a>
          <a href="#contato">Contato</a>
        </nav>
        <button
          className={`${styles.switch} ${theme === "dark" ? styles.dark : ""}`}
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          <div className={styles.thumb}>🌙</div>
        </button>
      </div>
    </div>
  );
}
