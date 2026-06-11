import { useState } from "react";
import styles from "../css/EX3.module.css";

export default function EX3() {
  const [revelar, setRevelar] = useState(false);

  function handleRevelar() {
    setRevelar((prevState) => !prevState);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 3: clique para revelar</h2>
      <button className={styles.btn} onClick={handleRevelar}>
        {revelar ? "Eu avisei que era vazio" : "Clique para ver o vazio"}
      </button>
      <div className={`${styles.animacao} ${revelar ? styles.aberto : ""}`}>
        <div className={styles.card}></div>
      </div>
    </div>
  );
}
