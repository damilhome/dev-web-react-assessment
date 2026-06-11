import { useState } from "react";
import styles from "../css/EX2.module.css";

export default function EX2() {
  const [cliques, setCliques] = useState(0);
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 2: Contagem de cliques</h2>
      <div className={styles.cliquesContainer}>
        <p className={styles.cliques}>{cliques}</p>
        <button
          className={styles.btn}
          onClick={() => setCliques((prevState) => prevState + 1)}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}
