import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant: "verde" | "cinza";
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant, onClick, className }: ButtonProps) {
  const classes = `${styles.btnBase} ${styles[variant]} ${className || ""}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
