import styles from "./PathCards.module.css";

const paths = [
  {
    icon: "🖥️",
    title: "front-end",
    desc: "HTML, CSS e JavaScript do básico ao avançado",
    steps: "8 etapas",
    time: "~3 meses",
    color: "#adff2f",
  },
  {
    icon: "⚙️",
    title: "back-end",
    desc: "lógica, APIs e banco de dados com Python ou Node",
    steps: "10 etapas",
    time: "~4 meses",
    color: "#4f9bff",
  },
  {
    icon: "📊",
    title: "dados",
    desc: "Python, pandas e visualização de dados",
    steps: "7 etapas",
    time: "~3 meses",
    color: "#ff8c42",
  },
  {
    icon: "📱",
    title: "mobile",
    desc: "React Native e criação de apps do zero",
    steps: "6 etapas",
    time: "~2 meses",
    color: "#a345ff",
  },
];

export function PathCards() {
  return (
    <div className={styles.grid}>
      {paths.map((path, idx) => (
        <div key={idx} className={styles.card}>
          <div
            className={styles.iconBox}
            style={{ color: path.color, backgroundColor: `${path.color}15` }}
          >
            {path.icon}
          </div>
          <h3>{path.title}</h3>
          <p>{path.desc}</p>
          <div className={styles.footer} style={{ color: path.color }}>
            <span>{path.steps}</span> &middot; <span>{path.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
