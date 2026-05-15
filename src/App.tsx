import { Header } from "./components/Header/Header";
import { StatsBar } from "./components/StatsBar/StatsBar";
import { Section } from "./components/Section/Section";
import { PathCards } from "./components/PathCards/PathCards";
import { CourseList } from "./components/CourseList/CourseList";
import { TipsCards } from "./components/TipsCards/TipsCards";
import { PracticeCards } from "./components/PracticeCards/PracticeCards";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <main>
      <Header />
      <StatsBar />

      <Section
        id="trilhas"
        subtitle="TRILHAS DE ESTUDO"
        title="Por onde começar?"
      >
        <PathCards />
      </Section>

      <Section
        id="cursos"
        subtitle="CURSOS GRATUITOS"
        title="Selecionados a dedo"
      >
        <CourseList />
      </Section>

      <Section
        id="dicas"
        subtitle="DICAS GERAIS"
        title="O que ninguém te conta"
      >
        <TipsCards />
      </Section>

      <Section
        id="faculdade"
        subtitle="VIDA NA FACULDADE"
        title="O que fazer durante o curso"
      >
        <PracticeCards />
      </Section>

      <Footer />
    </main>
  );
}
