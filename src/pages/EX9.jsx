import { useEffect, useState } from "react";
import styles from "../css/EX9.module.css";
import { useParams } from "react-router-dom";

export default function EX9() {
  const [dados, setDados] = useState({ nome: "", email: "", telefone: "" });
  const { usuario } = useParams();

  useEffect(() => {
    if (usuario === "danilo") {
      setDados({
        nome: "Danilo Almeida Milhome",
        email: "danilo.milhome@al.infnet.edu.br",
        telefone: "(77) 11111-1111",
      });
    } else {
      setDados({ nome: "", email: "", telefone: "" });
    }
  }, [usuario]);

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    alert(JSON.stringify(dados));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Exercício 9: formulário simples com useState
      </h2>
      <form className={styles.form}>
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
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="telefone">
              Telefone
            </label>
            <input
              type="text"
              className={styles.input}
              name="telefone"
              id="telefone"
              placeholder="Seu número de telefone"
              value={dados.telefone}
              onChange={handleChange}
            />
          </div>
        </div>
        <input
          type="button"
          value="Confirmar"
          className={styles.btn}
          onClick={handleClick}
        />
      </form>
    </div>
  );
}
