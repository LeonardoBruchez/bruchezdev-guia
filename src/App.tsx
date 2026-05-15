import { Header } from "./components/Header/Header";
import { StatsBar } from "./components/StatsBar/StatsBar";
import { Section } from "./components/Section/Section";
import { PathCards } from "./components/PathCards/PathCards";
import { CourseList } from "./components/CourseList/CourseList";
import { TipsCards } from "./components/TipsCards/TipsCards";
import { PracticeCards } from "./components/PracticeCards/PracticeCards";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <main>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <StatsBar />

      <Section
        id="Trilhas"
        subtitle="TRILHAS DE ESTUDO"
        title="Por onde começar?"
      >
        <PathCards />
      </Section>

      <Section
        id="Cursos"
        subtitle="CURSOS GRATUITOS"
        title="Selecionados a dedo"
      >
        <CourseList />
      </Section>

      <Section
        id="Dicas"
        subtitle="DICAS GERAIS"
        title="O que ninguém te conta"
      >
        <TipsCards />
      </Section>

      <Section
        id="Faculdade"
        subtitle="VIDA NA FACULDADE"
        title="O que fazer durante o curso"
      >
        <PracticeCards />
      </Section>

      <Footer />
    </main>
  );
}
