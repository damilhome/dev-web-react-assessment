import { useState } from "react";
import styles from "../css/EX5.module.css";

export default function EX5() {
  const [rotulo, setRotulo] = useState("Colaborador");

  function handleChange() {
    setRotulo((prevState) => {
      if (prevState === "Colaborador") {
        return "Administrador";
      }
      return "Colaborador";
    });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 5: mudar rótulo</h2>
      <div className={styles.card}>
        <p className={styles.negrito}>O usuário atual é {rotulo}</p>
        <div className={styles.admContainer}>
          <label htmlFor="adm">Administrador</label>
          <input type="checkbox" id="adm" name="adm" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
