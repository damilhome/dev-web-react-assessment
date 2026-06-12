import { useState } from "react";
import styles from "../css/EX9.module.css";

export default function EX10() {
  const [dados, setDados] = useState({ nome: "", email: "", telefone: "" });

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(dados));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Exercício 10: formulário simples com useState
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              className={styles.input}
              name="nome"
              id="nome"
              placeholder="Seu nome completo"
              value={dados.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              className={styles.input}
              name="email"
              id="email"
              placeholder="Seu melhor e-mail"
              value={dados.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="telefone">
              Telefone
            </label>
            <input
              type="number"
              className={styles.input}
              name="telefone"
              id="telefone"
              placeholder="Seu número de telefone"
              value={dados.telefone}
              onChange={handleChange}
            />
          </div>
        </div>
        <input type="submit" value="Confirmar" className={styles.btn} />
      </form>
    </div>
  );
}
