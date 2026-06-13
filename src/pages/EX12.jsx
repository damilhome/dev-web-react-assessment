import { useForm } from "react-hook-form";
import { maskPhone, regexEmail } from "../utils/Regex";
import styles from "../css/EX9.module.css";

export default function EX12() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", reValidateMode: "onBlur" });

  function onSubmit(dados) {
    alert(JSON.stringify(dados));
    reset();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Exercício 12: formulário com react-hook-form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.messageInput}>
          <div className={styles.inputContainer}>
            <label htmlFor="nome" className={styles.label}>
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className={styles.input}
              placeholder="Seu nome completo"
              {...register("nome", {
                required: "O nome é obrigatório",
                maxLength: {
                  value: 50,
                  message: "O nome deve ter, no máximo, 50 caracteres.",
                },
              })}
            />
          </div>
          {errors.nome?.message && (
            <p className={styles.erro}>{errors.nome?.message}</p>
          )}
        </div>
        <div className={styles.messageInput}>
          <div className={styles.inputContainer}>
            <label htmlFor="nome" className={styles.label}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Seu melhor e-mail"
              {...register("email", {
                required: "O e-mail é obrigatório",
                maxLength: {
                  value: 30,
                  message: "O e-mail deve ter, no máximo, 30 caracteres.",
                },
                pattern: {
                  value: regexEmail,
                  message: "O campo e-mail é inválido.",
                },
              })}
            />
          </div>
          {errors.email?.message && (
            <p className={styles.erro}>{errors.email?.message}</p>
          )}
        </div>
        <div className={styles.messageInput}>
          <div className={styles.inputContainer}>
            <label htmlFor="nome" className={styles.label}>
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              className={styles.input}
              placeholder="(00) 00000-0000"
              {...register("telefone", {
                maxLength: {
                  value: 15,
                  message: "O telefone deve ter, no máximo, 15 caracteres.",
                },
                minLength: {
                  value: 14,
                  message: "O número de telefone está incompleto.",
                },
                onChange: (e) => {
                  e.target.value = maskPhone(e.target.value);
                },
              })}
            />
          </div>
          {errors.telefone?.message && (
            <p className={styles.erro}>{errors.telefone?.message}</p>
          )}
        </div>
        <input type="submit" value="Confirmar" className={styles.btn} />
      </form>
    </div>
  );
}
