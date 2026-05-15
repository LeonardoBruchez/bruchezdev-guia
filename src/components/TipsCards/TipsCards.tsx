import styles from "./TipsCards.module.css";

const tips = [
  {
    num: "01",
    text: "consistência bate intensidade. 30min todo dia > 5h no fim de semana",
  },
  {
    num: "02",
    text: "não mude de tecnologia a cada semana. escolha uma e vá fundo",
  },
  {
    num: "03",
    text: "construa projetos reais desde cedo. tutorial hell é real",
  },
  {
    num: "04",
    text: "aprenda inglês técnico. a maioria dos melhores recursos está em inglês",
  },
  {
    num: "05",
    text: "comunidade importa. participe de discords, fóruns e grupos",
  },
  {
    num: "06",
    text: "documente sua evolução. um github ativo vale mais que um currículo",
  },
];

export function TipsCards() {
  return (
    <div className={styles.grid}>
      {tips.map((tip, idx) => (
        <div key={idx} className={styles.card}>
          <h2>{tip.num}</h2>
          <p>{tip.text}</p>
        </div>
      ))}
    </div>
  );
}
