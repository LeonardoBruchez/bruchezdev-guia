import styles from "./Nav.module.css";

export function Nav() {
  return (
    <div className={styles.container}>
      <h1>
        bruchez<strong>.dev</strong>
      </h1>
      <nav>
        <a href="#trilhas">Trilhas</a>
        <a href="#cursos">Cursos</a>
        <a href="#dicas">Dicas</a>
        <a href="#faculdade">Faculdade</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  );
}
