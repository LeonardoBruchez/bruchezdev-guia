import styles from "./PathCards.module.css";

const paths = [
  {
    icon: "🖥️",
    title: "Front-end",
    desc: "HTML, CSS e JavaScript do básico ao avançado",
    steps: "8 etapas",
    color: "#adff2f",
    link: "https://roadmap.sh/frontend",
  },
  {
    icon: "⚙️",
    title: "Back-end",
    desc: "lógica, APIs e banco de dados com Python ou Node",
    steps: "10 etapas",
    color: "#4f9bff",
    link: "https://roadmap.sh/backend",
  },
  {
    icon: "📊",
    title: "Dados",
    desc: "Python, pandas e visualização de dados",
    steps: "7 etapas",
    color: "#ff8c42",
    link: "https://roadmap.sh/data-analyst",
  },
  {
    icon: "📱",
    title: "Mobile",
    desc: "React Native e criação de apps do zero",
    steps: "6 etapas",
    color: "#a345ff",
    link: "https://roadmap.sh/react-native",
  },
];

export function PathCards() {
  return (
    <div className={styles.grid}>
      {paths.map((path, idx) => (
        <a
          key={idx}
          className={styles.card}
          href={path.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.iconBox}
            style={{ color: path.color, backgroundColor: `${path.color}15` }}
          >
            {path.icon}
          </div>
          <h3 style={{ color: path.color }}> {path.title}</h3>
          <p>{path.desc}</p>
          <div className={styles.footer} style={{ color: path.color }}>
            <span>{path.steps}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
