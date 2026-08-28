import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      desarrollo web año {new Date().getFullYear()}
      alunmo gerez
    </div>
  );
};
