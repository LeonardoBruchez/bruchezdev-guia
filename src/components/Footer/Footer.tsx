import styles from "./Footer.module.css";
import { Button } from "../Buttons/Button";

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.contactCard}>
        <div className={styles.textSection}>
          <h2>
            vamos
            <br />
            conversar?
          </h2>
          <p>
            tire dúvidas, dê sugestões
            <br />
            ou só diga oi
          </p>
        </div>
        <div className={styles.buttonGrid}>
          <Button
            variant="cinza"
            className={styles.gridBtn}
            onClick={() =>
              window.open("https://github.com/LeonardoBruchez", "_blank")
            }
          >
            GitHub
          </Button>
          <Button
            variant="cinza"
            className={styles.gridBtn}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/leonardo-bruchez-280635356/",
                "_blank",
              )
            }
          >
            LinkedIn
          </Button>
          <Button
            variant="cinza"
            className={styles.gridBtn}
            onClick={() => window.open("bruchezleonardo@gmail.com", "_blank")}
          >
            E-mail
          </Button>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>feito para a comunidade dev</p>
        <p className={styles.brand}>
          <a
            href="https://github.com/LeonardoBruchez"
            target="_blank"
            rel="noopener noreferrer"
          >
            bruchez<strong>.dev</strong>
          </a>{" "}
          2025
        </p>
      </div>
    </footer>
  );
}
