import styles from "./StatsBar.module.css";

export function StatsBar() {
  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <h2>
          12<span>+</span>
        </h2>
        <p>trilhas de estudo</p>
      </div>
      <div className={styles.stat}>
        <h2>
          40<span>+</span>
        </h2>
        <p>cursos gratuitos</p>
      </div>
      <div className={styles.stat}>
        <h2>
          100<span>%</span>
        </h2>
        <p>conteúdo gratuito</p>
      </div>
      <div className={styles.stat}>
        <h2>
          5<span>+</span>
        </h2>
        <p>áreas cobertas</p>
      </div>
    </div>
  );
}
