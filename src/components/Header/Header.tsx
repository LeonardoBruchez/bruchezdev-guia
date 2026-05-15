import styles from "./Header.module.css";
import { Nav } from "../NavBar/Nav";
import { Button } from "../Buttons/Button";
import { useState, useEffect } from "react";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}
export function Header({ theme, toggleTheme }: HeaderProps) {
  const [terminalText, setTerminalText] = useState("");
  const frase = "> iniciando sua jornada dev...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(frase.substring(0, i + 1));
      i++;
      if (i > frase.length) clearInterval(interval);
    }, 100); // 100ms por letra
    return () => clearInterval(interval);
  }, []);

  const handleLearn = () => {
    console.log("O usuário clicou em aprender");
  };

  return (
    <header className={styles.container}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <div className={styles.terminalBox}>
        <span>{terminalText}</span>
        <span className={styles.cursor}>|</span>
      </div>
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
