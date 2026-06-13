import { useForm } from "react-hook-form";
import styles from "../css/EX9.module.css";

export default function EX11() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  function onSubmit(dados) {
    alert(JSON.stringify(dados));
    reset();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Exercício 11: formulário com react-hook-form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="nome" className={styles.label}>
            Nome
          </label>
          <input
            type="text"
            id="nome"
            className={styles.input}
            placeholder="Seu nome completo"
            {...register("nome")}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="nome" className={styles.label}>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Seu melhor e-mail"
            {...register("email")}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="nome" className={styles.label}>
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            className={styles.input}
            placeholder="Seu número de telefone"
            {...register("telefone")}
          />
        </div>
        <input type="submit" value="Confirmar" className={styles.btn} />
      </form>
    </div>
  );
}
