import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>GIPHY</h1>

        <ul className={styles.links}>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
