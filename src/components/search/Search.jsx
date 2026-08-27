import styles from "./Search.module.css";

export const Search = ({ search, setSearch, onSearch, reset }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!search.trim()) return;

    onSearch();
  };

  return (
    <>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar GIF..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="submit">Buscar</button>
        <button onClick={reset}>limpiar</button>
      </form>
    </>
  );
};
