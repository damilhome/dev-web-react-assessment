import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import styles from "./PerguntasRespostas.module.css";

export default function PerguntasRespostas({ pergunta, resposta }) {
  if (!pergunta) return <p>Nenhuma pergunta encontrada.</p>;
  if (typeof pergunta !== "string") {
    return <p>A pergunta está em um formato inválido (deve ser uma String).</p>;
  }

  let confirmacaoResposta = "";
  if (!resposta || resposta.length === 0) {
    confirmacaoResposta = ["Não há uma resposta para essa pergunta."];
  } else if (!Array.isArray(resposta)) {
    if (typeof resposta === "string") {
      confirmacaoResposta = [resposta];
    } else {
      confirmacaoResposta = [
        "Formato da resposta inválido (deve estar em um array).",
      ];
    }
  } else {
    confirmacaoResposta = resposta;
  }

  const [revelar, setRevelar] = useState(false);

  function handleRevelar() {
    setRevelar((prevState) => !prevState);
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.perguntaContainer}>
        <h2 className={styles.pergunta}>{pergunta}</h2>
        <button
          className={`${styles.iconeBtn} ${revelar ? styles.revelar : ""}`}
          onClick={handleRevelar}
        >
          <IoMdArrowDropdown size={50} className={styles.icone} />
        </button>
      </div>

      <div
        className={`${styles.respostaAnimacao} ${revelar ? styles.aberto : ""}`}
      >
        <div className={styles.respostaContainer}>
          {confirmacaoResposta.map((item, index) => {
            if (typeof item !== "string") {
              return (
                <p key={index} className={styles.resposta}>
                  Formato da resposta inválido (deve ser um array de strings).
                </p>
              );
            } else {
              return (
                <p key={index} className={styles.resposta}>
                  {item}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
