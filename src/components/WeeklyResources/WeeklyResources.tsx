import styles from "./WeeklyResources.module.css";
import recursosData from "../../data/recursos.json";

interface Recurso {
  id: number;
  titulo: string;
  link: string;
  dataPublicacao: string;
  isNovo: boolean;
}
const recursos = recursosData as Recurso[];

export function WeeklyResources() {
  return (
    <div className={styles.container}>
      {recursos.map((recurso) => (
        <div key={recurso.id} className={styles.card} rel="noopener noreferrer">
          {recurso.isNovo && <span className={styles.badge}>Novo!🔥</span>}

          <h4>{recurso.titulo}</h4>
          <p>
            Publicado no dia:{" "}
            {new Date(recurso.dataPublicacao).toLocaleDateString("pt-BR")}
          </p>
          <span className={styles.comingSoon}>
            🚧 Link direto automatizado com novidades breve!
          </span>
        </div>
      ))}
    </div>
  );
}
