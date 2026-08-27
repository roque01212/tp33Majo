import styles from "./Card.module.css";

export const Card = ({ gif }) => {
  return (
    <article className={styles.card}>
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        className={styles.gif}
      />

      <div className={styles.content}>
        <h3>{gif.title || "GIF sin título"}</h3>

        <p>GIPHY</p>
      </div>
    </article>
  );
};
