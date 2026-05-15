import styles from "./Section.module.css";
import React from "react";

interface SectionProps {
  subtitle: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}

export function Section({ subtitle, title, id, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
