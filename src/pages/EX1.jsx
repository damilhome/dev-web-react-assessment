import PerguntasRespostas from "../componentes/PerguntasRespostas/PerguntasRespostas";
import styles from "../css/EX1.module.css";

export default function EX1() {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Exercício 1: Perguntas com respostas</h2>
      <div>
        <PerguntasRespostas
          pergunta="Qual foi a linguagem de programação que levou o homem à Lua na missão Apollo 11?"
          resposta={[
            'Foi o Apollo Guidance Computer (AGC) Assembly. O código era tão complexo para a época que foi "tecido" à mão por costureiras em memórias magnéticas chamadas de "Memory Rope", apelidada de "LOL" (Little Old Ladies).',
          ]}
        />
      </div>
    </div>
  );
}
