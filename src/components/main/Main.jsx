import { useEffect, useState } from "react";

import { Card } from "../card/Card";
import { Search } from "../search/Search";

import styles from "./Main.module.css";
import { getGifByQuery } from "../../actions/get-gif-by-query";

export const Main = () => {
  const [gifs, setGifs] = useState([]);

  const [search, setSearch] = useState("");

  const [times, setTimes] = useState(0);

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const getGifs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getGifByQuery(query);

      setGifs(response);
    } catch (error) {
      console.error(error);
      setError("No se pudieron cargar los GIFs.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setQuery(search);
  };

  const handleReset = () => {
    setQuery("");
    setSearch("");
  };

  useEffect(() => {
    getGifs();
  }, [query]);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.badge}>Trabajo Práctico N.º 3</p>

        <h2>Buscador de GIFs</h2>

        <p>Busca tus GIFs favoritos utilizando la API de GIPHY.</p>
      </section>

      <Search
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        reset={handleReset}
      />

      <section>
        {/* Cargando */}
        {loading && <p className={styles.message}>Cargando GIFs...</p>}

        {/* Error */}
        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && (
          // exito
          <div className={styles.grid}>
            {gifs.map((gif) => (
              //  por cada gif mostramos una tarjeta con el gif
              <Card key={gif.id} gif={gif} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
