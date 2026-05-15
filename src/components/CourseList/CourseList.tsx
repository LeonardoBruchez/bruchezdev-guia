import styles from "./CourseList.module.css";

const courses = [
  {
    badge: "grátis",
    title: "CC50 — Introdução à Ciência da Computação de Harvard (Traduzido)",
    platform: "Fundação Estudar",
    url: "https://www.estudarfora.org.br/cc50-v2/",
    desc: "O famoso curso de Harvard 100% em português. Ensina a base com C, Python, SQL e mais.",
  },
  {
    badge: "grátis",
    title: "Curso em Vídeo ( YouTube ) — HTML e CSS",
    platform: "YouTube",
    url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
    desc: "Excelente para iniciar e entender estruturas web do 0, aprendendo o essencial de tags e estilos.",
  },
  {
    badge: "grátis",
    title: "Curso em Vídeo ( YouTube ) — JavaScript",
    platform: "YouTube",
    url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1",
    desc: "Aprenda a principal linguagem do navegador com ótima didática, incluindo lógica e manipulação DOM.",
  },
  {
    badge: "grátis",
    title: "Cursos FIAP — IA, Python, Java, Blockchain, Cloud e mais",
    platform: "FIAP",
    url: "https://on.fiap.com.br/local/programaeucapacito/",
    desc: "Pílulas de conhecimento gratuitas com certificado oficial FIAP nas áreas mais quentes da tech.",
  },
  {
    badge: "grátis",
    title:
      "Santander Open Academy — IA, Lógica, Segurança Cibernética, Python e mais",
    platform: "Santander Open Academy",
    url: "https://app.santanderopenacademy.com/pt-BR/program/search?resourceType=SOA_COURSE&resourceType=LMS_COURSE&category=TECH&status=OPEN",
    desc: "Bolsas e cursos liberados frequentemente para o mercado em temas atuais e de alto valor.",
  },
  {
    badge: "grátis",
    title: "Python para Todos — Dr. Chuck",
    platform: "Coursera / auditável",
    url: "https://www.coursera.org/specializations/python",
    desc: "Um dos cursos mais populares do mundo de Python. Faça a inscrição como ouvinte gratuitamente.",
  },
  {
    badge: "grátis",
    title: "Cisco Networking Academy — Cybersecurity, IoT e mais",
    platform: "Cisco",
    url: "https://www.cisco.com/c/pt_br/training-events/networking-academy/women-rock-it/courses.html#~resumen",
    desc: "Oferece forte embasamento em redes e infraestrutura. Segurança em nível global.",
  },
  {
    badge: "grátis",
    title: "Implementando Banco de Dados",
    platform: "Fundação Bradesco",
    url: "https://www.ev.org.br/cursos/implementando-banco-de-dados",
    desc: "Aprenda Modelagem e a teoria por trás dos BDs relacionais modernos na prática.",
  },
  {
    badge: "grátis",
    title: "Trilha Banco de Dados",
    platform: "Fundação Bradesco",
    url: "https://www.ev.org.br/trilhas-de-conhecimento/banco-de-dados",
    desc: "Conceitos desde o zero até a implementação avançada SQL em bancos de dados do mercado.",
  },
  {
    badge: "grátis",
    title: "Linux Essentials",
    platform: "Cisco NetAcad",
    url: "https://www.netacad.com/pt/courses/linux-essentials?courseLang=en-US",
    desc: "Dominar o terminal Linux é o diferencial para DevOps e Back-End. Curso essencial.",
  },
  {
    badge: "grátis",
    title: "Linux Unhatched",
    platform: "Cisco NetAcad",
    url: "https://www.netacad.com/pt/courses/linux-unhatched?courseLang=en-US",
    desc: "Um mergulho rápido de 8h nos primeiros passos com a linha de comando do Linux.",
  },
  {
    badge: "grátis",
    title: "Microsoft Learn — Cursos e Certificações",
    platform: "Microsoft",
    url: "https://learn.microsoft.com/pt-br/training/browse/",
    desc: "Aprenda direto com quem cria as tecnologias: Azure, .NET, IA. Com material muito rico e guiado.",
  },
];

export function CourseList() {
  return (
    <div className={styles.list}>
      {courses.map((course, idx) => (
        <a
          key={idx}
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item}
        >
          <span className={styles.badge}>{course.badge}</span>
          <div className={styles.info}>
            <span className={styles.title}>{course.title}</span>
            <span className={styles.desc}>{course.desc}</span>
          </div>
          <span className={styles.platform}>{course.platform}</span>
        </a>
      ))}
    </div>
  );
}
