import styles from "./PracticeCards.module.css";

const practices = [
  {
    icon: "📗",
    title: "Estudos e prática",
    items: [
      "Não dependa só da grade curricular — ela ensina base, o resto é você",
      "treine lógica todo dia, mesmo que 20 minutos (Beecrowd, LeetCode)",
      "faça projetos próprios desde o 1º semestre, mesmo que simples",
    ],
    color: "#adff2f",
  },
  {
    icon: "📘",
    title: "GitHub e portfólio",
    items: [
      'Suba tudo no GitHub, até os projetos "feios" da faculdade',
      "commit frequente vira histórico visível de evolução",
      "perfil ativo vale mais que nota no currículo para recrutadores",
    ],
    color: "#4f9bff",
  },
  {
    icon: "📙",
    title: "LinkedIn desde cedo",
    items: [
      "Crie o perfil no 1º ano, não espere o último semestre",
      "poste sobre o que está aprendendo — recrutadores acompanham",
      "conecte com professores, colegas e profissionais da área",
    ],
    color: "#ff8c42",
  },
  {
    icon: "🪪",
    title: "Estágio e mercado",
    items: [
      "Comece a procurar estágio a partir do 2º semestre!",
      "participe de hackathons — experiência, network e currículo",
      'não espere estar "pronto" para se candidatar a vagas',
    ],
    color: "#a345ff",
  },
];

export function PracticeCards() {
  return (
    <div className={styles.grid}>
      {practices.map((practice, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.header}>
            <div
              className={styles.iconBox}
              style={{
                color: practice.color,
                backgroundColor: `${practice.color}15`,
              }}
            >
              {practice.icon}
            </div>
            <h3>{practice.title}</h3>
          </div>
          <ul className={styles.list}>
            {practice.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <span className={styles.check}>✅</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
