import { useEffect, useState } from "react";
import styles from "../css/EX5.module.css";
import { useParams } from "react-router-dom";

export default function EX5() {
  const { status } = useParams();
  const [rotulo, setRotulo] = useState("Colaborador");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (status === "admin") {
      setIsChecked(true);
      setRotulo("Administrador");
    } else {
      setIsChecked(false);
      setRotulo("Colaborador");
    }
  }, [status]);

  function handleChange() {
    setIsChecked((prevCheck) => {
      const novoCheck = !prevCheck;
      setRotulo(novoCheck ? "Administrador" : "Colaborador");
      return novoCheck;
    });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 5: mudar rótulo</h2>
      <div className={styles.card}>
        <p className={styles.negrito}>O usuário atual é {rotulo}</p>
        <div className={styles.admContainer}>
          <label htmlFor="adm">Administrador</label>
          <input
            type="checkbox"
            id="adm"
            name="adm"
            checked={isChecked}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
