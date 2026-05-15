import styles from "./Header.module.css";
import { Nav } from "../NavBar/Nav";
import { Button } from "../Buttons/Button";
export function Header() {
  const handleLearn = () => {
    console.log("O usuário clicou em aprender");
  };
  return (
    <header className={styles.container}>
      <Nav />
      <h4>
        <span></span>Para quem está começando agora
      </h4>
      <h3>
        <span>Construindo</span>{" "}
        <span>
          <strong>seu futuro</strong> na área
        </span>
        <span> antecipadamente</span>
      </h3>
      <p>
        Trilhas de estudo organizadas, cursos gratuitos selecionados e dicas de
        quem já passou por isso.
      </p>
      <div className={styles.buttonGroup}>
        <Button variant="verde" onClick={handleLearn}>
          <a href="#Trilhas">Começar trilha -&gt;</a>
        </Button>
        <Button variant="cinza" onClick={handleLearn}>
          <a href="#Cursos">Ver cursos grátis</a>
        </Button>
      </div>
    </header>
  );
}
