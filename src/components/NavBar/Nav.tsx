import styles from "./Nav.module.css";

export function Nav() {
  return (
    <div className={styles.container}>
      <h1>
        bruchez<strong>.dev</strong>
      </h1>
      <nav>
        <a href="#Trilhas">Trilhas</a>
        <a href="#Cursos">Cursos</a>
        <a href="#Dicas">Dicas</a>
        <a href="#Faculdade">Faculdade</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  );
}
